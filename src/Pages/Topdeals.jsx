import React from 'react'
import Topdealsproduct from '../Products/Topdealsproduct.json'
import Topdealsproduct2 from '../Products/Topdealsproduct2.json'
import Topdealsproduct3 from '../Products/Topdealsproduct3.json'

function Topdeals() {
    return (
        <>
            < div className="flex">

                {/* FIRST COLUMN */}
                <div className='h-screen w-1/3 bg-blue-100 mt-5 ml-2 mr-2 flex flex-wrap justify-evenly place-content-center'>
                    <h1 className='absolute left-10 mt-5 font-bold text-2xl'>Winter Essentials For You</h1>
                    {
                        Topdealsproduct2.map((item) => (
                            <div className='border border-slate-400 mt-15 px-2 py-2'>
                                <div
                                    key={item.id}
                                    className='p-4 rounded w-50 text-center mt-2'
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='h-40 w-full object-cover mb-0.5 ms-2 hover:scale-110 transition-transform duration-300'
                                    />
                                    <h2 className="font-semibold mt-4">{item.name}</h2>
                                    <p className="text-green-600 font-bold">{item.off}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* SECOND COLUMN */}
                <div className='h-screen w-1/3 bg-rose-100 mt-5 ml-2 mr-2 flex flex-wrap justify-evenly place-content-center'>
                    <h1 className='absolute left-[35vw] mt-5 font-bold text-2xl '>Fashion's Top Deal</h1>
                    {
                        Topdealsproduct.map((item) => ( 
                            <div className='border border-slate-400 mt-15 px-2 py-2'>
                                <div
                                    key={item.id}
                                    className='p-4 rounded w-50 text-center mt-2'
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='h-42 w-full object-cover mb-0.5 hover:scale-110 transiton-transform duration-300'
                                    />
                                    <h2 className="font-semibold mt-4">{item.name}</h2>
                                    <p className="text-green-600 font-bold">{item.off}</p>
                                </div>
                            </div>
                        ))


                    }

                </div>

                {/* THIRD COLUMN */}
                <div className='h-[90vh] abc w-1/3 bg-stone-300 mt-5 ml-2 mr-2 pb-6 flex items-stretch md:items-center' >
                    

                </div>
            </div>

        </>

    )
}
export default Topdeals


