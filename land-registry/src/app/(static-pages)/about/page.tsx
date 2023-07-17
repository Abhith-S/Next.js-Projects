import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import React, { FC } from 'react'

const About:FC = () => {
  return (
    <div>
      <div><Features/></div>
      <div><Stats/></div>
      <div><Team/></div>
      <div className='w-3/4 mx-auto'><Testimonials/>di</div>
      
    </div>
  )
}

export default About