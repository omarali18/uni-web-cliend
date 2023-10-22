import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Mahfuzur from '../../../Images/faculty/mahfuzur.jpg'
import MilonSir from '../../../Images/faculty/MilonSir.jpg'
import ZakiaBegum from '../../../Images/faculty/ZakiaBegum.jpg'
import Amena_Enq from '../../../Images/faculty/Amena_Enq.jpg'
import GulshanKhatun from '../../../Images/faculty/GulshanKhatun.jpg'
import MousumiBala from '../../../Images/faculty/Mousumi Bala.jpg'
import Tazeen from '../../../Images/faculty/Tazeen.jpg'
import Tabeen from '../../../Images/faculty/Tabeen.jpg'
import Tasniah from '../../../Images/faculty/Tasniah.jpg'
import Shitu from '../../../Images/faculty/Shitu.webp'
import Tarina_Rahman from '../../../Images/faculty/Tarina_Rahman.webp'
import Amrita_Biswas from '../../../Images/faculty/Amrita_Biswas.webp'
import NusratJahan from '../../../Images/faculty/Nusrat Jahan.webp'
import RaziaSultana from '../../../Images/faculty/Razia Sultana.webp'
import Akhi from '../../../Images/faculty/Akhi.webp';
import "./FacultyMembers.css"

