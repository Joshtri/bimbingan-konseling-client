import React from 'react'
import { FaHome, FaChevronRight } from 'react-icons/fa'

const BreadCrumbs = ({ items }) => {
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.active ? "is-active" : ""}>
            {index === 0 ? (
              <a href={item.href}>
                <FaHome /> {item.label}
              </a>
            ) : (
              <React.Fragment>
                <a href={item.href}>{item.label}</a>
              </React.Fragment>
            )}
          </li>
        ))}
      </ul>

    </nav>
  )
}

export default BreadCrumbs
