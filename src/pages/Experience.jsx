import React from 'react';
import { Briefcase } from 'lucide-react';
import { EXPERIENCES } from '../data';

export default function Experience() {
    return (
        <div>
            <div className="mb-8 sm:mb-12 md:mb-16">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-stone-900 tracking-tight">Experience</h2>
            </div>
            <div>
                {EXPERIENCES.map((item) => (
                    <div key={item.id} className="py-6 sm:py-8 md:py-10 border-b border-stone-200 first:pt-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3 sm:mb-4">
                            <div className="min-w-0">
                                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-stone-900 tracking-tight">{item.role}</h3>
                                <p className="text-stone-600 mt-1 text-sm sm:text-base md:text-lg break-words">
                                    {item.organizationUrl && item.organizationLinkText ? (
                                        <>
                                            <a href={item.organizationUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-stone-800">
                                                {item.organizationLinkText}
                                            </a>
                                            {item.organization.replace(item.organizationLinkText, '').trim() ? `, ${item.organization.replace(item.organizationLinkText, '').trim()}` : ''}
                                        </>
                                    ) : (
                                        item.organization
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 shrink-0 mt-1 md:mt-0">
                                <Briefcase className="w-4 h-4 text-stone-500 flex-shrink-0" strokeWidth={2} />
                                <span className="text-xs sm:text-sm text-stone-500 whitespace-nowrap">{item.period}</span>
                            </div>
                        </div>
                        {Array.isArray(item.description) ? (
                            <ul className="text-stone-600 max-w-3xl leading-relaxed text-sm sm:text-base md:text-lg space-y-2 list-disc pl-5">
                                {item.description.map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-stone-600 max-w-3xl leading-relaxed text-sm sm:text-base md:text-lg">{item.description}</p>
                        )}
                        {item.tags?.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
