import Image from "next/image";

export default async function Page({params}) {
  console.log(await params.id)
  const {id}=await params;
const firstData=await fetch(`https://fakestoreapi.com/products/${id}`)
const data=await firstData.json()
console.log(data)

  return (
    <div className=" flex flex-col gap-4 border border-black p-5 w-[500px] mx-auto">
      <h2>Product Detail-{id}</h2>
      <p>Product Title-{data.title}</p>
      
      <Image
      src={`${data.image}`}
      width={200}
      height={200}
      alt="Picture of the author"
    />
      <p>Product Description-{data.description}</p>
      <p>Product Category-{data.category}</p>
      <p>Product Rating-{data.rating.rate}</p>
      
      <p>Product Price-{data.price}</p>

    </div>
  )
}