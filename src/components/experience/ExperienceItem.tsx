import { ExperiencePositionItem } from './ExperiencePositionItem';
import type { Experience } from './types';
import Image from 'next/image';

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div id={`experience-${experience.id}`} className="scroll-mt-14 space-y-4 p-4">
      <div className="flex items-center gap-3">
        {/* Company Logo Icon Container */}
        <div className="[&_svg]:text-muted-foreground flex size-6 shrink-0 items-center justify-center select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5">
          {experience.companyLogo ? (
            <Image
              alt={`${experience.companyName} logo`}
              aria-hidden="true"
              width={24}
              height={24}
              className="rounded-full"
              style={{ color: 'transparent' }}
              src={experience.companyLogo}
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        {/* Company Name */}
        <h3 className="text-lg leading-snug font-semibold">
          {experience.companyWebsite ? (
            <a className="link" href={experience.companyWebsite} target="_blank" rel="noopener">
              {experience.companyName}
            </a>
          ) : (
            experience.companyName
          )}
        </h3>

        {/* Current Employer Label */}
        {experience.isCurrentEmployer && (
          <span className="text-sm font-medium text-muted-foreground ml-1" aria-label="Current Employer">
            (Current)
          </span>
        )}
      </div>

      {/* Timeline connector track containing positions */}
      <div className="relative space-y-4">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}
