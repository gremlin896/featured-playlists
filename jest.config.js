const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/featured-playlists-web',
    '<rootDir>/libs/featured-playlists',
  ],
};
