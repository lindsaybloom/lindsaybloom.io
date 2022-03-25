import React from "react"
import { Instagram, Twitter, Github, Linkedin } from "grommet-icons"
import { Span } from "~/components/Typography"

const Footer = () => {
  return (
    <footer>
      <div className="flex sm:flex-col lg:flex-row justify-between w-full">
        <Span className="sm:text-center lg:text-left sm:mb-2 lg:mb-3">
          Designed &amp; built by Lindsay Bloom {new Date().getFullYear()}
        </Span>
        <div className="flex flex-row justify-between sm:w-full lg:w-1/6">
          <a href="https://www.instagram.com/lindsaybloom/">
            <Instagram className="footer-icon" />
          </a>
          <a href="https://www.twitter.com/lbloom97/">
            <Twitter className="footer-icon" />
          </a>
          <a href="https://www.github.com/lindsaybloom/">
            <Github className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/lindsay-bloom/">
            <Linkedin className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
