import React from 'react';
import Banner from './Banner';
import Newplants from './Newplants';
import { useLoaderData } from 'react-router';

const Home = () => {
    
     const plants = useLoaderData()

    return (
        <div> 
            <Banner></Banner>
           <Newplants plants={plants}></Newplants>
        </div>
    );
};

export default Home;