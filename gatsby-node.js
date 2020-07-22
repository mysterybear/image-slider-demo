const path = require(`path`)

// Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `node__recipe`) {
    const slug = `/recipes/${node.drupal_internal__nid}/`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
