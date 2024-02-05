import { InputHTMLAttributes } from "react"
import { IFormInput } from "../../interfaces"
import ErrorMsg from "./ErrorMsg"

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    input:IFormInput
    productErrors:{
      title:string,
      description:string,
      thumbnail:string,
      price:string
    }
}

const Input=({input,productErrors,...rest}:IProps)=>{

  return (
    <div className="my-2 flex flex-col gap-1" key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <input className="transition duration-500   p-1 outline-none border-2 focus:border-indigo-500" name={input.name} id={input.id} type={input.type} {...rest}/>
      {productErrors[input.name]&&<ErrorMsg msg={productErrors[input.name]}/>}
    </div>
  )
}

export default Input