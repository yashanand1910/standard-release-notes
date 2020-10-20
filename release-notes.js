import { promises as fs } from 'fs';

/**
 * Extract release notes from any multi-line string
 * @param {string} content
 * @param {string} version
 * @returns {*}
 */
export const extractReleaseNotes = (content, version) => {

  version = version.replace(/^v/, '');
  const regExp = new RegExp(
    `## v?\\[?${version}[^\\n]*\\n(.*?)(\\n##\\s|\\n### \\[?[0-9]+\\.|($(?![\r\n])))`,
    'ms'
  );
  const match = content.match(regExp);

  if (!match) {
    throw Error('Could not find release notes for specified version');
  }

  return match[1].trim();

}

/**
 * Get release notes from a file path
 * @param {string} path - Path to file
 * @param {string} version - e.g. v1.2.0-beta.2
 * @returns {Promise<string>} - Release notes
 */
export const getReleaseNotesFromPath = async (path, version) => {
  try {

    const content = await fs.readFile(path, 'utf-8');

    return extractReleaseNotes(content, version);

  } catch (error) {

    throw new Error(`[get release notes] ${error.message}`);

  }
}
