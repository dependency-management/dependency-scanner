import * as core from '@actions/core'
import * as http from '@actions/http-client'
import {Options, OptionsFromEnv} from './input'

// Entry point for GitHub Action runner.
export async function run(opts: Options): Promise<void> {
  try {
    // call rest endpoint for evaluation
    const defaultProviderEndpoint = `${opts.reportUrl}/${opts.repository}/${opts.sha}`
    core.debug(`Calling ${defaultProviderEndpoint}`)
    const client = new http.HttpClient('actions-github-app-token')
    let response = await client.get(defaultProviderEndpoint)
    core.debug(`Response ${response}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

const opts: Options = OptionsFromEnv(process.env)
run(opts)
