# Standard Release Notes ![release-please](https://github.com/yashanand1910/standard-release-notes/workflows/release-please/badge.svg)

A GitHub action to extract release notes for a version from the changelog generated by [standard-version](https://github.com/conventional-changelog/standard-version). For changelogs based on [Conventional Commits](https://www.conventionalcommits.org/).

## Usage

### Inputs

- #### `changelog_path`
    - **Optional**
    - Path of the changelog file (relative to root). Default is `./CHANGELOG.md`.

- #### `version`
    - **Required**
    - Name of the version in the changelog. (e.g. *v1.2.1-beta.3*).
    - You can also provide the tag using `${{ github.ref }}`, if the workflow trigger is on push of tags.

### Outputs

- #### `release_notes`
    - The release notes for a version.

### Example

```yaml
# Get the release notes. Set a convenient 'id' for accessing later

uses: yashanand1910/standard-release-notes@v1.2.1
id: get_release_notes
with:
  changelog_path: ./CHANGELOG.md # Optional
  version: ${{ github.ref }} # Required

...

# An example of how to access the output

body: ${{ steps.get_release_notes.outputs.release_notes }}

```
