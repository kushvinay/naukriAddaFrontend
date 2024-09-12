// "use client"
// import Image from 'next/image'
// import Nav from '@/app/components/Nav'
// import { useSelector } from 'react-redux'

// export default function Home() {

//   return (
//     <div className='h-screen'>
      
//       {/* <Mainnav/> */}
//       <Nav></Nav>
//       <div className='h-[90%]'>
//         {/* <Image className='' src="/bg2.jpg" height={100} width={100} ></Image/> */}
//         <h1 className=' text-lg sm:text-3xl text-gray-800 font-medium text-center pt-14 leading-[70px]'> Looking for Opportunities<Image className=' inline-block pb-2' src={"/log.png"} height={100} width={100} /> <br />Build Your Future. Build Your Dream.
//         </h1>
//         <h3 className='text-xl text-gray-500 text-center mt-14'>
//         Introducing our latest creation in the realm of job search services & <br></br> finding available job 
//         vacancies a breeze for both job seekers and employers.</h3>
//         {/* <Image className='m-auto pt-4' src={"/mainbg.png"} height={520} width={520} /> */}
//         <Image className='m-auto mt-8 ' src={"/log.png"} height={420}  width={265} />


//       </div>
//       <h1>
//       </h1>
//       {/* <h1>{student}</h1> */}
//     </div>
//   )
// }

"use client"
import Image from 'next/image'
import Nav from '@/app/components/Nav'

export default function Home() {
  return (
    <div className='h-screen'>
      <Nav />
      <div className='h-[90%] flex flex-col items-center pt-14'>
        <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 font-medium text-center pt-14 sm:pt-16 leading-[2rem] sm:leading-[3rem]'>
          Looking for Opportunities
          <Image className='inline-block pb-2' src={"/log.png"} height={40} width={40} alt="logo" />
          <br />
          Build Your Future. Build Your Dream.
        </h1>
        
        <h3 className='text-base sm:text-lg md:text-xl text-gray-500 text-center mt-6 sm:mt-8 md:mt-12 px-4'>
          Introducing our latest creation in the realm of job search services & <br className='hidden md:inline' /> 
          finding available job vacancies a breeze for both job seekers and employers.
        </h3>

        <Image 
          className='m-auto mt-8 sm:mt-10 md:mt-12 w-auto max-w-[265px] sm:max-w-[320px] md:max-w-[420px]' 
          src={"/log.png"} 
          height={420} 
          width={165} 
          alt="Main Logo" 
        />
      </div>
    </div>
  )
}
