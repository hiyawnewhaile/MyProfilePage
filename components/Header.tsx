import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
    socials: Social[]
};

export default function Header({ socials }: Props) {
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
                className='flex flex-row items-center'
                >
                {/* Social Icons */}
                {socials.map((social) => (
                    <SocialIcon
                    key={social._id}
                        url={social.url}
                        fgColor='#03A062'
                        bgColor='transparent'
                    />
                ))}
            </motion.div>

            <Link href='#contact'>
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
            </Link>
        </header>
    );
}