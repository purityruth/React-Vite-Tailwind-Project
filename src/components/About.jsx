import React from 'react';
import abouttImg from '../assets/about.jpeg'


const About = () => {
  return (
    <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#472a70]'>About</h1>
        <p className='text-justify pt-8'>Greetings! I'm Purity Ruth, a passionate software developer and tech enthusiast on a journey to transform ideas into innovative digital solutions.
            With a strong foundation in JavaScript, Python, PHP, and Java, I thrive on the challenges of turning complex problems into elegant and efficient code. 
            My expertise extends to frameworks like Django, ReactJS, Angular, and Laravel, where I have honed my skills in crafting seamless and dynamic web experiences.
        </p>

        <div className='grid sm:grid-cols-2 gap-12'>
            <p className='text-justify pb-8'>
                Beyond the realm of coding, I am deeply committed to continuous learning, always eager to explore emerging technologies and stay ahead in this ever-evolving tech landscape. 
                My analytical mindset, coupled with an eye for detail, enables me to navigate intricate projects and deliver robust solutions. <br />
                I've had the privilege of working on diverse projects, from internet-scale web applications to real-time collaboration platforms, each contributing to my growth as a developer. I believe in the power of technology to make a positive impact, and I am enthusiastic about contributing my skills to projects that push the boundaries of what's possible. <br />
                Away from the keyboard, you might find me delving into tech blogs, experimenting with new coding challenges, or contributing to open-source initiatives on GitHub. I thrive in collaborative environments, valuing teamwork and effective communication as key pillars of successful project delivery.
            </p>
            <img className='pt-5 object-cover object-left scale-x-[1]' src={abouttImg} alt="" />
        </div>
    </div>
  );
};

export default About;

