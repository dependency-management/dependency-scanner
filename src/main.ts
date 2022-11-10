import * as core from '@actions/core'
import * as http from '@actions/http-client'

function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error(
      `Missing required environment value. Are you running in GitHub Actions?`
    )
  }
}

async function run(): Promise<void> {
  try {
    const dependencies: string[] = core.getMultilineInput('dependencies')
    core.debug(
      `Extracting semantic trees from provided dependencies ${dependencies[0]} ...`
    )
    // get the repo name - required for authentication
    // get latest commit
    const {GITHUB_REPOSITORY, GITHUB_SHA} = process.env
    assertIsDefined(GITHUB_REPOSITORY)
    assertIsDefined(GITHUB_SHA)
    // call rest endpoint for evaluation
    const defaultProviderEndpoint = `https://master.d2wyo5i4kvbomx.amplifyapp.com/gh/${GITHUB_REPOSITORY}/${GITHUB_SHA}`
    const client = new http.HttpClient('actions-github-app-token')
    client.get(defaultProviderEndpoint)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
