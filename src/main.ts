import * as core from '@actions/core'
import {wait} from './wait'
import { Octokit as ActionsOctokit } from '@octokit/action';

async function run(): Promise<void> {
  try {
    const dependencies: string[] = core.getMultilineInput('dependencies')
    core.debug(`Extracting semantic trees from provided dependencies ...`) 
    // get the repo name - required for authentication
    const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;
    if (!GITHUB_REPOSITORY) {
      throw new Error(`env.GITHUB_REPOSITORY not set`);
    }
    // get latest commit
    // call rest endpoint for evaluation
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
