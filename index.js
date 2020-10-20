import { getReleaseNotesFromPath } from './release-notes';
import core from '@actions/core';

/**
 * Run action
 * @returns {Promise<void>}
 */
const run = async () => {
  try {

    // Get inputs
    const changelogPath = core.getInput('changelog_path');
    const version = core.getInput('version');
    console.info(`[input] Changelog path: ${changelogPath}`);

    // Process
    const releaseNotes = await getReleaseNotesFromPath(changelogPath, version);
    console.info(`[process] Release notes retrieved`);

    // Set outputs
    core.setOutput('release-notes', releaseNotes);

  } catch (error) {

    console.error(error.message);
    core.setFailed(error.message);

  }
}

run().then();
