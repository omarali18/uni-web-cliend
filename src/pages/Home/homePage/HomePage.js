import React from 'react';
import Top from '../Top/Top';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import UniNotice from '../UniNotice/UniNotice';
import FacultyMembers from '../FacultyMembers/FacultyMembers';

const HomePage = () => {
    return (
        <div>
            <Top/>
            <Navbar/>
            <Banner/>
            <UniNotice/>
            <FacultyMembers/>
        </div>
    );
};

export default HomePage;