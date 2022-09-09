import React from 'react'
import { Link } from 'react-router-dom'
import { ILink } from './Link'


const BrandLink: React.FC<ILink> = ({ path, children, varient, className }) => {
  className = [className, "font-bold text-xl", 'text-'+varient+'-600'].join(" ");
  return (
    <Link to="#" className={className}>
      {children}
    </Link>
  )
}

export default BrandLink