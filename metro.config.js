const { getDefaultConfig } = require('expo/metro-config');

// The @rangular/ui and @rangular/runtime packages live in vendor/ inside
// this project and are linked with file: dependencies. They are inside
// the project root, so the default Metro config watches and bundles
// them like any other project file.
const config = getDefaultConfig(__dirname);

module.exports = config;
