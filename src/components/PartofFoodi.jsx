import React from 'react'
import Section from './Section'
import Container from './Container'
import PartofFoodiImg from '../assets/partoffoodi.png'
import { ArrowRight } from 'lucide-react'

const PartofFoodi = () => {
  return (
    <Section>
        <Container className='max-w-310.25'>
            <div className='w-full rounded-[50px] shadow-lg flex items-center justify-center'
                style={{
                    background: `url(${PartofFoodiImg}) no-repeat center center`,
                    backgroundSize: 'cover',}}>
                <div className='pt-[590px] text-center'>
                    <h3 className='font-inter font-bold text-[40px] mb-5'>
                        Want to be a part of Foodtime?
                    </h3>
                    <p className='text-2xl font-inter font-semibold text-[#ededed] mb-4'>
                       List your restaurant or shop on foodtime.
                    </p>
                    <Button text="Join Us" className="mb-6 mx-auto" />
                </div>
            </div>
        </Container>
    </Section>
  )
}

export default PartofFoodi


const Button = ({ text, className }) => {
  return (
    <button className={`bg-[#FF8B00] flex items-center gap-6 text-white cursor-pointer font-inter font-medium text-base sm:text-lg px-5 sm:px-6 py-3 rounded-md hover:bg-green/90 hover:scale-105 transition duration-300 ${className}`}>
      {text}
      <ArrowRight className='size-5 text-white' />
    </button>
  );
};