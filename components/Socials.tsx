import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const socials = [
  { icon: <FaGithub />, path: "https://github.com/yusezmann" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/usman-usman-bb09261b0/",
  },
  // { icon: <FaTwitter />, path: "https://twitter.com/UsmanFauzi" },
]

const Socials = ({ containerStyle, iconStyle }: any) => {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          className={iconStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials
