import client from './client'

const eventFields = `
  title, 
  "slug": slug.current,
  preAmble,
  "image": image{alternativeText, caption, asset->{url}},
  "category": category->title,
  body[]{...}
`

export const getEvents = async () => {
  const data = await client.fetch(`*[_type == "event"]{${eventFields}}`)
  return data
}

export const getEvent = async (slug) => {
  const data = await client.fetch(
    `*[_type == "event" && slug.current == $slug]{${eventFields}}`,
    { slug }
  )
  return data?.[0]
}
