import Product from "./components/Product";
import { products } from "./data";


function App() {
 
  const renderProducts=products.map((product)=><Product key={product.id} product={product}/>)

  return (
    
    <main className="bg-gray-50 container mx-auto">

        <div className="p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
          {renderProducts}
        </div>
    </main>
   
  )
}

export default App
