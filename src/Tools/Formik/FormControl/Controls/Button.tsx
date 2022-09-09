import React, { ReactNode } from 'react'
import { IVarient } from '../../FormComponent';

export interface IButton {
  varient: IVarient;
  className?: string;
  children: ReactNode;
  [rest: string]: any;
}

const Button: React.FC<IButton> = ({varient, className, children, ...rest}) => {
  className = ['Button', `Button-${varient}` , className].join(" ");
  
  return (
    <button className={className} {...rest}>
      { children }
    </button>
  )
}

export default Button