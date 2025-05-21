import { use, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router";
import { FaEye,FaEdit,FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
const Myplant = () => {
  const { user } = use(AuthContext);

  const data = useLoaderData();

  const filter = data.filter((dat) => dat.email === user.email);
   const [plants,setPlants] = useState(filter)
  const handleDelete  = (id)=>{


    Swal.fire({
  title: "Are you sure?",
  text: "You won't be Delete this plant!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

 fetch(`http://localhost:4000/plants/${id}`,{

        method:'DELETE',
        
    }).then(res=>res.json()).then(data=>{

        
        if(data.deletedCount){

            const remaing = plants.filter(res=>res._id !== id) 

                 setPlants(remaing)
        }
        console.log('after delete data ', data);


          Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
      timer:1500



      
    });
        
    })


    
  
  }
});


    console.log(id);

   
    
  }

  return (
    <div className="w-11/12 mx-auto" >
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 py-10 ">
  {plants.map((res) => (
    <div key={res._id} className="flex flex-col shadow-md rounded-xl overflow-hidden border border-[#2ecc71] bg-white">
      
      <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
        <img
          src={res.photo}
          alt="Plant"
          className="w-full sm:w-32 h-32 object-contain rounded-xl"
        />
        <div className="flex flex-col justify-between flex-grow text-sm sm:text-base">
          <p>
            <span className="font-semibold">Name:</span> {res.plantName}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {res.category}
          </p>
          <p>
            <span className="font-semibold">Added:</span> {res.addingDate}
          </p>
        </div>
      </div>


      <div className="flex justify-end gap-2 p-4 border-[#2ecc71] border-t">
        
        <Link to={`/update/${res._id}`}>
          <button className="btn btn-sm bg-gray-600 text-white hover:bg-gray-700">
            <FaEdit />
          </button>
        </Link>
        <button onClick={()=>handleDelete(res._id)} className="btn btn-sm bg-red-500 text-white hover:bg-red-600">
          <FaTrash />
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Myplant;
