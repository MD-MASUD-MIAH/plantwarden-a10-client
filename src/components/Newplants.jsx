
import PlanstCard from './PlanstCard';

// const  planst =  fetch('plants.json').then(res=>res.json()) 
const Newplants = ({plants}) => {

    // const  plantData= use(planst)  

    // console.log(plantData); 
    
    return (
        <div>
            <div className='my-12'>

              <h1 className='text-center pt-10 text-4xl font-bold'>Your New Plant Buddies</h1> 


              <p className='text-center py-4 text-gray-400 w-[80%] mx-auto'>Our green family just got bigger! These new plants are full of charm and character, ready to thrive in <br />  your care. Start your plant journey or expand your collection with these fresh faces.,<span className='hidden md:block'>ready to thrive in your care. Start your plant journey or expand your collection with these fresh faces.</span></p>
              </div>



  <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 md:gap-20 py-10'>
                {
                  plants.slice(0, 6).map(data=><PlanstCard  key={data.id} data={data}></PlanstCard>)
                }
            </div>

        </div>



    );
};

export default Newplants;