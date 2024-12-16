import React from 'react'

const GlassType = () => {
  return (
    <div className='fixed top-[13vh] z-20'>
    <div className='text-con flex flex-row items-center  bg-[#fbf9f7] '>
      <div className="text px-10  my-1 h-16 py-4 group">
        <ul className='text-base gap-7 flex items-center font-semibold'>
            <li><a href="">EYEGLASSES</a></li>
            <li><a href="">SCREEN GLASSES</a></li>
            <li><a href="">KIDS GLASSES</a></li>
            <li><a href="">CONTACT LENSES</a></li>
            <li><a href="">SUNGLASSES</a></li>
            <li><a href="">HOME EYE-TEST</a></li>
            <li><a href="">STORE LOCATOR</a></li>
        </ul>
        <div className="glass-details bg-white w-[95vw] h-[50vh] hidden group-hover:block relative z-10 my-7">
          <div className="container flex">
            <div className="face-img p-[6vw] ">
                <img className='my-5 w-[3vw] h-[6vh]' src="https://static.lenskart.com/media/desktop/img/men_pic.png" alt="" />
                <img className='my-5 w-[3vw] h-[6vh]'  src="https://static.lenskart.com/media/desktop/img/women_pic.png" alt="" />
                <img className='my-5 w-[3vw] h-[6vh]'  src="https://static.lenskart.com/media/desktop/img/kid_pic.png" alt="" />
              
              <p className='my-5 relative left-[4vw] bottom-[25vh]'>Men</p>
              <p className='my-5 relative left-[4vw] bottom-[22vh]'>Women</p>
              <p className='my-5 relative left-[4vw] bottom-[20vh]'>Kids</p>

              <div className="svg relative left-[9vw] bottom-[35vh]">
               <svg className='relative bottom-[7vh]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#000000"} fill={"none"}>
                  <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg className='relative bottom-[.5vh]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#000000"} fill={"none"}>
                  <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg className='relative top-[5.5vh]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#000000"} fill={"none"}>
                  <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              </div>

            </div>
            <div className="category bg-white w-[20vw] h-[50vh] relative left-[2.5vw]">
              <h1 className='p-3 text-lg'>Select Category</h1> <hr />
              <div className="texts my-[8vh] ">
                <p className='mb-6 relative bottom-3 hover:bg-orange-200 hover:rounded-md p-3 cursor-pointer'>CLASSIC EYEGLASSES STARTING FROM &#8377;2000</p>
                <p className='mb-6 relative bottom-11 p-3 hover:bg-orange-200 hover:rounded-md cursor-pointer'>PREMIUM EYEGLASSES STARTING FROM &#8377;3500</p>
                <p className='mb-6 relative bottom-[10vh] p-3 hover:bg-orange-200 hover:rounded-md cursor-pointer'>SCREEN EYEGLASSES STARTING FROM &#8377;500</p>
              </div>
            </div> 

            <div className="picks1 bg-white w-[15vw] h-[50vh] relative left-[4vw]">
              <h1 className='p-3 text-sm font-semibold'>Our Top Picks</h1> <hr />
              <div className="content mt-12 text-[#9b908d]' ">
                
                    <p className='mb-3 text-[#9b908d]'>New Arrivals</p>
                    <p className='mb-3 text-[#9b908d]'>Best Seller</p>
                    <p className='mb-3 text-[#9b908d]'>Tinted Eyeglasses</p>
                    <p className=' text-[#9b908d]'>Progressive Eyeglasses</p>

              </div>
            </div>
            <div className="picks2 bg-white w-[15vw] h-[50vh] relative left-[4vw]">
              <h1 className='p-3 text-sm font-semibold'>Frame Type</h1> <hr />
              <div className="content mt-12 text-[#9b908d]' ">
                
                    <p className='mb-3 text-[#9b908d]'>New Arrivals</p>
                    <p className='mb-3 text-[#9b908d]'>Best Seller</p>
                    <p className='mb-3 text-[#9b908d]'>Tinted Eyeglasses</p>
                    <p className=' text-[#9b908d]'>Progressive Eyeglasses</p>

              </div>
            </div>
            <div className="picks3 bg-white w-[15vw] h-[50vh] relative left-[4vw]">
              <h1 className='p-3 text-sm font-semibold'>Collections</h1> <hr />
              <div className="content mt-12 text-[#9b908d]' ">
                
                    <p className='mb-3 text-[#9b908d]'>New Arrivals</p>
                    <p className='mb-3 text-[#9b908d]'>Best Seller</p>
                    <p className='mb-3 text-[#9b908d]'>Tinted Eyeglasses</p>
                    <p className=' text-[#9b908d]'>Progressive Eyeglasses</p>

              </div>
            </div>
            <div className="picks4 bg-white w-[15vw] h-[50vh] relative left-[4vw]">
              <h1 className='p-3 text-sm font-semibold'>Brands</h1> <hr />
              <div className="content mt-12 text-[#9b908d]' ">
                
                    <p className='mb-3 text-[#9b908d]'>New Arrivals</p>
                    <p className='mb-3 text-[#9b908d]'>Best Seller</p>
                    <p className='mb-3 text-[#9b908d]'>Tinted Eyeglasses</p>
                    <p className=' text-[#9b908d]'>Progressive Eyeglasses</p>

              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="small-cards bg-[#fbf9f7] w-[21vw] h-[10vh] flex items-center relative left-[12vw] cursor-pointer ">
        <img className='w-[6vw] rounded-md' src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png" alt="" />
        <img className='w-[6vw] rounded-md' src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png" alt="" />
        <img className='w-[6vw] rounded-md' src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png" alt="" />
    </div>
    </div>
    </div>
  )
}

export default GlassType
