import statsig from 'statsig-node';

export async function getExperiment(
  req: Request, 
  experimentId: string
): Promise<any> {
  await initialize();
  return await statsig.getExperiment(
    getUser(req),
    experimentId,
  );
}

async function initialize() {
  const apiKey = process.env.STATSIG_SERVER_API_KEY;
  if (!apiKey) {
    throw new Error('API Key not set in .env');
  }
  await statsig.initialize(apiKey);
}


function getUser(req: Request) {
  let uid = req.cookies['uid'];
  if (!uid) {
    uid = crypto.randomUUID();
  }
  return {
    userID: uid,
    userAgent: req.ua.ua,
    country: req.geo.country,
    ip: req.ip,
  };
}