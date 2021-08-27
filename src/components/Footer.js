import React from "react"
import {
  FaRegEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaRss,
} from "react-icons/fa"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  min-height: 12rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 2rem;

  p {
    font-size: 0.8rem;
    font-weight: 300;
  }
  ul {
    text-align: center;
    li {
      display: inline-block;
      a {
        svg {
          color: #4a4656;
          &:hover {
            color: #8a2be2;
          }
        }
      }
    }
    li:not(:last-child) {
      margin-right: 40px;
    }
  }
`
export const Footer = () => {
  const config = {
    email: `contactdenedut@gmail.com`,
    githubUsername: `lelouchB`,
    twitterUsername: `noharashutosh`,
    instagramUsername: `singhashutoshk`,
    siteUrl: `https://ashutoshksingh.dev`,
  }
  const linkedinUrl = `https://www.linkedin.com/`
  const instagramUrl = `https://www.instagram.com/${config.instagramUsername}`
  const mailToUrl = `mailto:${config.email}?Subject=Hello`
  const twitterUrl = `https://twitter.com/${config.twitterUsername}`
  const facebookURL = `https://facebook.com/`
  const githubUrl = `https://github.com/${config.githubUsername}`
  const rssFeed = `${config.siteUrl}/rss.xml`
  return (
    <FooterWrapper>
      <ul>
        <li>
          <a href={mailToUrl} target="_top" title="Email">
            <FaRegEnvelope />
          </a>
        </li>

        <li>
          <a
            href={githubUrl}
            target="_blank"
            title="Contact Ashutosh at GitHub"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href={linkedinUrl}
            target="_blank"
            title="Contact Ashutosh on Linkedin"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href={twitterUrl}
            target="_blank"
            title="Contact Ashutosh on Twitter"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href={facebookURL}
            target="_blank"
            title="Contact Ashutosh on Facebook"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>

        <li>
          <a
            href={instagramUrl}
            target="_blank"
            title="Contact Ashutosh on Instagram"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href={rssFeed}
            target="_blank"
            title="RSS Feed"
            rel="noopener noreferrer"
          >
            <FaRss />
          </a>
        </li>
      </ul>
      <p>
        Handcrafted with{" "}
        <span role="img" aria-label="white_heart">
          🤍
        </span>{" "}
        by me
      </p>
    </FooterWrapper>
  )
}
