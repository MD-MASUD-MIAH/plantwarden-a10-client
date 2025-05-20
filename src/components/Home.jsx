import React from 'react';
import Banner from './Banner';
import Newplants from './Newplants';
import { useLoaderData } from 'react-router';
import PlantsFe from './PlantsFe';

const Home = () => {
    
     const plants = useLoaderData()

    return (
        <div> 
            <Banner></Banner>
           <Newplants plants={plants}></Newplants>
           <PlantsFe></PlantsFe>
        </div>
    );
};

export default Home;