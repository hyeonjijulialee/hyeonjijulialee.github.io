import React from 'react';
import { Mail, Linkedin, Github, Building2, Download } from 'lucide-react';
import cvPdf from '../assets/LEE_CV.pdf';

export default function Contact() {
    return (
        <div className="flex-1 min-h-0 flex flex-col justify-center items-center text-center max-w-4xl mx-auto py-4 sm:py-6 md:py-0 px-2 sm:px-4">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-stone-900 tracking-tight">Get in Touch</h2>
            <p className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-4 max-w-3xl mx-auto">
                I'm always happy to connect! <br />
                Whether it's about research collaboration, graduate school opportunities, or simply sharing ideas on inclusive and trustworthy AI. <br />
                Don't hesitate to reach out.
            </p>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-3 md:gap-4 w-full max-w-md md:max-w-none px-2 sm:px-0">
                <a
                    href="mailto:hyeonjijulialee@gmail.com"
                    className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-5 py-3.5 sm:px-6 sm:py-4 bg-white border border-stone-200 rounded-lg text-stone-700 text-sm sm:text-base font-medium hover:border-stone-300 hover:bg-stone-50 transition-colors shadow-sm touch-manipulation min-h-[48px]"
                >
                    <Mail size={20} className="shrink-0 text-stone-500" />
                    hyeonjijulialee@gmail.com
                </a>
                <a
                    href="https://www.linkedin.com/in/hyeonji-julia-lee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-5 py-3.5 sm:px-6 sm:py-4 bg-white border border-stone-200 rounded-lg text-stone-700 text-sm sm:text-base font-medium hover:border-stone-300 hover:bg-stone-50 transition-colors shadow-sm touch-manipulation min-h-[48px]"
                >
                    <Linkedin size={20} className="shrink-0 text-stone-500" />
                    LinkedIn
                </a>
                <a
                    href="https://labs.wsu.edu/caire/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-5 py-3.5 sm:px-6 sm:py-4 bg-white border border-stone-200 rounded-lg text-stone-700 text-sm sm:text-base font-medium hover:border-stone-300 hover:bg-stone-50 transition-colors shadow-sm touch-manipulation min-h-[48px]"
                >
                    <Building2 size={20} className="shrink-0 text-stone-500" />
                    CAIRE
                </a>
            </div>
            <a href={cvPdf} download className="inline-flex items-center gap-2 mt-3 text-stone-500 hover:text-stone-800 text-base tracking-wide transition-colors">
                <Download size={18} /> Download CV
            </a>
        </div>
    );
}
