import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'

export default function page() {
  return (
    <>
      <Navbar/>
      <div className='container flex flex-col items-center md:block'>
        <h4 className='font-bold text-2xl mb-8 ms-2'>Minerals and Metals</h4>
        <div className='xl:columns-4 lg:columns-3 md:columns-2'>{Array(20).fill(
            <div className='flex w-72 md:w-80 border-2 px-4 py-2 rounded-xl mb-4 shadow-sm'>
                <img src="/images/image.png" alt="" className='h-20 me-4'/>
                <div>
                    <h5 className='font-bold mb-3'>Steel & Stainless Steel</h5>
                    <p className='text-xs text-gray-500'>Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.</p>
                </div>
            </div>
        )}</div>
        </div>
      <Footer/>
    </>
  )
}
