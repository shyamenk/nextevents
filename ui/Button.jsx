import Link from 'next/link'

const Button = ({href, name}) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className="bg-black">{name}</a>
    </Link>
  )
}

export default Button
