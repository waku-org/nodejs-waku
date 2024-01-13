
## Intro

NodeJs wrapper around Waku

The Waku node binary is generated in a shape of a shared library, libwaku.so. This library is currently created from
the `nwaku` repository, a.k.a. "Nim Waku" (vendor dependency.)

On the other hand, the `libwaku.so` library is wrapped to NodeJs
by means of the `node-gyp` utility.

## Requirements

node-gyp is required to be installed in the system.

## Create a package

1. Run `npm run prepare-package`
2. Run `npm run build-libwaku` (step required to build the libwaku.so library)
3. Run `npm run build-gyp`
4. Run `npm run build-package`

## Publish a package

Run `npm run publish-package`

---

:information_source: See the package.json file for details about npm commands definitions.


