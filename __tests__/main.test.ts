
import * as process from 'process'

// The environment values defined in the GitHub Actions Environment
// https://docs.github.com/en/actions/reference/environment-variables#default-environment-variables
process.env.GITHUB_REPOSITORY = "dependency-management/dependency-scanner";
process.env.GITHUB_SHA = "e3a45c6c16c1464826b36a598ff39e6cc98c4da4";