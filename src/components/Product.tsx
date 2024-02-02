import { IProduct } from "../interfaces"
import { textSlicer } from "../utilities/functions"
import Image from "./Image"
import Button from "./ui/Button"

interface IProp{
    product:IProduct
}

const Product=({product}:IProp)=>{

    const {title,thumbnail,description,price}=product;
  return (
    <div className="max-w-sm mx-auto rounded-sm border border-gray-200 p-4 flex flex-col bg-white">
        <Image url={thumbnail} alt={title} className="md:min-h-40 md:max-h-40"/>  

        <h2>{title}</h2>
        <p>{textSlicer(description)}</p>
        <div className="flex flex-row gap-2 my-4">
            <span className="w-6 h-6 rounded-full bg-red-700 cursor-pointer"/>
            <span className="w-6 h-6 rounded-full bg-teal-950 cursor-pointer"/>
            <span className="w-6 h-6 rounded-full bg-indigo-950 cursor-pointer"/>
        </div>
        <hr />
        <div className="my-2 flex flex-row items-center">
            <span className="flex-grow font-medium text-lg text-gray-900">{price}</span>
            <Image
                url='https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1637&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className="w-10 h-10 rounded-full object-center"
             />  
        </div>
        <div className="flex flex-row justify-between gap-1">
            <Button className="bg-indigo-900 flex-1" onClick={()=>alert("hello all")}>EDIT</Button>
            <Button className="bg-red-600 flex-1 " >DELETE</Button>
        </div>
    </div>
  )
}

export default Product