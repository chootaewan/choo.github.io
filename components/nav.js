import React from 'react' //JSX를 사용하려면 React를 import해야 한다.
import Link from 'next/link'

const links = [
  { href: 'https://github.com/chootaewan/choo.github.io', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          Home
        </Link>
      </li>
      <li>
        <Link href='/get-started'>
          시작하기
        </Link>
      </li>
      <li>
        <Link href='/groups'>
          Groups
        </Link>
      </li>
      <li>
        <Link href='/groups/detail'>
          Groups Detail
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key} href={href}>
          {label}
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav