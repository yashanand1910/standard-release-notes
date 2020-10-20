import {extractReleaseNotes} from './release-notes';
import {test} from '@jest/globals';

const changelogContent = `
# Changelog

This changelog is only for testing purposes.

### [0.0.2-beta.2](https://github.com/yashanand1910/rozgar.today/compare/v0.0.2-beta.1...v0.0.2-beta.2) (2020-10-01)

notes for specific version 1

### [0.0.2-beta.1](https://github.com/yashanand1910/rozgar.today/compare/v0.0.2-beta.0...v0.0.2-beta.1) (2020-10-01)

notes for specific version 2
`

test('extract version release notes 1', async () => {

  const notes = await extractReleaseNotes(changelogContent, '0.0.2-beta.2');
  expect(notes).toBe('notes for specific version 1');

});

test('extract version release notes 2', async () => {

  const notes = await extractReleaseNotes(changelogContent, '0.0.2-beta.1');
  expect(notes).toBe('notes for specific version 2');

});
