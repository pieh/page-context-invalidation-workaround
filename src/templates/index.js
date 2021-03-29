import React from "react"
import { graphql } from "gatsby"

export default function Home({ data, pageContext }) {
  return (
    <div>
      <pre>{JSON.stringify({ data, pageContext }, null, 2)}</pre>
    </div>
  )
}

export const query = graphql`
  # Gatsby implicitly does add $path as variable
  # We can use it to as argument for our workaround
  query($path: String!) {
    allDummyData {
      nodes {
        foo
      }
    }
    # use our workaround and alias null result to something short (_)
    # that doesn't expose what it does and saves few bytes
    _: contextChangeNotInvalidingQueryWorkaround(path: $path)
  }
`
