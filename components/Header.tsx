import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center'>
                {/* Social Icons */}
                <SocialIcon 
                    url="https://www.linkedin.com/in/hiyawnew-haile-316784198/" 
                    fgColor='#03A062'
                    bgColor='transparent'
                />
                <SocialIcon 
                    url="https://github.com/hiyawnewhaile" 
                    fgColor='#03A062'
                    bgColor='transparent'
                />
            </motion.div>

            <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center text-green-600 cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='#03A062'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-green-600 '> Reach Out </p>
            </motion.div>
        </header>
    );
}