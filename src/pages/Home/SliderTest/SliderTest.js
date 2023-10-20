import React, {useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
import "./SliderTest.css"

const SliderTest = () => {
      
  return (
    <div className="FacultySlider">

<OwlCarousel className='owl-theme' loop margin={10} nav>
    <div class='item' style={{ border:'1px solid tomato' }}>
        <a href="" style={{ position:"relative" }}>
            <img src={Mahfuzur} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Professor Dr. Md. Mahfuzur Rahman</p>
                <p className="card-text facultyTitle">Professor and Dean</p>
            </div>
        </a>
    </div>
    <div class='item' style={{ border:'1px solid tomato' }}>
    <a href="" style={{ position:"relative" }}>
            <img src={MilonSir} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Mr. Muhammad Mahfuz Hasan</p>
                <p className="card-text facultyTitle">Associate Professor and Chairperson</p>
            </div>
            </a>
    </div>
    <div class='item' style={{ border:'1px solid tomato' }}>
    <a href="" style={{ position:"relative" }}>
            <img src={ZakiaBegum} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Dr. Zakia Begum</p>
                <p className="card-text facultyTitle">Professor</p>
            </div>
            </a>
    </div>
    <div class='item' style={{ border:'1px solid tomato' }}>
    <a href="" style={{ position:"relative" }}>
            <img src={Amena_Enq} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Dr. Amena Ferdousi</p>
                <p className="card-text facultyTitle">Professor, Mathematics</p>
            </div>
            </a>
    </div>
    <div class='item' style={{ border:'1px solid tomato' }}>
    <a href="" style={{ position:"relative" }}>
            <img src={GulshanKhatun} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Ms. Gulshan Khatun</p>
                <p className="card-text facultyTitle">Associate Professor, Mathematics</p>
            </div>
            </a>
    </div>
    <div class='item' style={{ border:'1px solid tomato' }}>
    <a href="" style={{ position:"relative" }}>
            <img src={MousumiBala} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Ms. Mousumi Bala</p>
                <p className="card-text facultyTitle">Assistant Professor</p>
            </div>
            </a>
    </div>
    <div class='item' style={{ border:'1px solid tomato' }}>
    <a href="" style={{ position:"relative" }}>
            <img src={Tazeen} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Ms. Tazeen Tasneem</p>
                <p className="card-text facultyTitle">Assistant Professor</p>
            </div>
            </a>
    </div>
    <div class='item' style={{ border:'1px solid tomato' }}>
    <a href="" style={{ position:"relative" }}>
            <img src={Tabeen} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Ms. Tabeen Tasneem</p>
                <p className="card-text facultyTitle">Assistant Professor</p>
            </div>
            </a>
    </div>
    <div class='item' style={{ border:'1px solid tomato' }}>
    <a href="" style={{ position:"relative" }}>
            <img src={Tasniah} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Ms. Tasniah Mohiuddin</p>
                <p className="card-text facultyTitle">Lecturer</p>
            </div>
            </a>
    </div>
    <div class='item' style={{ border:'1px solid tomato' }}>
    <a href="" style={{ position:"relative" }}>
            <img src={Shitu} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Ms. Tanzim Tamanna Shitu</p>
                <p className="card-text facultyTitle">Lecturer</p>
            </div>
            </a>
    </div>
    <div class='item' style={{ border:'1px solid tomato' }}>
    <a href="" style={{ position:"relative" }}>
            <img src={Tarina_Rahman} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Ms. Tarina Rahman</p>
                <p className="card-text facultyTitle">Lecturer</p>
            </div>
            </a>
    </div>
    <div class='item' style={{ border:'1px solid tomato' }}>
    <a href="" style={{ position:"relative" }}>
            <img src={Amrita_Biswas} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Mr. Amrita Biswas</p>
                <p className="card-text facultyTitle">Lecturer</p>
            </div>
            </a>
    </div>
    <div class='item' style={{ border:'1px solid tomato' }}>
    <a href="" style={{ position:"relative" }}>
            <img src={NusratJahan} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Ms. Nusrat Jahan</p>
                <p className="card-text facultyTitle">Lecturer</p>
            </div>
            </a>
    </div>
    <div class='item' style={{ border:'1px solid tomato' }}>
    <a href="" style={{ position:"relative" }}>
            <img src={RaziaSultana} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Ms. Razia Sultana</p>
                <p className="card-text facultyTitle">Lecturer</p>
            </div>
            </a>
    </div>
    <div class='item' style={{ border:'1px solid tomato' }}>
    <a href="" style={{ position:"relative" }}>
            <img src={Akhi} className="card-img-top" alt="..." style={{height:'100%'}}/>
            <div className="card-body facultyDetail">
                <p className="card-text facultyName">Mst. Aklima Khatun Akhi</p>
                <p className="card-text facultyTitle">Lecturer</p>
            </div>
            </a>
    </div>
</OwlCarousel>;




    {/* <div className="card-slider-container"> */}
      {/* <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        centerMode={true}
        centerSlidePercentage={25} // Adjust this value as needed
        itemsToShow={4} // Number of cards to show initially
        itemsToSlide={1} // Number of cards to slide at a time
      >
        {fakeCardData.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </Carousel> */}
    </div>
  );
};

export default SliderTest;
