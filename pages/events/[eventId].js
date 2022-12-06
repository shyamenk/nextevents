import Image from 'next/image'
import {getEventById, getAllEvents} from '../../utils/fetcher'

const EventDetailPage = ({event}) => {
  return (
    <div className="  w-full h-60 flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700">
      <h1 className="text-6xl text-center text-white">{event.title}</h1>
      <div className=" flex p-4 z-10 absolute top-48  bg-slate-600 shadow-xl  rounded-lg  ">
        <div className="">
          <Image
            className="hidden sm:inline-flex h-40 w-40 rounded-full ring-4 ring-white  md:scale-100"
            src={event.image}
            alt={event.id}
            width={300}
            height={160}
          />
        </div>
        <div className="flex flex-col p-6 text-start justify-center items-start">
          <time className="text-lg text-white">{event.date}</time>
          <address className="text-xl text-white">{event.location}</address>
        </div>
        <p className=" text-md font-bold absolute top-52">
          {event.description}
        </p>
      </div>
    </div>
  )
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
    fallback: false,
  }
}
