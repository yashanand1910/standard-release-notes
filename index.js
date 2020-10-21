import { getReleaseNotesFromPath } from './release-notes';
import * as core from '@actions/core';

/**
 * Run action
 * @returns {Promise<void>}
 */
const run = async () => {

  // Get inputs
  const changelogPath = core.getInput('changelog_path');
  const version = core.getInput('version');
  console.info(`[input] Changelog path: ${changelogPath}`);

  // Process
  const releaseNotes = await getReleaseNotesFromPath(changelogPath, version);
  console.info(`[process] Release notes retrieved`);

  // Set outputs
  core.setOutput('release-notes', releaseNotes);

}

run().catch((error) => {

  console.error(error.message);
  core.setFailed(error.message);

});
