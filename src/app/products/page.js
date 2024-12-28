import Link from "next/link";


 async function Fetching() {
  const data = await fetch('https://fakestoreapi.com/products')
  const posts = await data.json()
  return posts;
   
  
}


export default async function Page() {
  
  const products=await Fetching();
  console.log(products)

  return (
    
    <div className=" flex flex-col gap-4 w-[400px] mx-auto  ">
      <h2 className="text-3xl font-bold">Products</h2>
      {products.map((product) => (
       <div  key={product.id} className=" border border-black p-5 ">

<h1>{product.title}</h1>
<p>{product.price}</p>
<p>{product.id}</p>

<Link href={`/products/${product.id}`} className=" underline font-bold">See More</Link>
       </div>
        
      ))}
    </div>
  )
}