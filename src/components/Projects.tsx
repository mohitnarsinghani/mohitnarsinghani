import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';

function ProjectCard({ project, index }: { project: Project; index: number; key?: number }) {
  const isEven = index % 2 === 0;

  const rankBadgeColor =
    project.rank.includes('Valyrian Order')
      ? 'bg-secondary text-white shadow-[0_0_15px_rgba(225,29,72,0.6)]'
      : project.rank.includes('Maester Craft')
      ? 'bg-primary text-white shadow-[0_0_15px_rgba(255,87,34,0.6)]'
      : 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-card/40 backdrop-blur-md border border-foreground/10 rounded-lg overflow-hidden group hover:border-primary/50 transition-all duration-500 shadow-xl"
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Project Visual */}
        <div className="lg:w-1/2 relative h-56 sm:h-72 lg:h-auto min-h-[260px] overflow-hidden">
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale-0 lg:grayscale lg:group-hover:grayscale-0"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 z-20">
            <span className={`px-3 py-1 font-bold font-mono text-xs sm:text-sm rounded-sm uppercase tracking-wider ${rankBadgeColor}`}>
              {project.rank}
            </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-bold mb-2">
              Project #{project.id}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide mb-3 leading-snug font-realm group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <div className="text-foreground/75 mb-6 flex flex-col gap-3 text-xs sm:text-sm">
              <p className="leading-relaxed">{project.desc}</p>
              <p className="italic text-primary font-medium border-l-2 border-primary/50 pl-3">
                &ldquo;{project.highlightText}&rdquo;
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 bg-foreground/5 border border-foreground/15 rounded-sm text-foreground/80 hover:border-primary/40 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-foreground/10 mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest font-bold"
            >
              <Github className="w-4 h-4 text-primary" />
              <span>Source Code</span>
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest font-bold ml-auto"
            >
              <span>Project Intel</span>
              <ExternalLink className="w-4 h-4 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-36 relative bg-background overflow-hidden"
    >
      {/* Watermark PROJECTS */}
      <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none font-realm">
        <span className="text-[14rem] sm:text-[18rem] md:text-[22rem] font-black leading-none whitespace-nowrap block">
          PROJECTS
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-14 md:mb-20">
          <div className="text-primary font-mono text-xs sm:text-sm tracking-[0.3em] font-bold uppercase mb-2">
            Completed Operations
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-4 font-realm">
            Project <span className="text-primary">Archives</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full" />
        </div>

        {/* Projects List */}
        <div className="space-y-10 md:space-y-16 max-w-5xl mx-auto">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
