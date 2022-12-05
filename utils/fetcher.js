export async function getAllEvents() {
  const response = await fetch(
    'https://property-mate-6b9ac-default-rtdb.firebaseio.com/events.json',
  )

  const data = await response.json()

  const events = []
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    })
  }

  return events
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents()
  const data = allEvents.filter(featured => featured.isFeatured)
  return data
}

export async function getEventById(id) {
  const allEvents = await getAllEvents()
  return allEvents.find(event => event.id === id)
}
