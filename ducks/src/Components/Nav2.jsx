import React from 'react'

export default function Nav() {
  return (
    <>
    {/* nav */}
    <div className="fixed top-0 left-0 right-0 z-50 py-[10px] md:py-[20px] 2xl:py-[31px] bg-transparent">
     <div className="max-w-[1350px] px-[20px] mx-auto">
            <nav className="relative hidden md:block">
                <div className="flex items-center justify-between">
                    <div className="flex gap-[35px] lg:gap-[48px]">
                        <a className="text-[12px] lg:text-[16px] relative z-20 cursor-pointer text-black underline-effect font-extrabold">Duck Finance</a>
                        <a className="text-[12px] lg:text-[16px] relative z-20 cursor-pointer text-black underline-effect font-medium">Buy Ducks Token </a>
                        <a className="text-[12px] lg:text-[16px] relative z-20 cursor-pointer text-black underline-effect font-medium">Buy Staking NFT</a>
                        </div>
                        <div className="flex items-center gap-[40px] lg:gap-[60px]">
                            <div className="flex gap-[15px] lg:gap-[25px] relative z-20">
                                <button className="text-white text-[12px] lg:text-[14px] w-[120px] lg:w-[167px] h-[45px]  font-extrabold rounded-[10px] bg-green-600 hover:bg-green-700 duration-700">
                                    Connect Wallet</button>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-full">
                                    <img src="../assets/img/duck.png" alt="logo" className="w-[150px]" />
                                            </div>
                                            </nav>
                                            <div className="block md:hidden">
                                                <div className="flex items-center justify-between">
                                                    <div className="ml-[-20px]">
                                                        <img src="../assets/img/duck.png" alt="logo" className="h-[50px]"/>
                                                            </div>
                                                            <div className="flex items-center gap-[20px]">
                                                                <button className="text-white text-[14px] w-[105px] h-[39px] font-extrabold rounded-[10px] bg-green-600 hover:bg-green-700 duration-700">
                                                                    Connect</button>
                                                                    <div className="relative w-[38px] h-[38px] rounded-full cursor-pointer">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="absolute top-0 left-0 w-full h-full text-black transition-all duration-1000 ease-in-out selection:bg-transparent focus:bg-transparent">
                                                                            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clip-rule="evenodd">
                                                                                </path>
                                                                                </svg>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
    {/* nav end */}
      <div className="fixed top-0 left-0 right-0 z-50 py-[10px] md:py-[20px] 2xl:py-[31px] bg-transparent">
      </div>
      <div className="max-w-[1350px] px-[20px] mx-auto"></div>
      <div className="max-w-[1200px] px-[20px] mx-auto mt-[100px]">
        <div>
            <div>
                <p className="font-black text-center text-[70px] sm:text-[100px] pt-[30px] leading-[60px] sm:leading-[80px]" style={{opacity: 1}}>
        <span style={{opacity: '1', transform: 'none'}}>D</span>
        <span style={{opacity: '1', transform: 'none' }}>u</span>
        <span style={{opacity: '1', transform: 'none' }}>c</span>
        <span style={{opacity: '1', transform: 'none' }}>k</span>
        <span style={{opacity: '1', transform: 'none' }}>s</span>
        </p></div>
        <h6 className="text-center text-green-600 text-[18px] sm:text-[22px] font-semibold ">FINANCE</h6>
        </div>
        <div>
        <h4 className="text-center font-bold mt-[50px] text-[20px]">STAKE. <span className="ml-[8px]">EARN. </span>
        <span className="ml-[8px]">GROW.</span>
        </h4>
        </div>
        <p className="text-center text-gray-600 text-[17px] mt-[30px]">We Work. You Thrive.</p>
       
       {/* pool */}
        <div className="grid grid-cols-1 gap-[50px] sm:gap-0 sm:grid-cols-3 mt-[50px] sm:mt-[80px]">
            <div className="text-center">
            <div className="w-[80px] mx-auto h-[80px] flex items-center justify-center rounded-full bg-yellow-500 false"><h2 className="text-white leading-[22px] font-bold text-[20px]">Unlock <br/> Pool
        </h2>
        </div>
        <div className="false pt-[10px] pb-[30px]">
            <h2 className="text-green-600 font-bold text-[45px] mt-[10px]">Pool 1</h2>
            <div>
                <h2 className="font-extrabold text-[16px]">7% APY</h2>
                <h1 className="text-center mx-auto text-[15px] leading-[19px]">(Max 10,000 $DCKS)</h1><h1 className="text-center text-[15px] leading-[19px]">Criteria: One Ducks </h1>
                <h1 className="text-center text-[15px] leading-[19px]">Staking NFT</h1>
                </div>
                </div>
                <div className="flex justify-center">
                    <button className="text-white text-[12px] w-[90px] h-[35px] font-extrabold rounded-[10px] bg-green-600 hover:bg-green-700 duration-700">Stake Now</button>
                    </div>
                    </div>
                    <div className="text-center">
                        <div className="w-[80px] mx-auto h-[80px] flex items-center justify-center rounded-full bg-yellow-500 false">
                            <h2 className="text-white leading-[22px] font-bold text-[20px]">Unlock <br/> Pool</h2>
                            </div>
                            <div className="sm:border-l-[3px] sm:border-r-[3px] border-yellow-500  pt-[10px] pb-[30px]">
                                <h2 className="text-green-600 font-bold text-[45px] mt-[10px]">Pool 2</h2>
                                <div>
                                    <h2 className="font-extrabold text-[16px]">15% APY</h2>
                                    <h1 className="text-center mx-auto text-[15px] leading-[19px]">(Max 45,000 $DCKS)</h1>
                                    <h1 className="text-center text-[15px] leading-[19px]">Criteria: Two Ducks </h1>
                                    <h1 className="text-center text-[15px] leading-[19px]">Staking NFT</h1>
                                    </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <button className="text-white text-[12px] w-[90px] h-[35px] font-extrabold rounded-[10px] bg-green-600 hover:bg-green-700 duration-700">
                                            Stake Now</button>
                                            </div>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-[80px] mx-auto h-[80px] flex items-center justify-center rounded-full bg-yellow-500 false">
                                                    <h2 className="text-white leading-[22px] font-bold text-[20px]">Unlock <br/> Pool</h2>
                                                    </div>
                                                    <div className="false pt-[10px] pb-[30px]">
                                                        <h2 className="text-green-600 font-bold text-[45px] mt-[10px]">Pool 3</h2><div><h2 className="font-extrabold text-[16px]">35% APY</h2><h1 className="text-center mx-auto text-[15px] leading-[19px]">(Max 100,000 $DCKS)</h1>
                                                        <h1 className="text-center text-[15px] leading-[19px]">Criteria: Three Ducks </h1>
                                                        <h1 className="text-center text-[15px] leading-[19px]">Staking NFT</h1>
                                                        </div>
                                                        </div>
                                                        <div className="flex justify-center">
                                                            <button className="text-white text-[12px] w-[90px] h-[35px] font-extrabold rounded-[10px] bg-green-600 hover:bg-green-700 duration-700">
                                                                Stake Now</button>
                                                                </div>
                                                                </div>
                                                                </div>
                                                                </div>
      
    </>
  )
}
