import React from 'react';
import img_1 from '../../../Images/photoGalary/img1.webp'
import img_2 from '../../../Images/photoGalary/img2.webp'
import img_3 from '../../../Images/photoGalary/img3.jpg'
import img_4 from '../../../Images/photoGalary/img4.jpg'
import img_5 from '../../../Images/photoGalary/img5.jpg'
import "./PhotoGallery.css"

const PhotoGallery = () => {
    return (
        <div >
            <div className='photoGalleryCont'>
                <h3>Photo Gallery</h3>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-1">
                    <div className="col">
                        <div className="card h-75">
                        <img src={img_1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Farewell and IEB Accreditation Extension Celebration 2022</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-75">
                        <img src={img_2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Graduation Lunch 2022</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-75">
                        <img src={img_3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">6th Convocation 2019</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-75">
                        <img src={img_4} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Career Fair 2020</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-75">
                        <img src={img_5} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">5th Convocation 2017</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;