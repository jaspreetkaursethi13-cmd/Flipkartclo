import React from 'react'

function Navbar() {
    return (
        <>
            <div className='h-15 bg-white flex justify-evenly items-center'>

                <img className='' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />

                <input className='border-20 w-1/2 h-10 rounded-lg bg-slate-200 border-none px-4' placeholder='Search for product,Brands and More' type="text" />
                <button>Login</button>
                <div>Cart</div>
                <div> Become a Seller</div>
            </div>

        </>
    )
}

export default Navbar