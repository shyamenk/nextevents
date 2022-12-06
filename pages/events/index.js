import React from 'react'
import EventList from '../../components/events/event-list'
import {getAllEvents} from '../../utils/fetcher'

const AllEventsPage = ({events}) => {
  return (
    <div className="max-w-2xl py-8 mx-auto space-y-8 rounded-xl ">
      <EventList lists={events} />
    </div>
  )
}

export default AllEventsPage

export async function getStaticProps() {
  const allEvents = await getAllEvents()

  return {
    props: {
      events: allEvents,
    },
  }
}
