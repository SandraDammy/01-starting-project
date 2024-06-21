import Link from 'next/link'
import React from 'react'

const BlogPage = () => {
  return (
    <main>
      <h1>The Blog Page</h1>
      <p>
        <Link href="/blog/post-1">Blog Page-1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Blog Page-2</Link>
      </p>
    </main>
  )
}

export default BlogPage
