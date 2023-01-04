import React from 'react';
import Banner from './Banner';
import Characteristics from './Characteristics/Characteristics';
import FeatureInfo from './FeatureInfo/FeatureInfo';
import Footer from './Footer/Footer';
import HomeTeachers from './HomeTeachers/HomeTeachers';
import Info from './Info/Info';
import Testimonials from './Testimonials/Testimonials';


const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <Banner></Banner>
            <Info></Info>
            <Characteristics></Characteristics>
            <FeatureInfo></FeatureInfo>
            <HomeTeachers></HomeTeachers>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;