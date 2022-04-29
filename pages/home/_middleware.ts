import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import statsig from 'statsig-node';
import { Redis } from '@upstash/redis';

const UID_COOKIE = 'uid';
const BOOSTRAP_KEY = 'statsig::bootstrap';

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  await initialize();

  const user = getUser(req);
  const expConfig = await statsig.getExperiment(user, 'test_vercel_variants');
  const shape_variant = expConfig.get('shape', 'square');

  console.log(expConfig);

  const url = req.nextUrl.clone();
  url.pathname = `/home/${shape_variant}`;
  const res = NextResponse.rewrite(url);

  if (!req.cookies[UID_COOKIE]) {
    res.cookie(UID_COOKIE, user.userID);
  }

  statsig.shutdown();
  return res;
}

async function initialize() {
  const apiKey = process.env.STATSIG_SERVER_API_KEY;
  if (!apiKey) {
    throw new Error('API Key not set in .env');
  }

  const redis = Redis.fromEnv();
  const bootstrapValues = await redis.get(BOOSTRAP_KEY);
  await statsig.initialize(apiKey, {
    bootstrapValues: (bootstrapValues ? JSON.stringify(bootstrapValues) : undefined),
    rulesUpdatedCallback: async (specsString) => {
      await redis.set(BOOSTRAP_KEY, specsString);
    }
  });  
}

function getUser(req: NextRequest) {
  let uid = req.cookies[UID_COOKIE];
  if (!uid) {
    uid = String(Math.random() * 100000);
  }
  return {
    userID: uid,
    userAgent: req?.ua?.ua,
    country: req?.geo?.country,
    ip: req.ip,
  };
}