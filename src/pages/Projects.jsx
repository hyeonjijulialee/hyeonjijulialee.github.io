import React from 'react';
import { Building2, Calendar, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data';
import adaptAiImage from '../assets/adapt-ai.png';

export default function Projects() {
    const projectEntries = [];
    PROJECTS.forEach((proj) => {
        if (proj.subprojects) {
            const subList = proj.subprojects;
            subList.forEach((sp, idx) => {
                const isLastSub = idx === subList.length - 1;
                projectEntries.push({
                    id: sp.id,
                    title: sp.title,
                    subtitle: proj.title === 'Microsoft AI for Good' ? 'Microsoft AI for Good Research Grant' : proj.title,
                    roleLine: `${sp.role} — ${sp.affiliation}`,
                    orgLine: 'Washington State University',
                    period: sp.period,
                    description: [sp.description, ...(sp.details || [])].filter(Boolean).join(' '),
                    link: sp.links?.[0]?.url,
                    budget: null,
                    funding: proj.meta?.length && isLastSub ? proj.meta : null,
                    fundingLabel: proj.meta?.length && isLastSub && proj.id === 'ms-ai' ? 'Microsoft AI for Good — Funding' : null,
                });
            });
        } else {
            projectEntries.push({
                id: proj.id,
                title: proj.id === 'mice' ? 'National R&D MICE Platform' : proj.title,
                subtitle: 'Ministry of Trade, Industry and Energy',
                roleLine: proj.role,
                orgLine: proj.affiliation,
                period: proj.period,
                description: [proj.description, ...(proj.details || [])].filter(Boolean).join(' '),
                link: proj.links?.[0]?.url,
                budget: proj.id === 'mice' ? [
                    '2022 | Project Number: 1415181539 | Total R&D Budget: 737M KRW (≈ 546K USD)',
                    '2023 | Project Number: 1415185737 | Total R&D Budget: 1.40B KRW (≈ 1.03M USD)',
                ] : null,
            });
        }
    });

    return (
        <div>
            <div className="mb-8 sm:mb-12 md:mb-16">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-stone-900 tracking-tight">Projects</h2>
            </div>
            <div className="divide-y divide-stone-200">
                {projectEntries.map((entry) => (
                    <article key={entry.id} className="py-6 sm:py-8 md:py-10 lg:py-14 first:pt-0 last:pb-0 group">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12">
                            <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4 min-w-0">
                                <div className="flex items-start justify-between gap-3 sm:gap-4">
                                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-stone-900 tracking-tight group-hover:text-stone-600 transition-colors duration-300 min-w-0">
                                        {entry.title}
                                    </h3>
                                    {entry.link && (
                                        <a
                                            href={entry.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 shrink-0 text-stone-400 hover:text-stone-800 transition-colors"
                                            aria-label={`View ${entry.title}`}
                                        >
                                            <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                                        </a>
                                    )}
                                </div>
                                <p className="font-serif text-base sm:text-lg md:text-xl text-stone-900">{entry.subtitle}</p>
                                <div className="flex flex-col gap-2 mt-1">
                                    <div className="flex items-center gap-2 text-stone-500 min-w-0">
                                        <Building2 className="w-4 h-4 shrink-0" />
                                        <span className="text-xs sm:text-sm truncate">{entry.roleLine}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-stone-500">
                                        <span className="text-sm">{entry.orgLine}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-stone-500">
                                        <Calendar className="w-4 h-4 shrink-0" />
                                        <span className="text-sm font-medium">{entry.period}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 flex flex-col justify-center gap-4 sm:gap-6 min-w-0">
                                <p className="text-stone-600 leading-relaxed text-sm sm:text-base md:text-lg">
                                    {entry.description}
                                </p>
                                {entry.id === 'adapt-ai' && (
                                    <div className="mt-3 sm:mt-4">
                                        <img
                                            src={adaptAiImage}
                                            alt="ADAPT-AI platform — Design classroom assessments with an AI partner"
                                            className="w-full max-w-full sm:max-w-md rounded-lg border border-stone-200 shadow-sm"
                                        />
                                    </div>
                                )}
                                {entry.budget && (
                                    <div className="pt-6 mt-6 border-t border-stone-200 space-y-2">
                                        <p className="text-xs font-medium uppercase tracking-wider text-stone-500 mb-3">Funding</p>
                                        {entry.budget.map((line, i) => (
                                            <p key={i} className="text-sm text-stone-600 leading-relaxed">{typeof line === 'string' ? line : `${line.label} ${line.value}`}</p>
                                        ))}
                                    </div>
                                )}
                                {entry.funding && (
                                    <div className="pt-6 mt-6 border-t border-stone-200 space-y-2">
                                        <p className="text-xs font-medium uppercase tracking-wider text-stone-500 mb-3">{entry.fundingLabel || 'Funding'}</p>
                                        {entry.funding.map((line, i) => (
                                            <p key={i} className="text-sm text-stone-600 leading-relaxed">{line}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
