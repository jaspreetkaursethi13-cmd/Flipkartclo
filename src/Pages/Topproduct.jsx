import React from 'react'
import TopProductData from "../Products/TopProduct.json"

function TopProduct() {
  return (
    <>
            <h1 className='text-3xl font-semibold absolute top-[68vh] left-10'>Top Deals</h1>
    <div className="bg-white mt-6 mx-2 flex justify-evenly  gap-1 p-4 flex-start">
      {
        TopProductData.map((item) => (
          <div key={item.id} className="p-4 rounded w-44 text-center mt-10">
            <img
              src={item.image}
              alt={item.name}
              className="h-32 w-full object-cover mb-2 hover:scale-105"
            />
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-black-400-bold font-bold">{item.price}</p>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default TopProduct