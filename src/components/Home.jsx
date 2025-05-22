import React from 'react';
import Banner from './Banner';
import Newplants from './Newplants';
import { useLoaderData } from 'react-router';
import PlantsFe from './PlantsFe';
import PlantCareTips from './PlantCareTips';
import MyLottie from './MyLottie';
import { TitleUse } from './title';

const Home = () => {
    TitleUse('Home')
    
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