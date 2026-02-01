import React from 'react';
import { Link } from 'react-router-dom';
import { RESEARCH_FOCUS } from '../data';
import profileImg from '../assets/profile.jpeg';

export default function About() {
    return (
        <div className="-mx-2 sm:-mx-4 md:-mx-6 lg:-mx-8">
            <div className="grid md:grid-cols-[auto_1fr] gap-0 md:items-start">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shrink-0 order-1 md:order-1 mt-6 sm:mt-10 md:mt-16 lg:mt-20">
                    <img src={profileImg} alt="Hyeonji Julia Lee" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Hyeonji+Lee&background=2C5070&color=fff"; }} />
                </div>
                <div className="py-6 sm:py-10 md:py-16 lg:py-20 pl-0 md:pl-6 lg:pl-8 flex flex-col justify-center order-2 md:order-2">
                    <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-stone-900 tracking-tight">Hyeonji Julia Lee</h1>
                    <p className="text-stone-500 mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg md:text-xl tracking-wide">Prospective Graduate Student in Information Science · Fall 2026</p>
                    <div className="mt-6 sm:mt-8 md:mt-14 space-y-4 sm:space-y-6 md:space-y-8 text-stone-600 text-base sm:text-lg md:text-[1.0625rem] leading-loose max-w-4xl">
                        <p>Hello! I am Hyeonji (usually go by Julia) Lee, an undergraduate student majoring in Computer Science at Washington State University. I am applying to graduate programs in Information Schools (iSchools) for Fall 2026.</p>
                        <p>I study how information influences autonomy and quality of life, especially when unequal access, literacy gaps, and socioeconomic barriers create disparities. My goal is to design systems and learning approaches that help people access information fairly, understand it accurately, and use it meaningfully in daily life.</p>
                        <p>Through my graduate studies, I hope to advance information science with research that strengthens equity, improves information practices, and creates positive impact on society.</p>
                        <p>Thanks again for visiting! If you have any questions, feel free to reach out through the contact information.</p>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mt-12 sm:mt-16 md:mt-28 pt-10 sm:pt-14 md:pt-24 border-t border-stone-200">
                <div>
                    <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400 mb-4">Education</h3>
                    <p className="font-serif text-stone-800 text-lg md:text-xl font-medium">B.S. Computer Science</p>
                    <p className="text-stone-500 mt-1 md:text-lg">Washington State University</p>
                </div>
                <div>
                    <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400 mb-4">Research Focus</h3>
                    <ul className="space-y-2 text-stone-600 md:text-lg leading-relaxed">
                        {RESEARCH_FOCUS.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
