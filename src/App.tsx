import { useState } from "react";
import Product from "./components/Product";

import { products } from "./data";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";



function App() {

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  const renderProducts=products.map((product)=><Product key={product.id} product={product}/>)

  return (
    
    <main className="bg-gray-50 container mx-auto">
        <Button className="bg-green-700 hover:bg-green-600" onClick={()=>openModal()}> Create Product</Button>
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
          {renderProducts}
        </div>
        <Modal closeModal={closeModal} isOpen={isOpen} title="Create a new product" description="Please fit the product informations on this form to add new product">

          <div className="flex items-center gap-2">
            <Button className="bg-indigo-900 hover:bg-indigo-700 w-full " >Create</Button>
            <Button className="bg-gray-600 hover:bg-gray-400 w-full " onClick={()=>closeModal()}>Close</Button>
          </div>
        </Modal>

     
    </main>
   
  )
}

export default App
