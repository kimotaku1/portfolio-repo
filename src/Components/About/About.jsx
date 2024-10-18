import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img2 from '../../assets/profile_img2.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img2} alt="" />
            </div>
            <div className="about-right">
                <div className='about-para'>
                    <p>Hi, I'm Bibek Bhandari, a BIM student with a passion for web development and technology innovation. I'm focused on building dynamic, user-centric web applications using modern frameworks like React and Vite. I enjoy solving complex problems and am always eager to learn new technologies.</p>
                    <p>I have experience working with both front-end and back-end technologies, and I’m constantly exploring how I can make a positive impact through tech. Currently, I’m working on a YouTube-like web app that enhances my skills in full-stack development.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Next JS</p><hr style={{width:"50%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About