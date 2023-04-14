import { Link } from 'react-router-dom'

export const Card = ({obj}) => {
  return (
    <div className='flex flex-col items-center py-8 px-5 gap-5 border border-gray-400 rounded-xl'>
      <div className="gradient w-28 h-28 rounded-full flex items-center justify-center" >
      {/* <img src={obj.img} alt={obj.title}/> */}
      <span className='block'>{obj.img}</span>
      </div>
      <p className='font-semibold'>{obj.title}</p>
      <Link to={`${obj.firstUrl}/${obj.title}`} className="bg-primary text-white text-center rounded-md p-4 w-full" >{obj.firstActionTitle}</Link>
      <Link to={`${obj.secondUrl}/${obj.title}`} className="border border-primary text-primary text-center rounded-md p-4 w-full" >{obj.secondActionTitle}</Link>
    </div>
  )
}
