import {expect, test} from '@jest/globals'
import {OptionsFromEnv, Options} from '../src/input'

describe('input', () => {
  test('all args set', () => {
    let options = OptionsFromEnv({
      GITHUB_REPOSITORY: 'dependency-management/dependency-scanner',
      GITHUB_SHA: 'e3a45c6c16c1464826b36a598ff39e6cc98c4da4'
    })
    let expected: Options = {
      sha: 'e3a45c6c16c1464826b36a598ff39e6cc98c4da4',
      repository: 'dependency-management/dependency-scanner',
      reportUrl: 'https://master.d2wyo5i4kvbomx.amplifyapp.com/gh/check',
      dependencies: []
    }
    expect(options).toEqual(expected)
  })
})
