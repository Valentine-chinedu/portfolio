![portfolio-photo](https://github.com/Valentine-chinedu/portfolio/assets/65251662/e937e71a-ce4b-4af6-a547-4d73aac4477f)


## General info
This is my personal Portfolio website built to showcase projects and other relevent information.

## Tools

- Javascript
- Nextjs
- Tailwind CSS
- Framer motion

## Local development

Use Node.js 26.x. With nvm installed:

```sh
nvm install
nvm use
npm ci
npm run dev
```

Run `npm test -- --runInBand` for tests and `npm run build` for a production
build. The build needs access to the Hashnode API and a `HASHNODE_ACCESS_TOKEN`
in `.env.local`. Configure deployment environments to use Node.js 26.x too.

Next.js 15 and React 18 replace Next.js 12, whose bundled JWT dependency uses
the removed Node.js `SlowBuffer` API. Images use `next/legacy/image` to preserve
their existing layout. The scoped npm overrides let `react-grid-carousel` share
the application's React version despite its outdated React 16 peer declarations.

## View Website

[Portfolio](https://www.nedu.dev/) 





