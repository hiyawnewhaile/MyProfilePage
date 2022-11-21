import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <motion.img
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once:true }}
            src='https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/70846127_10156763748913262_6576698582152249344_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=hH3urO7FA3wAX88yc1u&tn=8fiOroPy_a55kQeh&_nc_ht=scontent-iad3-2.xx&oh=00_AfCooMHuiktXPYwh-g3G3kewo16B-qcgZ8-xqoYttyyKuw&oe=63A21720'
            className='-mb-20 md md:mb-0 flex-shrink-0 w-56 h56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'> Here is <span className='underline decoration-[#F7Ab0A]/50'>some</span> background
            </h4>
            <p className='text-base'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam error eos, hic facere sit quibusdam natus cupiditate ut corrupti numquam sed autem eum nesciunt dolor expedita consectetur ullam? Eaque, eum!
            </p>
            </div>
        </motion.div>
    )
}