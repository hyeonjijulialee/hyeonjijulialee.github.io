import React from 'react';
import { BookOpen, Users, Heart } from 'lucide-react';
import { LEADERSHIP } from '../data';

const ORG_ICONS = {
    sbc: BookOpen,
    swe: Users,
    mentorship: Heart,
};

export default function Leadership() {
    return (
        <div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-stone-900 tracking-tight mb-8 sm:mb-12 md:mb-16">Leadership & Service</h2>
            <div>
                {LEADERSHIP.map((org) => {
                    const Icon = ORG_ICONS[org.id] || BookOpen;
                    const descriptionToBullets = (desc) =>
                        Array.isArray(desc) ? desc : (typeof desc === 'string' ? desc.split('\n').filter(Boolean) : []);
                    return (
                        <div key={org.id} className="border-t border-stone-200 pt-6 sm:pt-8 mb-6 sm:mb-10 last:mb-0 first:border-t-0 first:pt-0">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-stone-100 text-stone-600 shrink-0 mt-0.5">
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-stone-900 tracking-tight">
                                        {org.organizationUrl ? (
                                            <a href={org.organizationUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-stone-700">{org.organization}</a>
                                        ) : ( org.organization )}
                                    </h3>
                                    {org.period && <p className="text-sm text-stone-500 mt-1">{org.period}</p>}
                                </div>
                            </div>
                            <div className="ml-0 sm:ml-2 md:ml-14 space-y-6 sm:space-y-8 mt-4 sm:mt-6">
                                {org.entries.map((entry, idx) => {
                                    const bullets = descriptionToBullets(entry.description);
                                    const isCurrent = idx === 0;
                                    return (
                                        <div key={entry.id} className="relative pl-4 sm:pl-6 border-l-2 border-stone-300">
                                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2 sm:mb-3">
                                                <h4 className="font-serif text-base sm:text-lg md:text-xl font-medium text-stone-900 min-w-0">{entry.role}</h4>
                                                <span className="text-xs sm:text-sm text-stone-500 whitespace-nowrap">{isCurrent ? 'Current' : 'Previous'}</span>
                                            </div>
                                            <ul className="space-y-1.5 sm:space-y-2">
                                                {bullets.map((line, i) => (
                                                    <li key={i} className="text-stone-600 text-xs sm:text-sm leading-relaxed flex items-start gap-2">
                                                        <span className="block w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0" />
                                                        <span>{line.trim()}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
