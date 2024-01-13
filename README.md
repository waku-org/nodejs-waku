
## Intro

This is a NodeJs wrapper around Waku

## Requirements

node-gyp is required to be installed in the system.

The following commands should be run to install npm dependencies:

cd src && npm install bindings

## Create a package

1. Run `npm run prepare-package`
2. Run `npm run build-libwaku` (step required to build the libwaku.so library)
3. Run `npm run build-gyp`
4. Run `npm run build-package`

## Publish a package

Run `npm run publish-package`

---

:information_source: See the package.json file for details about npm commands definitions.


