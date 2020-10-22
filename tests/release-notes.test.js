import { extractReleaseNotes, extractReleaseNotesFromPath } from "../src/release-notes";
import {test} from '@jest/globals';

const changelogContent = `
# Changelog

This changelog is only for testing purposes.

### [0.0.2-beta.2](https://github.com/yashanand1910/rozgar.today/compare/v0.0.2-beta.1...v0.0.2-beta.2) (2020-10-01)

notes for specific version 1

### [0.0.2-beta.1](https://github.com/yashanand1910/rozgar.today/compare/v0.0.2-beta.0...v0.0.2-beta.1) (2020-10-01)

notes for specific version 2
`

test('extract release notes from string 1', async () => {

  const notes = await extractReleaseNotes(changelogContent, '0.0.2-beta.2');
  expect(notes).toBe('notes for specific version 1');

});

test('extract release notes from string 2', async () => {

  const notes = await extractReleaseNotes(changelogContent, '0.0.2-beta.1');
  expect(notes).toBe('notes for specific version 2');

});

test('extract release notes from path 1', async () => {

  const notes = await extractReleaseNotesFromPath('tests/test-changelog.md', '0.0.2-beta.2');
  expect(notes).toBe('notes for specific version 1');

});

test('extract release notes from path 2', async () => {

  const notes = await extractReleaseNotesFromPath('tests/test-changelog.md', 'refs/tags/0.0.2-beta.1');
  expect(notes).toBe('notes for specific version 2');

});
