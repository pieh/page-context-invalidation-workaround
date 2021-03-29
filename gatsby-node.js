// this is just simulating changing page context for every build (by incrementing currentCount)
exports.createPages = async ({ actions, cache, reporter }) => {
  const CACHE_KEY = `_COUNTER_`
  const currentCount = ((await cache.get(CACHE_KEY)) || 0) + 1

  actions.createPage({
    path: `/`,
    component: require.resolve(`./src/templates/index`),
    context: {
      currentCount,
    },
  })

  await cache.set(CACHE_KEY, currentCount)
  reporter.info(`Index page should have "{ currentCount: ${currentCount} }"`)
}

// create some dummy data that doesn't change between build, but it's queried by page
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const content = {
    foo: `bar`,
  }

  actions.createNode({
    ...content,
    id: createNodeId(`dummy-data`),
    internal: {
      type: `DummyData`,
      contentDigest: createContentDigest(content),
    },
  })
}
