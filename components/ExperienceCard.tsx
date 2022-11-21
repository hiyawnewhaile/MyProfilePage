import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{duration: 1.2 }}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top'
            src="https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/7e/0b/e6/7e0be659-cb31-60c9-165f-b418aadcf602/AppIcon-0-0-1x_U007emarketing-0-0-0-2-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png" alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'> Full Stack Developer</h4>
            <p className='font-bold text-2xl mt-1'>Weather App</p>
            <div className='flex space-x-2 my-2'>
                    <img 
                        className='h-10 w-10 rounded-full' 
                        src="" alt="" 
                    />
                    <img 
                        className='h-10 w-10 rounded-full' 
                        src="" alt="" 
                    />
                    <img 
                        className='h-10 w-10 rounded-full' 
                        src="" alt="" 
                    />

            </div>
            <p className='uppercase py-5 text-gray-300'>
                start - end
            </p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
            </ul>

        </div>
        </article>
    )
}