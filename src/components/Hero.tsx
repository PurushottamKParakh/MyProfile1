import React from 'react';
import { Youtube, Twitter, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hey, I am Puru</h1>
          <p className="text-2xl font-medium text-pink-600 mb-6">
            tinkerer, educator, and entrepreneur
          </p>
          <div className="prose prose-lg text-gray-600 mb-8">
            <p>
              I am a software engineer and an engineering leader passionate about System Architecture, 
              Distributed Systems, and High-Performance Computing. With experience at VMware, Microsoft, 
              Google, and other tech giants, I've contributed to various large-scale systems and 
              performance optimization projects.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://youtube.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Youtube size={20} />
              <span>YouTube (117k)</span>
            </a>
            <a
              href="https://twitter.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Twitter size={20} />
              <span>Twitter (59k)</span>
            </a>
            <a
              href="https://linkedin.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Linkedin size={20} />
              <span>LinkedIn (180k)</span>
            </a>
            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Github size={20} />
              <span>GitHub (3k)</span>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src="/profile.jpg"
              alt="Purushottam Dewangan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;