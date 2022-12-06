import EventItem from './event-item'

const EventList = ({lists}) => {
  return (
    <>
      {lists.map(list => (
        <ul key={list.id}>
          <EventItem {...list} />
        </ul>
      ))}
    </>
  )
}

export default EventList
