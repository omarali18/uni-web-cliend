import React, {useState} from 'react';
import Testimonial from '../../../Images/Testimonials.jpg';
import "./Testimonials.css"

const Testimonials = () => {
    const [showExtraText, setShowExtraText] = useState(false);

    const readMore = () => {
      setShowExtraText(true);
    };
  
    const showLess = () => {
      setShowExtraText(false);
    };
    return (
        <div className='mt-5' style={{ width:'100%', textAlign:'center', marginBottom:"3rem"}}>
            <p style={{ color:'#0089CF', fontSize:'25px', fontWeight:'500' }}>Testimonials</p>
            <div className='TestimonialBox'>
                <div>
                <div>
                <img src={Testimonial} width={120} alt="" />
                </div>
                <div className='mt-2 ' style={{textAlign: 'left'}}>
                    <h3 style={{ color:'#0089CF' }}>Yousuf Al Azad</h3>
                    <h6>Batch: 2014</h6>
                    <h6>Department of CSE</h6>
                    <h6>Current Role: Managing Director at Azoncode Ltd.</h6>
                    <span>
                    I currently work in a software company as a Managing Director. I’m managing all company task from start to finish. My regular job is distributing task to concern department and follow-up there task. I
                            {showExtraText ? (
                            <span>
                                I currently work in a software company as a Managing Director. I’m managing all company task from start to finish. My regular job is distributing task to concern department and follow-up there task. I..who enable our students to gain the skills they need to shape their future. We offer courses along with computing laboratories and projects that improve the students’ learning experience and help them to make a connection between theory and practice. We encourage our students to participate in extra-curricular activities, which give them a friendly atmosphere to flourish. We try to produce highly qualified graduates, who will serve the rapidly expanding Computer Science and Engineering fields of Bangladesh and they will be able to face the challenges of the international arena. We value each and every person’s opinion of our institution. We do always strive to ensure the best learning environment and an outstanding educational experience for our students..
                            </span>
                            ) : (
                            <span>
                                <span id='moreDot'>... </span>
                                <span href="" id='ReadMore' onClick={readMore} style={{ color:'#0089CF' }}>Read More</span>
                            </span>
                            )}
                        </span>
                        {showExtraText && <span href="" id='ShowLess' onClick={showLess} style={{ color:'#0089CF' }}>Show Less</span>}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;