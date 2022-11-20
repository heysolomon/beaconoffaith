import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Top = () => {
  return (
    <div className='bg-brand3 text-brand flex p-2 items-center justify-center fixed z-10 bottom-3 left-3 rounded-lg'>
        <BsFillArrowUpCircleFill size={20} className="mr-1" />
        <p className="font-mon font-[600] text-[12px]">Top</p>
    </div>
  )
}

export default Top