import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img_1 from '../../../Images/carousel_img/img 1.jpg'
import img_2 from '../../../Images/carousel_img/img 2.webp'
import img_3 from '../../../Images/carousel_img/img 3.jpg'
import img_4 from '../../../Images/carousel_img/img 4.jpg'
import img_5 from '../../../Images/carousel_img/img 5.jpg'
import img_6 from '../../../Images/carousel_img/img 6.jpg'
import img_7 from '../../../Images/carousel_img/img 7.jpg'
import "./UniNotice.css"

const UniNotice = () => {
    const [showEvent, setShowEvent] = useState(false);
    const [slidesToShow, setSlidesToShow] = useState(2);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
      };

      const updateSlidesToShow = () => {
        if (window.innerWidth < 768) {
          console.log("skjksdooooo");
          setSlidesToShow(1);
        } else {
          setSlidesToShow(2);
        }
      };
    
      useEffect(() => {
        updateSlidesToShow();
    
        window.addEventListener('resize', updateSlidesToShow);
    
        return () => {
          window.removeEventListener('resize', updateSlidesToShow);
        };
      }, []);
    
      const cardData = [
        {
          image: img_1,
          text: 'Inauguration of ITEE at Eastern University',
          text_2: '10 Apr 2023',
        },
        {
          image: img_1,
          text: 'Alumni Reunion of CSE department held at EU',
          text_2: '10 Mar 2023',
        },
        {
          image: img_1,
          text: 'Programming Contest held at Eastern University',
          text_2: '23 Aug 2023',
        },
        {
          image: img_1,
          text: 'EU team attended on Ada Lovelace celebration program',
          text_2: '22 Jul 2023',
        },
        {
          image: img_1,
          text: 'Programming Contest and Project Showcase Competition held at Eastern University',
          text_2: '15 Nov 2023',
        },
        {
          image: img_2,
          text: "Selection process for EU Students' Internship Placements in japan!",
          text_2: '9 August 2023',
        },
        {
          image: img_3,
          text: "EEE Alumni Reunion held at Eastern University",
          text_2: '1 September  2023',
        },
        {
          image: img_4,
          text: 'Stanford University started training program with 10 EU students',
          text_2: '8 Jul 2023',
        },
        {
          image: img_5,
          text: 'Programming Contest and ICT Olympiad held',
          text_2: '30 May 2023',
        },
      ];

      const toggleNotice = () => {
        setShowEvent(false);
      };
    
      const toggleEvent = () => {
        setShowEvent(true);
      };
  



    return (
        <div className='notisContainerBox' >
            <div className="row notisContainer">
                <div className="col-md-6 newsPart">
                    <p>News</p>
                    <div className="card-carousel newsSlider">
                    <Slider {...settings}>
                        {cardData.map((card, index) => (
                        <div key={index} className="card">
                            <div className="card-content" style={{marginRight: '0px', marginLeft: '0px'}}>
                            <img src={card.image} alt={`Card ${index}`} />
                            <div >
                            <p className='cardCarusalText'>{card.text}</p>
                            <p className='cardCarusalDate'>{card.text_2}</p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </Slider>
                    </div>
                </div>
                <div className="col-md-6 noticePart">
                    <p>Notice & Events</p>
                    <button className={`${!showEvent ? 'btnActive' : ''}`}
          onClick={toggleNotice}>General Notice</button>
                    <button className={`${showEvent ? 'btnActive' : ''}`}
          onClick={toggleEvent}>Upcoming Events</button>
                    <div className={`allNotice ${showEvent ? 'd-none' : ''}`}>
                        <div className='singleNotice'>
                            <a href=''>Conflict Mid-term Exam schedule of Summer 2023, CSE</a>
                            <p>Publish Date: October 18, 2023</p>
                        </div>
                        <div className='singleNotice'>
                            <a href=''>Missed Mid-term Exam schedule of Summer 2023, CSE</a>
                            <p>Publish Date: October 18, 2023</p>
                        </div>
                        <div className='singleNotice'>
                            <a href=''>Missed/Conflict Mid-term Examination, Summer 2023 of CSE</a>
                            <p>Publish Date: October 9, 2023</p>
                        </div>
                        <div className='singleNotice'>
                            <a href=''>Mid term Exam Schedule of Summer 2023, CSE (Revised)</a>
                            <p>Publish Date: September 12, 2023</p>
                        </div>
                        <div className='singleNotice'>
                            <a href=''>Missed/Conflict Final Examination Schedule of CSE, Spring 2023</a>
                            <p>Publish Date: July 24, 2023</p>
                        </div>
                            <a className='viewAllBtn' href="">View All</a>
                    </div>
                    <div className={`allEvents ${!showEvent ? 'd-none' : ''}`}>
                        <p>There is no Upcoming Events</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniNotice;