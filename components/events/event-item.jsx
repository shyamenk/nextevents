import Image from 'next/image'
import Link from 'next/link'
import Button from '../../ui/Button'

const EventItem = ({title, image, date, location, id}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formattedAddress = location.replace(', ', '\n')

  const link = `/events/${id}`
  return (
    <li className="  md:flex space-x-4 shadow-lg  bg-white ">
      <div className="object-contain">
        <Image
          src={image}
          className="rounded-l-lg"
          alt="Picture of the author"
          width={300}
          height={300}
          priority
        />
      </div>
      <div className="">
        <h2 className="text-xl font-bold text-gray-800  py-2 pl-1 ">{title}</h2>
        <time className="p-1 text-gray-500 text-xl">{formattedDate}</time>
        <address className="p-1 text-lg text-gray-500">
          {formattedAddress}
        </address>
        <div className="pt-8">
          <Button href={link} name="EventDetails"></Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem
