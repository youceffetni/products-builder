import { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
children:ReactNode,
className?:string;
}

const Button=({className,children,...rest}:IProps)=>{

  return (
    <button className={"p-2 rounded-md text-white transition active:translate-y-0.5 " + className} {...rest}>
      {children}
     
    </button>
  )
}

export default Button