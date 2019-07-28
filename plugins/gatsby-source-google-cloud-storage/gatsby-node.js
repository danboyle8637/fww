const fetch = require("node-fetch");
const { Storage } = require("@google-cloud/storage");

const storage = new Storage();

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions;

  delete configOptions.plugins;

  console.log("Testing my plugin", configOptions);
};
