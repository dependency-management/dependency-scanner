import Dict = NodeJS.Dict
import * as core from '@actions/core'

export type Options = {
  dependencies?: string[]
  repository?: string
  sha?: string
  reportUrl: string
}

export function OptionsFromEnv(env: Dict<string>): Options {
  const opts: Options = {
    reportUrl: 'https://master.d2wyo5i4kvbomx.amplifyapp.com/gh/check'
  }
  opts.dependencies = core.getMultilineInput('dependencies')
  const {GITHUB_REPOSITORY, GITHUB_SHA} = env
  assertIsDefined(GITHUB_REPOSITORY)
  assertIsDefined(GITHUB_SHA)
  opts.repository = GITHUB_REPOSITORY
  opts.sha = GITHUB_SHA
  return opts
}

function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error(
      `Missing required environment value. Are you running in GitHub Actions?`
    )
  }
}
