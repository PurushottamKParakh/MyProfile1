import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { 
  Briefcase, 
  GraduationCap, 
  BookOpen,
  Rocket,
  BookMarked,
  Library,
  FileText,
  Video,
  MessageSquare
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import BlogCard from './components/BlogCard';
import PaperCard from './components/PaperCard';
import { experiences, education, startups, teaching } from './data';
import { blogs, principles, papers, courses, talks, collaboration } from './data/content';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header />
        <Hero />
        
        <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <Section title="Experience" icon={<Briefcase />}>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </Section>

          <Section title="Blogs" icon={<BookMarked />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))}
            </div>
          </Section>

          <Section title="From the First Principles" icon={<Library />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))}
            </div>
          </Section>

          <Section title="Papershelf" icon={<FileText />}>
            <div className="grid grid-cols-1 gap-6">
              {papers.map((paper, index) => (
                <PaperCard key={index} {...paper} />
              ))}
            </div>
          </Section>

          <Section title="Courses" icon={<BookOpen />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{course.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{course.duration}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{course.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Talks" icon={<Video />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {talks.map((talk, index) => (
                <a 
                  key={index}
                  href={talk.link}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{talk.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{talk.event}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{talk.date}</p>
                </a>
              ))}
            </div>
          </Section>

          <Section title="Collaborate" icon={<MessageSquare />}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
              <p className="text-gray-700 dark:text-gray-300 mb-4">{collaboration.description}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{collaboration.availability}</p>
              <a 
                href={`mailto:${collaboration.email}`}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Get in touch
              </a>
            </div>
          </Section>

          <Section title="Education" icon={<GraduationCap />}>
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </Section>

          <Section title="Startups" icon={<Rocket />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {startups.map((startup, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{startup.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{startup.description}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Teaching" icon={<BookOpen />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teaching.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.institution}</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {item.subjects.map((subject, idx) => (
                      <li key={idx}>{subject}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;