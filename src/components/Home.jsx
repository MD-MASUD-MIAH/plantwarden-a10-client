import React from 'react';
import Banner from './Banner';
import Newplants from './Newplants';
import { useLoaderData } from 'react-router';
import PlantsFe from './PlantsFe';
import PlantCareTips from './PlantCareTips';
import MyLottie from './MyLottie';
import { TitleUse } from './title';
import UserReview from './UserReview';

const Home = () => {
    TitleUse('Home')
    
     const plants = useLoaderData() 

    return (
        <div> 
            <Banner></Banner> 
           <Newplants plants={plants}></Newplants> 
        
           <PlantCareTips></PlantCareTips> 
           <UserReview></UserReview>
           <PlantsFe></PlantsFe>
        </div>
    );
};

export default Home;