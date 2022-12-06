import {getEventById, getAllEvents} from '../../utils/fetcher'

const EventDetailPage = ({event}) => {
  return <div>{event?.description}</div>
}

export default EventDetailPage

export async function getStaticProps({params}) {
  const eventId = params.eventId
  const singleEvent = await getEventById(eventId)
  return {
    props: {
      event: singleEvent,
    },
  }
}

export async function getStaticPaths() {
  const allEvents = await getAllEvents()

  const path = allEvents.map(event => ({
    params: {eventId: event.id},
  }))
  return {
    paths: path,
    fallback: true,
  }
}
