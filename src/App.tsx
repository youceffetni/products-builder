import { ChangeEvent, FormEvent, useState } from "react";
import Product from "./components/Product";

import { formInputList, products } from "./data";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";



function App() {


  const defaultProduct={
    title:"",
    description:"",
    thumbnail:"",
    price:"",
    colors:[],
    category:{
      thumbanil:"",
      label:""

    }
 
  }
  /* States */
  const [isOpen, setIsOpen] = useState(false)

  const  [product,setProduct]=useState<IProduct>(defaultProduct)

  const [productErrors,setProductErrors]=useState({
    title:"",
    description:"",
    thumbnail:"",
    price:""
  })

  

 


/* Handlers */
  const closeModal = ()=>setIsOpen(false)
  const openModal  = ()=>setIsOpen(true)

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>)=>{
    const {value,name}=e.target;
    setProduct({...product,[name]:value})
    setProductErrors((prev)=>({
      ...prev,
      [name]:""
    }))

  }

  const submitHandler=(event:FormEvent<HTMLFormElement>):void=>{

    event.preventDefault();
    
    const {title,description,thumbnail,price}=product;
  
    
    const errors=productValidation({title,description,thumbnail,price})
    const hasError=Object.values(errors).some((errMsg)=>errMsg != "");

    if(hasError){
      setProductErrors(errors)
    }else{
      console.log("Sent the data into server")
    }

  }
  const cancelHandler= ():void=>{
    closeModal();
    setProduct(defaultProduct)
    

  }


    /* Renders  */
    const renderProducts=products.map((product)=><Product key={product.id} product={product}/>)
    const renderFormInputList=formInputList.map((input)=><Input input={input} value={product[input.name]} onChange={onChangeInputHandler} key={input.id} productErrors={productErrors}/>)

  return (
    
    <main className="bg-gray-50 container mx-auto">
        <Button className="bg-green-700 hover:bg-green-600" onClick={()=>openModal()}> Create Product</Button>
        <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2">
          {renderProducts}
        </div>
        <Modal  closeModal={closeModal} isOpen={isOpen} title="Create a new product" description="Please fit the product informations on this form to add new product">


         <div className="space-y-8">
          <form onSubmit={submitHandler}>
              {renderFormInputList}
            <div className="flex items-center gap-2">
              <Button className="bg-indigo-900 hover:bg-indigo-700 w-full " type="submit" >Create</Button>
              <Button className="bg-gray-600 hover:bg-gray-400 w-full " onClick={cancelHandler} type="button">Close</Button>
            </div>
          </form>
         </div>
        </Modal>

     
    </main>
   
  )
}

export default App