const FacultyMembers = () => {
    const [slidesToShow, setSlidesToShow] = useState(4);
    const [slidesToScroll, setSlidesToScroll] = useState(4);

    const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToScroll,
          autoplay: true,     
          autoplaySpeed: 3000,  
        };

        const updateSlidesToShow = () => {
            if (window.innerWidth < 768) {
              setSlidesToShow(1);
              setSlidesToScroll(1)
            } else {
              setSlidesToShow(4);
              setSlidesToScroll(4)
            }
          };
        
          useEffect(() => {
            updateSlidesToShow();
        
            window.addEventListener('resize', updateSlidesToShow);
        
            return () => {
              window.removeEventListener('resize', updateSlidesToShow);
            };
          }, []);

    const facultyData=[
        {
            image: Mahfuzur,
            name: 'Professor Dr. Md. Mahfuzur Rahman',
            designation: 'Professor and Dean',
        },
        {
            image: MilonSir,
            name: 'Mr. Muhammad Mahfuz Hasan',
            designation: 'Associate Professor and Chairperson',
        },
        {
            image: ZakiaBegum,
            name: 'Dr. Zakia Begum',
            designation: 'Professor',
        },
        {
            image: Amena_Enq,
            name: 'Dr. Amena Ferdousi',
            designation: 'Professor, Mathematics',
        },
        {
            image: GulshanKhatun,
            name: 'Ms. Gulshan Khatun',
            designation: 'Associate Professor, Mathematics',
        },
        {
            image: MousumiBala,
            name: 'Ms. Mousumi Bala',
            designation: 'Assistant Professor',
        },
        {
            image: Tazeen,
            name: 'Ms. Tazeen Tasneem',
            designation: 'Assistant Professor',
        },
        {
            image: Tabeen,
            name: 'Ms. Tabeen Tasneem',
            designation: 'Assistant Professor',
        },
        {
            image: Tasniah,
            name: 'Ms. Tasniah Mohiuddin',
            designation: 'Lecturer',
        },
        {
            image: Shitu,
            name: 'Ms. Tanzim Tamanna Shitu',
            designation: 'Lecturer',
        },
        {
            image: Tarina_Rahman,
            name: 'Ms. Tarina Rahman',
            designation: 'Lecturer',
        },
        {
            image: Amrita_Biswas,
            name: 'Mr. Amrita Biswas',
            designation: 'Lecturer',
        },
        {
            image: NusratJahan,
            name: 'Ms. Nusrat Jahan',
            designation: 'Lecturer',
        },
        {
            image: RaziaSultana,
            name: 'Ms. Razia Sultana',
            designation: 'Lecturer',
        },
        {
            image: Akhi,
            name: 'Mst. Aklima Khatun Akhi',
            designation: 'Lecturer',
        },
    ]





    return (
        <div className='FacultyContainer'>
            <div className="card-carousel FacultySlider">
                <p>Faculty Members</p>
                <Slider {...settings}>
                    {facultyData.map((card, index) => (
                        <a href='' key={index} className="card" style={{ border:'2px solid tomato' }}>
                            <div className="card-content" style={{marginRight: '0px', marginLeft: '0px', position:"relative"}}>
                            <img src={card.image} alt={`Card ${index}`} style={{height:'100%'}}/>
                            <div className="facultyDetail">
                            <p className='facultyName'>{card.name}</p>
                            <p className='facultyTitle'>{card.designation}</p>
                            </div>
                            </div>
                        </a>
                    ))}
                </Slider>
            </div>
        </div>
    //     <div className="FacultySlider">
    //         <p>Faculty Members</p>
    // <OwlCarousel className='owl-theme' loop margin={10} nav>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //         <a href="" style={{ position:"relative" }}>
    //             <img src={Mahfuzur} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Professor Dr. Md. Mahfuzur Rahman</p>
    //                 <p className="card-text facultyTitle">Professor and Dean</p>
    //             </div>
    //         </a>
    //     </div>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //     <a href="" style={{ position:"relative" }}>
    //             <img src={MilonSir} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Mr. Muhammad Mahfuz Hasan</p>
    //                 <p className="card-text facultyTitle">Associate Professor and Chairperson</p>
    //             </div>
    //             </a>
    //     </div>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //     <a href="" style={{ position:"relative" }}>
    //             <img src={ZakiaBegum} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Dr. Zakia Begum</p>
    //                 <p className="card-text facultyTitle">Professor</p>
    //             </div>
    //             </a>
    //     </div>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //     <a href="" style={{ position:"relative" }}>
    //             <img src={Amena_Enq} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Dr. Amena Ferdousi</p>
    //                 <p className="card-text facultyTitle">Professor, Mathematics</p>
    //             </div>
    //             </a>
    //     </div>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //     <a href="" style={{ position:"relative" }}>
    //             <img src={GulshanKhatun} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Ms. Gulshan Khatun</p>
    //                 <p className="card-text facultyTitle">Associate Professor, Mathematics</p>
    //             </div>
    //             </a>
    //     </div>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //     <a href="" style={{ position:"relative" }}>
    //             <img src={MousumiBala} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Ms. Mousumi Bala</p>
    //                 <p className="card-text facultyTitle">Assistant Professor</p>
    //             </div>
    //             </a>
    //     </div>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //     <a href="" style={{ position:"relative" }}>
    //             <img src={Tazeen} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Ms. Tazeen Tasneem</p>
    //                 <p className="card-text facultyTitle">Assistant Professor</p>
    //             </div>
    //             </a>
    //     </div>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //     <a href="" style={{ position:"relative" }}>
    //             <img src={Tabeen} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Ms. Tabeen Tasneem</p>
    //                 <p className="card-text facultyTitle">Assistant Professor</p>
    //             </div>
    //             </a>
    //     </div>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //     <a href="" style={{ position:"relative" }}>
    //             <img src={Tasniah} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Ms. Tasniah Mohiuddin</p>
    //                 <p className="card-text facultyTitle">Lecturer</p>
    //             </div>
    //             </a>
    //     </div>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //     <a href="" style={{ position:"relative" }}>
    //             <img src={Shitu} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Ms. Tanzim Tamanna Shitu</p>
    //                 <p className="card-text facultyTitle">Lecturer</p>
    //             </div>
    //             </a>
    //     </div>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //     <a href="" style={{ position:"relative" }}>
    //             <img src={Tarina_Rahman} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Ms. Tarina Rahman</p>
    //                 <p className="card-text facultyTitle">Lecturer</p>
    //             </div>
    //             </a>
    //     </div>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //     <a href="" style={{ position:"relative" }}>
    //             <img src={Amrita_Biswas} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Mr. Amrita Biswas</p>
    //                 <p className="card-text facultyTitle">Lecturer</p>
    //             </div>
    //             </a>
    //     </div>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //     <a href="" style={{ position:"relative" }}>
    //             <img src={NusratJahan} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Ms. Nusrat Jahan</p>
    //                 <p className="card-text facultyTitle">Lecturer</p>
    //             </div>
    //             </a>
    //     </div>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //     <a href="" style={{ position:"relative" }}>
    //             <img src={RaziaSultana} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Ms. Razia Sultana</p>
    //                 <p className="card-text facultyTitle">Lecturer</p>
    //             </div>
    //             </a>
    //     </div>
    //     <div className='item' style={{ border:'1px solid tomato' }}>
    //     <a href="" style={{ position:"relative" }}>
    //             <img src={Akhi} className="card-img-top" alt="..." style={{height:'100%'}}/>
    //             <div className="card-body facultyDetail">
    //                 <p className="card-text facultyName">Mst. Aklima Khatun Akhi</p>
    //                 <p className="card-text facultyTitle">Lecturer</p>
    //             </div>
    //             </a>
    //     </div>
    // </OwlCarousel>
    

    //     </div>
      );
};

export default FacultyMembers;