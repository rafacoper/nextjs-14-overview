import React from 'react'

export default function Docs({ params }: {params: { slug: string[] }}) {
  if (params.slug?.length === 2) {
    return (
      <h2>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h2>
    )
  } else if (params.slug?.length === 1) {
    return (
      <h2>Viewing docs for feature {params.slug[1]} and concept {params.slug[0]}</h2>
    )
  }
  return (
    <h1>
      Docs Home Page
    </h1>
  )
}
