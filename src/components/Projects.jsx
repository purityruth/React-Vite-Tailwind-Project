import React from 'react'
import ProjectItem from './ProjectItem'
import ecabinetImg from '../assets/dash2.png'
import cskImg from '../assets/dash.png'
import tunyceImg from '../assets/dash3.png'
import parlourImg from '../assets/dash4.png'
import realestateImg from '../assets/realestate.png'
import postersImg from '../assets/posters.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#472a70]'>Projects</h1>
        <p className='text-center py-8'>I am a passionate and results-driven software developer with a knack for turning innovative ideas into robust, user-friendly applications. 
        Over the years, I've had the privilege of working on a diverse range of projects, honing my skills in the ever-evolving landscape of software development.
        Here are a few projects that showcase my capabilities:</p>
        
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem
              img={ecabinetImg} 
              title='ECabinet System' 
              description='Django & Angular' 
              overview='eCabinet is a sophisticated system designed to revolutionize cabinet meetings on a national scale. Specifically crafted for government officials, including the President and His cabinet office, this platform offers an unparalleled solution for efficient and secure cabinet meetings. eCabinet integrates seamlessly with the government calendar, providing a centralized hub for managing and conducting cabinet meetings.'
              role= 'As the lead developer for eCabinet, I played a pivotal role in architecting a secure and efficient platform tailored to the unique needs of national cabinet meetings. I integrated the government calendar, ensuring that meetings align with official schedules. The open-book feature facilitates transparent collaboration, allowing participants to access essential documents securely. Advanced security measures, including end-to-end encryption, were implemented to safeguard sensitive information.'
              technologies='Built on a robust foundation, eCabinet combines Angular for a dynamic and intuitive front end with Django on the backend, ensuring a secure and scalable environment. The system is fortified with advanced security enhancements, guaranteeing confidentiality and integrity during high-stakes cabinet discussions. Additionally, the integration of the government calendar offers a seamless experience for scheduling and tracking cabinet meetings.'
            />

            <ProjectItem 
              img={cskImg} 
              title='EBoard Software' 
              description='Django & Angular'
              overview='The E-Board Management Software is a comprehensive platform built to streamline and enhance the operations of electronic boards in organizational settings. Tailored for efficiency, the system facilitates seamless communication, collaboration, and decision-making processes within the board.'
              role= 'As the lead full-stack developer, I was responsible for architecting the entire system, from database design to front-end implementation. I crafted a user-friendly interface using Angular, implemented features like document sharing, discussion boards, and voting mechanisms. On the backend, I designed and implemented the Django RESTful API, ensuring data integrity and security.'
              technologies='The project leverages a powerful combination of Angular on the front end and Django on the back end. Angular ensures a dynamic and responsive user interface, while Django provides a robust and scalable backend structure. The integration of WebSockets enhances real-time updates and collaboration features.'
            />

            <ProjectItem 
              img={tunyceImg} 
              title='Entertainment App'
              description='Reactjs & Django'
              overview='The entertainment system Tunyce is an expansive entertainment platform that brings together content creators, restaurants, matatus, advertisers, and subscribers into a dynamic and interconnected ecosystem. Engineered from the ground up, this robust system redefines the entertainment industry by seamlessly integrating various stakeholders for a rich and immersive experience.'
              role='As the lead developer, I spearheaded the development of Tunyce, overseeing the entire lifecycle from conceptualization to deployment. I designed and implemented the architecture of the platform, ensuring a scalable and efficient system. With the team collaborating closely with content creators, restaurant owners, matatu controllers, and advertisers, I crafted features that cater to their specific needs. The subscription model was carefully integrated, allowing content creators to monetize their work directly through the platform.'
              technologies='The platform boasts a cutting-edge architecture, employing a diverse set of technologies to ensure scalability, reliability, and an engaging user experience. Leveraging React.js for a responsive front end, Laravel for the server-side, and MongoDB as the database, Tunyce delivers a fast and interactive interface. Live streaming functionalities are powered by WebSockets, providing real-time engagement. The systems robustness is further enhanced by seamless integrations with payment gateways for subscriptions and monetization features.'
            />

            <ProjectItem 
              img={parlourImg} 
              title='Management System' 
              description='Laravel & Reactjs'
              overview='The system is a comprehensive and user-friendly management system tailored specifically for beauty parlors. This all-in-one solution streamlines daily operations, enhances customer experiences, and empowers salon owners and staff with efficient tools to manage appointments, inventory, and client relationships.'
              role='I spearheaded the development of GlamManager, focusing on creating an intuitive and efficient system that addresses the unique challenges of beauty parlor management. I collaborated closely with salon owners and staff to understand their workflows and requirements, ensuring that GlamManager provides a tailored solution for their needs.'
              technologies='GlamManager is built on a modern tech stack to ensure reliability and scalability. The front end is crafted using React.js for a responsive and intuitive user interface. The back end is powered by Laravel, providing a robust server environment. MongoDB is employed as the database for seamless data management. The system also integrates with payment gateways for hassle-free transactions.'
            />

            <ProjectItem 
              img={realestateImg} 
              title='Real Estate Site' 
              description='Reactjs, Tailwind & Vite'
              overview='PuryEstate is a sophisticated real estate website designed to provide a seamless and visually stunning experience for property seekers. Built on React with the lightning-fast Vite framework and styled with the elegance of Tailwind CSS, PuryEstate combines cutting-edge technology with an intuitive user interface to redefine the way users interact with real estate listings.'
              technologies='PuryEstate leverages React for its dynamic and reactive front end, ensuring a smooth and engaging user experience. The project is powered by Vite, a build tool that enhances development speed and optimizes runtime performance. Tailwind CSS is employed to create a visually appealing and responsive design, enhancing the websites overall aesthetics and usability.'
              role='As the frontend developer for PuryEstate, my role involved designing and implementing the user interface using React, Vite, and Tailwind CSS. I focused on creating a visually stunning and highly responsive website that enhances the user experience in the competitive real estate market. PuryEstate showcases my expertise in frontend development, combining modern frameworks and design principles to deliver a real estate platform that is not only visually appealing but also highly functional and user-centric.'
            />

            <ProjectItem 
              img={postersImg} 
              title='Graphics Designs' 
              description='All Graphics work'
              overview='Welcome to my Graphics Design Portfolio, where creativity meets functionality. As a versatile designer, I specialize in crafting visually stunning graphics, ranging from captivating posters to compelling web designs and distinctive logos. Each project is a unique opportunity to blend aesthetics with purpose, delivering impactful visual solutions.'
              technologies='I utilize tools such as Adobe Photoshop and Illustrator for precision and high-quality graphics for poster designs, Adobe XD for wireframing and prototyping, and Adobe Creative Cloud for web design elements. In logo design and social media graphics, I leverage Adobe Spark and Canva for quick and visually appealing social media content.'
              role='My design philosophy revolves around a meticulous blend of creativity and functionality. Each project starts with a deep dive into understanding your vision and goals, allowing me to tailor designs that not only look visually appealing but also serve a specific purpose. Explore a curated selection of my design work, including poster design, web design, logo creation, social media graphics, branding collateral and print design. I am here to transform your ideas into visually compelling designs. Let us collaborate and bring your vision to life!'
            />

        </div>
    </div>
  )
}

export default Projects
