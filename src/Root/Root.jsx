import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';


const Root = () => {
const navigate = useNavigation()

    return (
        <div className='overflow-x-hidden flex flex-col'>

            <Navbar></Navbar>
           
          <div className='flex-grow'>

            {
                navigate.state ==='loading' ? <Loader></Loader> : <Outlet></Outlet>
            }
             
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;