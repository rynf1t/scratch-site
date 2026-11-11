# Scratch site

The Scratch landing page and guides, built with toolsite for https://scratch.itsryan.me.

Run `npm ci` and `npm run dev` to preview the site. Run `npm run check` and `npm run build` before publishing.

Edit the guides in Scratch’s `docs/user/` directory and run `make docs` from the Scratch checkout. This copies the current guides into `content/docs/` and checks that they match. Edit the landing page in `site.config.ts` and add release notes in `content/changelog/`.

The site’s repository contains the website and guides. Scratch’s app source and build are separate.
