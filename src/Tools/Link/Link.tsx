import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom';
import { IVarient } from '../Formik/FormComponent';

export interface ILink {
  path: string;
  children: ReactNode;
  linkHovered?: boolean;
  varient?: IVarient;
  className?: string;
}

const Link: React.FC<ILink> = ({ path, children, linkHovered, varient, className }) => {
  if (linkHovered) className = [className, 'Link-hovered', `Link-hovered-${varient||'blue'}`].join(" ");
  else className = [className, 'Link', `Link-${varient}`].join(" ");
  
  return (
    <NavLink to={path} className={className}>
      {children}
    </NavLink>
  )
}

export default Link