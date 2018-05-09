import {ResolveResult} from '@pnpm/resolver-base'
import parseNpmTarballUrl from 'parse-npm-tarball-url'

export default async function resolveTarball (
  wantedDependency: {pref: string},
): Promise<ResolveResult | null> {
  if (!wantedDependency.pref.startsWith('http:') && !wantedDependency.pref.startsWith('https:')) {
    return null
  }

  if (wantedDependency.pref.startsWith('http://registry.npmjs.org/')) {
    const parsed = parseNpmTarballUrl(wantedDependency.pref)
    if (parsed) {
      return {
        id: `${parsed.host}/${parsed.pkg.name}/${parsed.pkg.version}`,
        normalizedPref: wantedDependency.pref,
        resolution: {
          tarball: wantedDependency.pref,
        },
        resolvedVia: 'url',
      }
    }
  }

  return {
    id: wantedDependency.pref
      .replace(/^.*:\/\/(git@)?/, '')
      .replace(/\.tgz$/, ''),
      // TODO BREAKING CHANGE: uncomment the following: (or never remove extensions)
      // .replace(/\.tar.gz$/, ''),
      // .replace(/\.tar$/, ''),
    normalizedPref: wantedDependency.pref,
    resolution: {
      tarball: wantedDependency.pref,
    },
    resolvedVia: 'url',
  }
}
