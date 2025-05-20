
import { Link } from 'react-router';

 
const PlanstCard = ({data}) => {

   

    
    
    return (
        <div className="card bg-base-100  shadow-sm "> 
       
        <figure>
          <img className='h-[250px] w-full'
           src={data.image}></img> 
        </figure>
        <div className="card-body">
          <h2 className="card-title   text-center">{data.name}</h2> 

          <div className="grid grid-cols-1 justify-center  md:flex md:justify-between"> 
 <div>

  <p className="font-bold">
    <span className="font-normal">Scientific Name:</span> {data.scientificName}
  </p>

  <p className="font-bold">
    <span className="font-normal ">Watering:</span>  {data.watering}
  </p>
 


 </div>

  <div>
  <p className="font-bold">
    <span className="font-normal">CareLevel:</span> {data.careLevel}
  </p>
  

 <p className="font-bold">
    <span className="font-normal">Sunlight:  </span> {data.sunlight}
  </p>

  </div>


</div>


        
          <div className="card-actions justify-end">
            <Link  to={`/details/${data.id}`} className="btn w-full  bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold py-2 px-5  shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">View More</Link>
          </div>
        </div>
      </div>
    );
};

export default PlanstCard;