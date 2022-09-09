import React, { ReactNode, useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IVarient } from '../Formik/FormComponent'
import { ILink } from '../Link/Link'
import CustomLink from '../Link/Link'

interface IProps {
  varient: IVarient;
  isFixed: boolean;
  logo: ReactNode;
  links: ILink[];
  className?: string;
  children?: ReactNode;
}

const Header: React.FC<IProps> = ({varient, isFixed, logo, links, className, children}) => {
  const [navbarOpen, setnavbarOpen] = useState(false);
  
  className = [className, isFixed ? 'w-full fixed top-0 left-0' : '', 'bg-white '].join(" ");
  
  return (
  <header className={className}>
    <nav className="py-2 md:py-4">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <CustomLink path="/" className={`Link-hovered Link-hovered-${varient}`} varient={varient}>
            {logo}
          </CustomLink>
          <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" onClick={() => setnavbarOpen(!navbarOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className={[ navbarOpen ? "flex" : "hidden", "md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"].join(" ")} id="navbar-collapse">
          {
              links.map((link, index) => (
              <CustomLink varient={varient} path={link.path} key={index}>
                {link.children}
              </CustomLink>
            ))
            }
            {children}
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header