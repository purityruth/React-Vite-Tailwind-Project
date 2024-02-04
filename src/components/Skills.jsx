import React from 'react';
import SkillItem from './SkillItem'

import htmlImg from '../assets/icons/html.png'
import cssImg from '../assets/icons/css.jfif'
import jsImg from '../assets/icons/js.png'
import reactImg from '../assets/icons/react.jfif'
import angularImg from '../assets/icons/angular.png'
import bootstrapImg from '../assets/icons/bootstrap.jfif'
import vueImg from '../assets/icons/vue.png'
import wordpressImg from '../assets/icons/wordpress.jfif'

import pythonImg from '../assets/icons/python.jfif'
import phpImg from '../assets/icons/php.png'
import djangoImg from '../assets/icons/django.jfif'
import laravelImg from '../assets/icons/laravel.png'
import restImg from '../assets/icons/restAPI.png'
import javaImg from '../assets/icons/java.png'
import goImg from '../assets/icons/golang.png'

import sqlImg from '../assets/icons/sql.png'
import mssqlImg from '../assets/icons/mssql.jfif'
import postgresImg from '../assets/icons/postgresql.png'
import mongoImg from '../assets/icons/mongo.png'

import gitImg from '../assets/icons/git.png'
import githubImg from '../assets/icons/github.png'
import dockerImg from '../assets/icons/docker.png'
import kubernetesImg from '../assets/icons/kubernetes.png'
import awsImg from '../assets/icons/aws.jfif'
import herokuImg from '../assets/icons/heroku.png'
import oceanImg from '../assets/icons/ocean.png'


const Skills = () => {

  return (
    <div id='skills' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#472a70] pb-5'>Skills</h1>


      {/* Frontend Technologies */}
      <h3 className='text-xl font-bold text-left text-[#472a70] pb-5'>Front-End Technologies</h3>
      <div className='grid sm:grid-cols-4 gap-12'>
        <SkillItem img={htmlImg} description='HTML'/>
        <SkillItem img={cssImg} description='CSS'/>
        <SkillItem img={jsImg} description='Javascript'/>
        <SkillItem img={reactImg} description='React'/>
        <SkillItem img={angularImg} description='Angular'/>
        <SkillItem img={bootstrapImg} description='Bootstrap'/>
        <SkillItem img={vueImg} description='Vuejs'/>
        <SkillItem img={wordpressImg} description='Wordpress'/>

      </div>

      <br />
      <br />

      {/* Backend Technologies */}

      <h3 className='text-xl font-bold text-left text-[#472a70] pt-5 pb-5'>Back-End Technologies</h3>
      <div className='grid sm:grid-cols-4 gap-12'>
        <SkillItem img={pythonImg} description='Python'/>
        <SkillItem img={phpImg} description='PHP'/>
        <SkillItem img={javaImg} description='Java'/>
        <SkillItem img={djangoImg} description='Django'/>
        <SkillItem img={laravelImg} description='Laravel'/>
        <SkillItem img={goImg} description='Golang'/>
        <SkillItem img={restImg} description='RestAPI'/>

      </div>

      <br />
      <br />

      {/* Database Management */}

      <h3 className='text-xl font-bold text-left text-[#472a70] pt-5 pb-5'>Database Management</h3>
      <div className='grid sm:grid-cols-4 gap-12'>
        <SkillItem img={sqlImg} description='SQL'/>
        <SkillItem img={mssqlImg} description='MSSQL'/>
        <SkillItem img={postgresImg} description='PostgreSQL'/>
        <SkillItem img={mongoImg} description='MongoDB'/>

      </div>

      <br />
      <br />

      {/* Version Control */}

      <h3 className='text-xl font-bold text-left text-[#472a70] py-5'>Version Control, Tools and Platforms </h3>
      <div className='grid sm:grid-cols-4 gap-12'>
        <SkillItem img={gitImg} description='Git'/>
        <SkillItem img={githubImg} description='Github'/>
        <SkillItem img={dockerImg} description='Docker'/>
        <SkillItem img={kubernetesImg} description='Kubernetes'/>
        <SkillItem img={awsImg} description='AWS'/>
        <SkillItem img={herokuImg} description='Heroku'/>
        <SkillItem img={oceanImg} description='Digital Ocean'/>

      </div>
    </div>
  );
};

export default Skills;
