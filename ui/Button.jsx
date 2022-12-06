import Link from 'next/link'

const Button = ({href, name}) => {
  return <Link href={href}>{name}</Link>
}

export default Button
