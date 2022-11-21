import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Image from "next/image";
import PortfolioPic from '../images/portfolio-pic.jpg';
import Link from 'next/link';


type Props = {};

export default function Hero({ }: Props) {
        const [text, count] = useTypewriter({
            words: [
                'Hello World, Hiyawnew Haile here :)',
                'full-stack-developer.tsx',
                '<Growth />'
            ],
            loop: true,
            delaySpeed: 2000,
        });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img 
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/34367947_10155692193753262_3946043929534660608_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=HHaHRQTFEP4AX__iHCF&tn=8fiOroPy_a55kQeh&_nc_ht=scontent-iad3-2.xx&oh=00_AfAE-09gdn6iigWoDzgptfZpbrd2MoCeH7xj-wl5AGF0WQ&oe=63A21DDE" 
                alt="" 
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Software Engineer
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="gold"/>
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
