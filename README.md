# @pnpm/tarball-resolver

[![Greenkeeper badge](https://badges.greenkeeper.io/pnpm/tarball-resolver.svg)](https://greenkeeper.io/)

> Resolver for tarball dependencies

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/@pnpm/tarball-resolver.svg)](https://www.npmjs.com/package/@pnpm/tarball-resolver) [![Build Status](https://img.shields.io/travis/pnpm/tarball-resolver/master.svg)](https://travis-ci.org/pnpm/tarball-resolver)
<!--/@-->

## Installation

```sh
npm i -S @pnpm/tarball-resolver
```

## Usage

<!--@example('./example.js')-->
```js
'use strict'
const resolveFromTarball = require('@pnpm/tarball-resolver').default

resolveFromTarball({pref: 'http://registry.npmjs.org/is-array/-/is-array-1.0.1.tgz'})
  .then(resolveResult => console.log(resolveResult))
  //> { id: 'registry.npmjs.org/is-array/1.0.1',
  //    normalizedPref: 'http://registry.npmjs.org/is-array/-/is-array-1.0.1.tgz',
  //    resolution: { tarball: 'http://registry.npmjs.org/is-array/-/is-array-1.0.1.tgz' } }
```
<!--/@-->

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io/)
