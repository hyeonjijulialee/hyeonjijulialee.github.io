import React from 'react';
import { BookOpen } from 'lucide-react';
import { ACCEPTED_PAPERS, CONFERENCES } from '../data';

function formatAuthors(authors) {
    const parts = authors.split(/(Lee, H\. J\.)/g);
    return parts.map((part, i) => part === 'Lee, H. J.' ? <span key={i} className="font-medium text-stone-900">{part}</span> : <span key={i}>{part}</span>);
}

function PublicationItem({ pub }) {
    return (
        <div className="border-b border-stone-200/80 pb-6 sm:pb-8 md:pb-12 last:border-b-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                <h4 className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-stone-900 leading-snug min-w-0">{pub.title}</h4>
                <div className="flex items-center gap-2 shrink-0">
                    {pub.type === 'accepted' && <span className="px-2.5 py-1 bg-stone-100 text-stone-700 text-xs font-medium rounded-full">Accepted</span>}
                    {pub.type === 'under-review' && <span className="px-2.5 py-1 bg-stone-100 text-stone-700 text-xs font-medium rounded-full">Under Review</span>}
                    {pub.year && <span className="text-sm text-stone-600">{pub.year}</span>}
                </div>
            </div>
            <div className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed mb-2">{formatAuthors(pub.authors)}</div>
            <div className="text-xs sm:text-sm md:text-base text-stone-500 italic">{pub.venue}</div>
        </div>
    );
}

export default function Publications() {
    const statusRank = (item) => (item?.type === 'under-review' ? 0 : 1);
    const publications = [...ACCEPTED_PAPERS, ...CONFERENCES.filter((item) => item.category !== 'workshop')].sort((a, b) => statusRank(a) - statusRank(b));
    const workshops = CONFERENCES.filter((item) => item.category === 'workshop').sort((a, b) => statusRank(a) - statusRank(b));

    return (
        <div>
            <div className="mb-8 sm:mb-12 md:mb-16">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-stone-900 tracking-tight">Publications & Conferences</h2>
            </div>
            <div className="space-y-10 sm:space-y-16 md:space-y-20">
                {publications.length > 0 && (
                    <div>
                        <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400 mb-6 sm:mb-10 flex items-center gap-2">
                            <BookOpen size={14} /> Publications & Conference Presentations
                        </h3>
                        <div className="space-y-6 sm:space-y-10 md:space-y-12">
                            {publications.map((pub) => <PublicationItem key={pub.id} pub={pub} />)}
                        </div>
                    </div>
                )}
                {workshops.length > 0 && (
                    <div>
                        <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400 mb-6 sm:mb-10 flex items-center gap-2">
                            <BookOpen size={14} /> Workshops
                        </h3>
                        <div className="space-y-6 sm:space-y-10 md:space-y-12">
                            {workshops.map((pub) => <PublicationItem key={pub.id} pub={pub} />)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
