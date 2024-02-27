import { FaShippingFast } from "react-icons/fa";

export default function Navbar2() {
  return (
    <div className=' flex justify-center fixed inset-x-0 top-[110px] bg-gray-500'>
            < FaShippingFast className='text-2xl'/>
            <span className='text-lg font-extrabold'>Free Shipping :</span>
            <span className='text-center items-center text-xl'> on all orders above &#8358;50 </span>

    </div>
  )
}
