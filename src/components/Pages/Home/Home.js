import React from 'react';
import Banner from './Banner';
import Characteristics from './Characteristics/Characteristics';
import FeatureInfo from './FeatureInfo/FeatureInfo';
import Info from './Info/Info';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Characteristics></Characteristics>
            <FeatureInfo></FeatureInfo>
        </div>
    );
};

export default Home;