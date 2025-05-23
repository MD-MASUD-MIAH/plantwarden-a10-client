
import { Link } from 'react-router';

 import useInView from './useInView';
const PlanstCard = ({data}) => {

    const [ref, inView] = useInView();

    
    
    return (
         <div     ref={ref} className={`max-w-xs overflow-hidden shadow-lg  w-11/12 mx-auto transform transition-all duration-700 ease-out
           ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} border border-[#2ecc71]`}>
      {/* Image */}
      <img
        className="w-full h-48 object-cover"
        src={data.photo}
     
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg  sylefont">
        
        {data.plantName}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
         {data.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xs font-semibold  uppercase">
          Added Date : {data.addingDate}
          </span>
         <div className="
         ">
            <Link  to={`/details/${data._id}`} className="btn w-full  bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold py-2 px-4 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-ou text-xs">View <span className='hidden md:block'>More</span></Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default PlanstCard;