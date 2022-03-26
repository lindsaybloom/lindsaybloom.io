import React from "react"
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs"
import { Span } from "~/components/Typography"

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between w-full">
      <Span className="text-center lg:text-left mb-2 lg:mb-3">
        Designed &amp; built by Lindsay Bloom {new Date().getFullYear()}
      </Span>
      <div className="flex flex-row justify-between w-full lg:w-1/6">
        <a href="https://www.instagram.com/lindsaybloom/">
          <BsInstagram className="footer-icon" />
        </a>
        <a href="https://www.twitter.com/lbloom97/">
          <BsTwitter className="footer-icon" />
        </a>
        <a href="https://www.github.com/lindsaybloom/">
          <BsGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/lindsay-bloom/">
          <BsLinkedin className="footer-icon" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
