// import React from 'react';
import React, { useState } from 'react';
import img_1 from '../../../Images/carousel_img/img 1.jpg'
import img_2 from '../../../Images/carousel_img/img 2.webp'
import img_3 from '../../../Images/carousel_img/img 3.jpg'
import img_4 from '../../../Images/carousel_img/img 4.jpg'
import img_5 from '../../../Images/carousel_img/img 5.jpg'
import img_6 from '../../../Images/carousel_img/img 6.jpg'
import img_7 from '../../../Images/carousel_img/img 7.jpg'
import ChairpersonCSEMilonSir from '../../../Images/ChairpersonCSEMilonSir.jpg'
import "./Banner.css"

const Banner = () => {
    const [showExtraText, setShowExtraText] = useState(false);

    const readMore = () => {
      setShowExtraText(true);
    };
  
    const showLess = () => {
      setShowExtraText(false);
    };
  

    return (
        <div>
            <div className='departmentName'>Department of Computer Science and Engineering</div>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='bannerMenueBox'>
                        <div className='BannerMenu'>
                            <span>Home</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 384 512" fill='#0089CF'><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                        </div>
                        <div className='BannerMenu'>
                            <span>Academic</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 384 512" fill='#0089CF'><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                        </div>
                        <div className='BannerMenu'>
                            <span>People</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 384 512" fill='#0089CF'><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                        </div>
                        <div className='BannerMenu'>
                            <span>Lab Facilities</span>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 384 512" fill='#0089CF'><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg> */}
                        </div>
                        <div className='BannerMenu'>
                            <span>Research</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 384 512" fill='#0089CF'><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                        </div>
                        <div className='BannerMenu'>
                            <span>Announcement</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 384 512" fill='#0089CF'><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                        </div>
                        <div className='BannerMenu'>
                            <span>Alumni</span>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 384 512" fill='#0089CF'><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg> */}
                        </div>
                        <div className='BannerMenu'>
                            <span>Contact Us</span>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 384 512" fill='#0089CF'><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg> */}
                        </div>
                    </div>
                </div>

                <div className='col-md-9'>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators sliderBtn">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{ height:'10px', width:'10px', borderRadius:'50%' }}></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" style={{ height:'10px', width:'10px', borderRadius:'50%' }}></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" style={{ height:'10px', width:'10px', borderRadius:'50%' }}></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3" style={{ height:'10px', width:'10px', borderRadius:'50%' }}></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 3" style={{ height:'10px', width:'10px', borderRadius:'50%' }}></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 3" style={{ height:'10px', width:'10px', borderRadius:'50%' }}></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 3" style={{ height:'10px', width:'10px', borderRadius:'50%' }}></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={img_1} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={img_2} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={img_3} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={img_4} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={img_5} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={img_6} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={img_7} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='row my-5'>
                <div className='col-md-3 BScInCSE' style={{  textAlign:'center' }}>
                    <p>Quick Links</p>
                    <a href="">BSc in CSE</a>
                </div>
                <div className='col-md-9 MessageChar' id='Chairperson'>
                    <p>Message from the Chairperson</p>
                    <div className='row'>
                        <div className="col-md-2" style={{  padding:"0px"}}>
                            <img src={ChairpersonCSEMilonSir} alt="" />
                        </div>
                        <div className="col-md-10" >
                            <span>
                            We welcome you on behalf of the Department of Computer Science and Engineering (CSE) at Eastern University. Our department makes every effort to improve the educational quality according to the needs of today's students and employers. We have highly qualified, efficient and friendly faculty members
                            {showExtraText ? (
                            <span>
                                who enable our students to gain the skills they need to shape their future. We offer courses along with computing laboratories and projects that improve the students’ learning experience and help them to make a connection between theory and practice. We encourage our students to participate in extra-curricular activities, which give them a friendly atmosphere to flourish. We try to produce highly qualified graduates, who will serve the rapidly expanding Computer Science and Engineering fields of Bangladesh and they will be able to face the challenges of the international arena. We value each and every person’s opinion of our institution. We do always strive to ensure the best learning environment and an outstanding educational experience for our students..
                            </span>
                            ) : (
                            <span>
                                <span id='moreDot'>... </span>
                                <span href="" id='ReadMore' onClick={readMore} style={{ color:'#0089CF' }}>Read More</span>
                            </span>
                            )}
                        </span>
                        {showExtraText && <span href="#" id='ShowLess' onClick={showLess} style={{ color:'#0089CF' }}>Show Less</span>}



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;