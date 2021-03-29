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
  {
    allDummyData {
      nodes {
        foo
      }
    }
  }
`
