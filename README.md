# A/B Testing Example with Statsig

By A/B testing directly on the server-side, you'll reduce layout shift from client-loaded experiments and improving your site's performance with smaller JavaScript bundles.

## Demo

PLACEHOLDER: https://edge-functions-ab-testing-with-statsig.vercel.app

Since the different variants are generated statically on the server side, it mitigates any potential layout shift that could happen when a variant is inserted into the DOM client side, hence improving your site's performance.

The magic happens in the [`_middleware.ts` file](pages/home/_middleware.ts):

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/examples/tree/main/edge-functions/ab-testing-simple&project-name=ab-testing-with-statsig&repository-name=ab-testing-with-statsig)

## Getting Started

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/statsig-io/vercel-edge-example ab-testing-with-statsig
# or
yarn create next-app --example https://github.com/statsig-io/vercel-edge-example ab-testing-with-statsig
```

Next, run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).
