import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import { TitleUse } from './title';
const Register = () => {
  TitleUse('Register')

  const location = useLocation() 
  const navigate = useNavigate()
  const { createUser, updateUser, setUser,googleLogin} = use(AuthContext)

  const handleRegister = (e)=>{

e.preventDefault()

 const frm = e.target 

 const newUser = new FormData(frm) 

 const email = newUser.get('email') 
 const password = newUser.get('password') 
 const name = newUser.get('name') 
 const photo = newUser.get('photo') 

 
 

   if(password.length < 6 ){
    
       
            Swal.fire({
  icon: "error",
  title: "Oops...",
  text: `Length must be at least 6 characte.`,

 
});

    
    return
    
        }else if(!/[A-Z]/.test(password)){
    
         
          
            Swal.fire({
  icon: "error",
  title: "Oops...",
  text: `Must have an Uppercase letter in the password`,

  
 
});
    return


        }else if(!/[a-z]/.test(password)){
    
   


                Swal.fire({
  icon: "error",
  title: "Oops...",
  text: `Must have a Lowercase letter in the password`,
 
});


          return

        } 



 createUser(email,password).then(res=>{


    const user = res.user;
  
          updateUser({ displayName: name, photoURL: photo }).then(() => {
           
           
            setUser({ ...user, displayName: name, photoURL: photo });

             Swal.fire({
              title: " Register Successfully!",
              icon: "success",
              draggable: true
            });
navigate(location.state ? location.state : '/');

        }).catch(error => {
            console.log(error);
            
            setUser(user);  

               Swal.fire({
  icon: "error",
  title: "Oops...",
  text: `${error.message}`,
 
});
        });
        
        }).catch(error=>{





               Swal.fire({
  icon: "error",
  title: "Oops...",
  text: `${error.message}`,
 
});





  console.log(error.message);
  
 })
    
  }




   const handleGoogle = ()=>{


    googleLogin().then(()=>{

       Swal.fire({
  title: "Google Login Successfully!",
  icon: "success",
  draggable: true
});
navigate(location.state ? location.state : '/');
    }).catch(error=>{


               Swal.fire({
  icon: "error",
  title: "Oops...",
  text: `${error.message}`,
 
});
  console.log(error.message);
    })
    
  }
    return (
        <div>
            



 <div className=' w-11/12 mx-auto py-10 flex flex-col items-center justify-center'>


<div className="md:max-w-sm   mx-auto border border-[#2ecc71] rounded p-6 shadow ">
      <h2 className="text-xl font-semibold mb-6">Register Now !</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            required
           name='name'
            type="text"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="Enter your Name"
          />
        </div>


        <div>
          <label className="block text-sm mb-1">Photo URL</label>
          <input
            required
           name='photo'
            type="text"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="photo url"
          />
        </div>


        <div>
          <label className="block text-sm mb-1">Username or Email</label>
          <input
            required
           name='email'
            type="email"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="Enter your username or email"
          />
        </div>



        <div>
          <label className="block text-sm mb-1">Password</label>
          <input name='password'
            type="password"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="flex items-center justify-between text-sm">
        
         
        </div>


        <button
          type="submit"
          className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold py-2 px-5  shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out "
        >
         Register
        </button>

        <p className="text-center text-sm mt-4">
        Already  have an account? Please{' '} 
          <Link to='/login' href="#" className="text-[#2ecc71] underline">
         Login
          </Link>
        </p>
      </form>
    </div>

<div>


<div className="flex w-[300px] items-center my-4">
  <div className="flex-grow h-px bg-gray-300"></div>
  <span className="mx-2 text-sm">Or</span>
  <div className="flex-grow  h-px bg-gray-300"></div>
</div>


<div className='flex flex-col gap-4  items-center justify-center'>


<button onClick={handleGoogle} className="btn w-full bg-white   text-black border-[#2ecc71] shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>  



</div>

</div>


</div>




        </div>
    );
};

export default Register;