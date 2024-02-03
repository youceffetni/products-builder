import { ChangeEvent, useState } from "react";
import Product from "./components/Product";

import { formInputList, products } from "./data";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";



function App() {

  /* States */
  const [isOpen, setIsOpen] = useState(false)

  const  [product,setProduct]=useState<IProduct>(
  {
    title:"",
    description:"",
    thumbnail:"",
    price:"",
    colors:[],
    category:{
      thumbanil:"",
      label:""

    }
  })

  /* Handlers */
  const closeModal = ()=>setIsOpen(false)
  const openModal  = ()=>setIsOpen(true)

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>)=>{
    const {value,name}=e.target;
    setProduct({...product,[name]:value})

  }
  /* Renders  */
  const renderProducts=products.map((product)=><Product key={product.id} product={product}/>)
  const renderFormInputList=formInputList.map((input)=><Input input={input} value={product[input.name]} onChange={onChangeInputHandler}/>)
 

  return (
    
    <main className="bg-gray-50 container mx-auto">
        <Button className="bg-green-700 hover:bg-green-600" onClick={()=>openModal()}> Create Product</Button>
        <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2">
          {renderProducts}
        </div>
        <Modal  closeModal={closeModal} isOpen={isOpen} title="Create a new product" description="Please fit the product informations on this form to add new product">


         <div className="space-y-8">
          <form>
              {renderFormInputList}
            </form>
            <div className="flex items-center gap-2">
              <Button className="bg-indigo-900 hover:bg-indigo-700 w-full " >Create</Button>
              <Button className="bg-gray-600 hover:bg-gray-400 w-full " onClick={()=>closeModal()}>Close</Button>
            </div>
         </div>
        </Modal>

     
    </main>
   
  )
}

export default App
