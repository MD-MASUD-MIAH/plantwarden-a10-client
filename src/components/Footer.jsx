import React from 'react';
import logo from '../assets/logo1.png'
import { FaFacebook, FaGithub, FaLinkedin, FaLinode, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
      <footer className=" gap-5 flex flex-col justify-center
       items-center bg-[#2ecc71] text-neutral-content p-10"> 

   
                <div className="  flex font-bold items-center gap-3 md:text-xl mr-7 "><img className={`w-18 filter invert  brightness-0 " `}  src={logo} alt="" /> <p className='md:mt-4'> PlantWarden</p></div> 

                <div className='flex gap-1 md:gap-10 border-b md:px-10 py-4 text-xs '>
                <a class="link link-hover">Terms and conditions</a>
    <a class="link link-hover">Privacy policy</a>
                  
    <a class="link link-hover">Cookie policy</a>
    <a class="link link-hover">Get Ticket</a>
                  
                  </div>


                <div className='flex gap-10'>
                  <a href='https://web.facebook.com/' target='_blank'><FaFacebook  className='text-[#1877F2]' size={24}></FaFacebook></a>
                  <a href='https://github.com/' target='_blank'><FaGithub  size={24}></FaGithub></a> 
                  <a href='https://www.linkedin.com/feed/' target='_blank'><FaLinkedin className='text-[ #0077B5]'  size={24}></FaLinkedin></a> 
                  <a href="https://www.youtube.com/" target='_blank'><FaYoutube className='text-[#FF0000]'  size={24}></FaYoutube></a>
                </div>

                <p className='text-xs'>Copyright © 2025 - All right reserved by Hossain Masood  Industries Ltd</p>
                
    
    </footer>
    );
};

export default Footer;