import { InputHTMLAttributes } from "react"
import { IFormInput } from "../../interfaces"

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    input:IFormInput
}

const Input=({input,...rest}:IProps)=>{

  return (
    <div className="my-2 flex flex-col gap-1" key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <input className="transition duration-500   p-1 outline-none border-2 focus:border-indigo-500" name={input.name} id={input.id} type={input.type} {...rest}/>
    </div>
  )
}

export default Input