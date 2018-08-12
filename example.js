'use strict'
const resolveFromTarball = require('@pnpm/tarball-resolver').default

resolveFromTarball({
  pref: 'https://registry.npmjs.org/is-array/-/is-array-1.0.1.tgz',
}, {
  registry: 'https://registry.npmjs.org',
})
.then(resolveResult => console.log(JSON.stringify(resolveResult, null, 2)))
