interface IProps{
msg:string
}

const ErrorMsg=({msg}:IProps)=>{

  return (
    <div className="text-red-700 font-light text-sm !">{msg}</div>
  )
}

export default ErrorMsg