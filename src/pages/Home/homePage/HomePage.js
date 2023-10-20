import React from 'react';
import Top from '../Top/Top';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import UniNotice from '../UniNotice/UniNotice';
// import SliderTest from '../SliderTest/SliderTest'
import FacultyMembers from '../FacultyMembers/FacultyMembers';
import Testimonials from '../Testimonials/Testimonials';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import International from '../International/International';

const HomePage = () => {
    return (
        <div>
            <Top/>
            <Navbar/>
            <Banner/>
            <UniNotice/>
            <FacultyMembers/>
            <Testimonials/>
            <PhotoGallery/>
            <International/>
            {/* <SliderTest/> */}
            
        </div>
    );
};

export default HomePage;