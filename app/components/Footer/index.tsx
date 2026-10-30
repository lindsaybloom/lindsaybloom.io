import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs"

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/lindsaybloom/",
    Icon: BsInstagram,
  },
  { label: "Twitter", href: "https://www.twitter.com/lbloom97/", Icon: BsTwitter },
  { label: "GitHub", href: "https://www.github.com/lindsaybloom/", Icon: BsGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lindsay-bloom/",
    Icon: BsLinkedin,
  },
]

const Footer = () => {
  return (
    <footer className="bg-mist t-micro text-secondary">
      <div className="section-content py-5">
        <div className="border-t border-hairline pt-4 flex flex-col-reverse md:flex-row md:items-center justify-between gap-3">
          <span>
            Designed &amp; built by Lindsay Bloom. Copyright ©{" "}
            {new Date().getFullYear()}.
          </span>
          <div className="flex gap-5">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-inkSoft hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
