import { motion } from "framer-motion";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section className="py-20 px-4 bg-slate-950 text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          About Me
        </motion.h2>

        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
          <motion.p variants={item}>
            I’m <span className="text-white font-medium">Chandana S</span>, a
            postgraduate in Computer Applications with a strong interest in
            data analysis, operations, and process optimization. I enjoy working
            with structured data to support accurate reporting and informed
            business decisions.
          </motion.p>

          <motion.p variants={item}>
            I have built a solid foundation in Microsoft Excel, SQL, data
            validation, and dashboard reporting, along with clear documentation.
          </motion.p>

          <motion.p
            variants={item}
            className="text-white font-medium"
          >
            Key areas I’ve worked on:
          </motion.p>

          <motion.ul
            variants={container}
            className="list-disc list-inside space-y-2"
          >
            {[
              "Data validation and analysis using Excel and SQL",
              "KPI tracking through structured dashboards and reports",
              "Workflow, requirement, and process documentation",
            ].map((point, i) => (
              <motion.li key={i} variants={item}>
                {point}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p variants={item}>
            I gained hands-on experience as an{" "}
            <span className="text-white">AI & Automation Intern</span> at
            Actionfi Technologies, where I worked on an AI-powered chatbot,
            developed AI chatbot, performed data preprocessing, and
            maintained technical documentation.
          </motion.p>

          <motion.p variants={item}>
            My projects include a{" "}
            <span className="text-white font-medium">
              Pizza Sales Analysis
            </span>{" "}
            and an{" "}
            <span className="text-white font-medium">
              HR Analytics Dashboard
            </span>
            , where I focused on cleaning data, analyzing trends, and presenting
            insights through dashboards to support decision-making.
          </motion.p>

          <motion.p variants={item}>
            I enjoy roles that value problem-solving, attention to detail, and
            cross-team collaboration, especially in environments where accuracy
            and clarity matter.
          </motion.p>

          <motion.p variants={item}>
            I’m always eager to learn, improve my skills, and contribute
            meaningfully to data-driven teams.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
