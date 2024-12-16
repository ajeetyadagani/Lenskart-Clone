import React, {useState} from 'react'


const Panel = () => {
  

  return (
    <div className='fixed top-9 bg-white  z-20'>
    <div className='flex items-center cursor-pointer  '>
      <div className="image flex flex-row items-center gap-5 ml-6">
        <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="" />
        <img className='block w-25 h-7 relative left-[2.3vw]' src="https://static1.lenskart.com/media/desktop/img/republic/eye/new-toll-number.png" alt="ph-no" />
      

      <input className='border-solid border-[1px] border-black h-10 w-[30%] rounded-[10px] relative left-[8vw]' type="text" name='search' placeholder='What are you looking for?'/>

       <div className='SearchItems bg-red-500 w-[30%] h-[40vh] hidden'>
          <option value="paad">paado</option>
          <h2>Trending Search</h2>
          <ul>
            <li>Eyeglasses</li>
            <li>Sunglasses</li>
            <li>Contact Lenses</li>
            <li>Vincent Chase Eyeglasses</li>
            <li>Vincent Chase Sunglasses</li>
            <li>Men Sunglasses</li>
            <li>Women Sunglasses</li>
            <li>Aviator</li>
            <li>Eye Accessories</li>
            <li>Eye Checkup</li>
          </ul>
        </div>
      
        <div className="trac flex relative left-[10vw] bg-white w-[90vw] h-[8vh]">
        <select className='bg-white text-sm relative left-[16vw]'  name="Order" id="Order" required>
        <option value="">Track Order</option>
        <option value="My Orders">My Orders</option>
        <option value="My Prescription">My Prescription</option>
        <option value="My Store Credit">My Store Credit</option>
        <option value="Account Information">Account Information</option>
        <option value="Logout">Logout</option>
        </select>


    <div className='flex items-center gap-3 relative left-[19vw] text-sm'>
      <div className="icon ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#000000"} fill={"none"}>
    <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
     </svg>
      </div>
      <p>Wishlist</p>
    </div>

    <div className="cart flex items-center gap-3 relative left-[24vw] text-sm">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
    <path d="M3.06164 14.4413L3.42688 12.2985C3.85856 9.76583 4.0744 8.49951 4.92914 7.74975C5.78389 7 7.01171 7 9.46734 7H14.5327C16.9883 7 18.2161 7 19.0709 7.74975C19.9256 8.49951 20.1414 9.76583 20.5731 12.2985L20.9384 14.4413C21.5357 17.946 21.8344 19.6983 20.9147 20.8491C19.995 22 18.2959 22 14.8979 22H9.1021C5.70406 22 4.00504 22 3.08533 20.8491C2.16562 19.6983 2.4643 17.946 3.06164 14.4413Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M7.5 9L7.71501 5.98983C7.87559 3.74176 9.7462 2 12 2C14.2538 2 16.1244 3.74176 16.285 5.98983L16.5 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </svg>
    <p>Cart</p>
    </div>
    </div>
    </div>
        

    </div>
    </div>
  )
}

export default Panel
