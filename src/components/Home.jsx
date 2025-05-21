import React from 'react';
import Banner from './Banner';
import Newplants from './Newplants';
import { useLoaderData } from 'react-router';
import PlantsFe from './PlantsFe';
import PlantCareTips from './PlantCareTips';
import MyLottie from './MyLottie';

const Home = () => {
    
     const plants = useLoaderData()

    return (
        <div> 
            <Banner></Banner>
           <Newplants plants={plants}></Newplants>
        
           <PlantCareTips></PlantCareTips>
           <PlantsFe></PlantsFe>
        </div>
    );
};

export default Home;