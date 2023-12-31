import Image from 'next/image'
import { Inter } from 'next/font/google'

const dash = '\u2014'
console.log(dash)

export default function Home() {
  return (
    <main >
      <div className='grid grid-cols-3 grid-row-2   '>       
        <div className='border-2 col-span-3 flex justify-between  h-[8vh]'>
          <div className='mt-[25px] hover:cursor-pointer ml-[20px] '>ba gạch </div>
          <div className='text-3xl p-[20px] ml-[400px]'>READER</div>
          <div className='flex  gap-10'>
            <div className='pt-[25px] hover:cursor-pointer '> icon cái chuông</div>
            <img 
            src = 'Vinh.jpg'
            className='rounded-full hover:cursor-pointer h-[50px] mt-[12.5px] '/>
            <div className='hover:cursor-pointer font-medium border-2 rounded-lg w-[5vw] h-[5vh] mt-[12.5px] px-6 py-2.5 mr-[10px]'>Write</div>
          </div>          
           </div>

        <div className='border-2 col-span-2 h-[92vh]  '>
          <div className='flex gap-10'>
            <input className=' ml-[20px] mt-[20px] h-[30px] w-[200px] border-2 rounded-full  '  placeholder="search . . ."/>
            <p className="pt-[25px] ml-[200px] font-bold">My topic: </p>
            <p className='font-medium mt-[24px] border rounded-full h-[30px] w-[80px] px-[13px] hover:cursor-pointer  '>Design</p>
            <p className='font-medium mt-[24px] border rounded-full h-[30px] w-[80px] px-[13px] hover:cursor-pointer '>Design</p>
            <p className='font-medium mt-[24px] border rounded-full h-[30px] w-[80px] px-[13px] hover:cursor-pointer'>Design</p>
            <p className='font-medium mt-[24px] border rounded-full h-[30px] w-[80px] px-[13px] hover:cursor-pointer'>Design</p>
          </div>
          <div className='flex justify-between mt-[20px]'>
            <p className='font-semibold text-2xl ml-[20px]'>Articles</p>
            <button className=' border-2 rounded-full font-medium border w-[120px] mr-[40px] '>Following</button>
          </div>

          {/* POST */}
          <div className='  mt-[40px] m-[20px] grid gap-5 '>
           

            <div className=' border-t-2   '>
              <div className='flex flex-nowrap pt-[10px]' >
                <img src='Vinh.jpg' className='rounded-full w-[40px] h-[40px] '/>
                <p className='font-medium ml-[5px]'>Pham Vinh</p>
              </div>
              <div className='grid   grid-rows-2 grid-cols-3 grid-flow-dense justify-between'>
                <div className='col-span-2 text-2xl font-medium'> Topic</div>
                <div className='col-span-2 font-normal h-[4.8em] overflow-hidden '>   </div>
                <img className='row-span-2 rounded-lg border'
                 src='CORE.jpeg'/>
                 <div className='flex gap-7 '>
                  <button className=' border-2 rounded-full font-medium h-[30px] w-[80px] px-[13px] horver:cursor-pointer '> UX</button>
                  <button className=' border-2 rounded-full font-medium h-[30px] w-[80px] px-[13px] horver:cursor-pointer '> UI</button>
                 </div>
              </div>           
            </div>
            
          </div>
        </div>


        <div className=' pl-[60px]  border-2 h-[92vh] '>
          <div className='border h-[15vh] w-[20vw] mt-[50px] rounded-lg bg-slate-200 px-[20px] '>RÌ VIU</div>
          <div className=''>
            <p className=' mt-[50px] text-2xl font-semibold '>People you might be interested </p>
            <div className='flex font-medium text'>
              <img src='Vinh.jpg ' className='rounded-full h-[60px] w-[60px] mt-[10px] row-span-2' />
              <p className='text-xl pt-[8px] ml-[5px] ] '> Pham Vinh </p>
              <button className='font-medium border-2 rounded-lg h-[40px] w-[70px] mt-[25px] ml-[80px]'>Follow</button>              
            </div>
            <div className='flex font-medium text'>
              <img src='Vinh.jpg ' className='rounded-full h-[60px] w-[60px] mt-[10px] row-span-2' />
              <p className='text-xl pt-[8px] ml-[5px] ] '> Pham Vinh </p>
              <button className='font-medium border-2 rounded-lg h-[40px] w-[70px] mt-[25px] ml-[80px]'>Follow</button>              
            </div>
            <div className='flex font-medium text'>
              <img src='Vinh.jpg ' className='rounded-full h-[60px] w-[60px] mt-[10px] row-span-2' />
              <p className='text-xl pt-[8px] ml-[5px] ] '> Pham Vinh </p>
              <button className='font-medium border-2 rounded-lg h-[40px] w-[70px] mt-[25px] ml-[80px]'>Follow</button>              
            </div>

                      
          </div>
          <div>
            <p className='font-semibold text-2xl mt-[50px]'>My reading list</p>
            <div className='flex' >
              <img src='Vinh.jpg'
              className='rounded-lg h-[15vh] w-[10vw]'/>
              <p className='font-semibold ml-[20px]'>Content</p>
              
            </div>

          </div>
          
          
        </div>
        
      </div>

    </main>
  )
}
