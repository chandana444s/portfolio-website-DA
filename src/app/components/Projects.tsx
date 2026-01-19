import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

type Project = {
  title: string;
  description?: string;
  descriptionPoints?: string[];
  image: string;
  tags: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: 'Pizza Sales Analysis',
    descriptionPoints: [
      'Analyzed pizza sales data using SQL to calculate key KPIs and uncover daily and hourly order trends.',
      'Evaluated sales performance by pizza category and size to identify top and low-performing products.',
      'Built an interactive Excel dashboard to visualize insights and support data-driven decision-making.'
    ],
    image: '/images/pizza-sales.jpg',
    tags: ['SQL', 'Excel', 'Data Analysis'],
    link: 'https://github.com/chandana444s/Pizza-Sales-Analysis-Dashboard'
  },
  {
    title: 'HR Analytics Dashboard',
    descriptionPoints: [
      'Analyzed employee data to track key HR KPIs such as attrition rate, employee count, average age, and job satisfaction.',
      'Identified attrition trends across departments, job roles, age groups, and gender to highlight high-risk areas.',
      'Built an interactive Power BI dashboard to support data-driven HR decisions and workforce planning.'
    ],
    image: '/images/hranalysiscoverpage.jpg',
    tags: ['Power BI', 'DAX', 'HR Analytics'],
    link: 'https://github.com/chandana444s/HR-Analytics-PowerBI'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Featured Projects</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing data analysis and development skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-slate-900 border-slate-800 hover:shadow-blue-500/20 hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>

                  {project.description && (
                    <CardDescription className="text-slate-400">
                      {project.description}
                    </CardDescription>
                  )}
                </CardHeader>

                <CardContent>
                  {project.descriptionPoints && (
                    <ul className="list-disc list-inside text-slate-300 text-sm mb-4 space-y-1">
                      {project.descriptionPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-slate-800 text-slate-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-slate-700 text-white hover:bg-slate-800"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
