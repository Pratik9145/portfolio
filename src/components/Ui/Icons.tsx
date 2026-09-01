import React from 'react';
import { 
  Terminal, Database, Cpu, Layers, Globe, Code, 
  GitBranch, ExternalLink, FileText, Mail, MapPin, 
  ChevronDown, Check, Menu, X, 
  Briefcase, GraduationCap, Award, Download, User, 
  FolderGit2, Server, Smartphone, Laptop, Search, 
  Settings, CheckCircle2, AlertCircle
} from 'lucide-react';

export const Github: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export const Linkedin: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-6 h-6" }) => {
  const normName = name.toLowerCase().replace(/\.js$/, '').replace(/\s+/g, '');

  switch (normName) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={`${className} fill-none stroke-[#61dafb]`} strokeWidth="1">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g>
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 448 512" className={`${className} fill-[#f7df1e]`} xmlns="http://www.w3.org/2000/svg">
          <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 76.1-74.6 76.1-39.6 0-66.2-22.1-77-44.2l38.6-22.8c7.4 15.6 18.9 26.3 36.5 26.3 18.8 0 29.8-9.7 29.8-31V218.4h46.7v163zm145 2.7c0 41.2-25 73.4-69.6 73.4-38 0-60.7-19.8-71.1-42.3l37.8-22.4c6.7 11.6 17.5 20.1 31.8 20.1 16.5 0 24.3-7.4 24.3-19.1 0-12.7-9.7-17.5-31.8-26.8-27.7-11.7-61-26.8-61-71.1 0-38.3 29.8-68.2 68.6-68.2 34 0 54.9 14.3 64.9 35.6l-36.2 21.4c-6-11.4-14.8-17.8-27.1-17.8-13.1 0-18.9 6.4-18.9 14.1 0 9.7 7.8 13.8 28.5 22.8 32.5 13.7 61.4 27.7 61.4 72.1z"/>
        </svg>
      );
    case 'html5':
    case 'html':
      return (
        <svg viewBox="0 0 512 512" className={`${className} fill-[#e34f26]`} xmlns="http://www.w3.org/2000/svg">
          <path d="M64 32l35 403.4 157 44.6 157-44.6 35-403.4h-384zm272.7 131.7l-7.3 80h-121.2l5.3 54h110.6l-10.4 108-83.7 23.3-83.7-23.3-5.3-60h41.3l2.7 28 45 12.3 45-12.3 5.3-54h-151.7l-16-166.7h217.4v.7z"/>
        </svg>
      );
    case 'css3':
    case 'css':
      return (
        <svg viewBox="0 0 512 512" className={`${className} fill-[#1572b6]`} xmlns="http://www.w3.org/2000/svg">
          <path d="M64 32l35 403.4 157 44.6 157-44.6 35-403.4h-384zm272.7 131.7l-15.6 166-95.1 26.3-95.1-26.3-6.3-68h41.3l3.3 35.7 50.5 13.7 50.5-13.7 7.3-80.7h-150l-5.3-54h160.7l5.3-54h-171.3l-5.3-54h229.3v.7z"/>
        </svg>
      );
    case 'tailwindcss':
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#38bdf8]`} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.036c-2.433 0-3.9 1.218-4.4 3.657 1.217-.609 2.433-.304 3.65.914 1.826 1.828 3.651 2.437 5.477.609 1.218-1.218 1.95-3.045 2.193-5.48-1.218 1.218-2.68 1.522-4.385.304-1.218-.913-2.192-1.996-2.535-2.004zm-8.4 5.48c-2.434 0-3.902 1.218-4.4 3.657 1.217-.609 2.434-.304 3.651.914 1.826 1.828 3.65 2.437 5.477.609 1.218-1.218 1.95-3.045 2.192-5.48-1.217 1.218-2.679 1.522-4.384.304-1.218-.913-2.192-1.996-2.536-2.004z"/>
        </svg>
      );
    case 'nodejs':
    case 'node':
      return (
        <svg viewBox="0 0 448 512" className={`${className} fill-[#339933]`} xmlns="http://www.w3.org/2000/svg">
          <path d="M224 0c-15.3 0-30.6 4-43.9 12L43.9 92C16.9 108 0 137.3 0 169.3v173.3c0 32 16.9 61.3 43.9 77.3l136.1 80c13.3 8 28.6 12 43.9 12s30.6-4 43.9-12l136.1-80c27-16 43.9-45.3 43.9-77.3V169.3c0-32-16.9-61.3-43.9-77.3L267.9 12c-13.3-8-28.6-12-43.9-12zM120.2 160.5l45.2 26v127.3c0 14.5-7.8 28-20.4 35.3l-24.8 14.3c-12.6 7.3-28.4 7.3-41 0l-24.8-14.3c-12.6-7.3-20.4-20.8-20.4-35.3V212.5c0-14.5 7.8-28 20.4-35.3l24.8-14.3c6.3-3.7 13.4-5.5 20.5-5.5 7.1.1 14.1 1.9 20.5 5.6zm207.6 127.3V212.5c0-14.5-7.8-28-20.4-35.3l-24.8-14.3c-12.6-7.3-28.4-7.3-41 0l-24.8 14.3c-12.6 7.3-20.4 20.8-20.4 35.3v101.3c0 14.5 7.8 28 20.4 35.3l24.8 14.3c12.6 7.3 28.4 7.3 41 0l24.8-14.3c12.6-7.3 20.4-20.8 20.4-35.3z"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 320 512" className={`${className} fill-[#47A248]`} xmlns="http://www.w3.org/2000/svg">
          <path d="M190.5 0c-4.4 0-8.8 1.4-12.5 4-53.1 36.8-124 140.2-124 250.2 0 83.1 53 151.7 122.9 176.7V500c0 6.6 5.4 12 12 12s12-5.4 12-12v-69.1c69.9-25 122.9-93.6 122.9-176.7 0-110-70.9-213.4-124-250.2-3.7-2.6-8.1-4-12.5-4zm-11.6 30.3c2.7-1.3 5.7-1.3 8.4 0 33.7 16.7 78.7 82.5 94.7 169.7H178.9V30.3z"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#00758F]`} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#F05032]`} xmlns="http://www.w3.org/2000/svg">
          <path d="M23.27 11.23L12.77.73a1.5 1.5 0 0 0-2.12 0L8.76 2.62l3.41 3.41c.36-.1.78-.02 1.09.29.32.32.4.78.25 1.16l3.16 3.16c.38-.15.84-.07 1.16.25a1.123 1.123 0 0 1 0 1.59 1.13 1.13 0 0 1-1.59 0c-.32-.32-.4-.78-.25-1.16L12.82 8.16c-.15.38-.07.84.25 1.16.31.31.73.39 1.09.29L10.75 13c-.1.36-.02.78.29 1.09.32.32.78.4 1.16.25l3.16 3.16c-.15.38-.07.84.25 1.16a1.123 1.123 0 0 0 1.59 0 1.13 1.13 0 0 0 0-1.59c-.32-.32-.78-.4-1.16-.25l-3.16-3.16c.15-.38.07-.84-.25-1.16-.31-.31-.73-.39-1.09-.29l-2.07-2.07-5.5 5.5c-.59.59-.59 1.54 0 2.12l10.5 10.5c.59.59 1.54.59 2.12 0l10.5-10.5c.58-.59.58-1.54 0-2.12z"/>
        </svg>
      );
    case 'github':
      return <Github className={className} />;
    case 'bootstrap':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#7952b3]`} xmlns="http://www.w3.org/2000/svg">
          <path d="M23.186 8.35a6.002 6.002 0 0 0-2.316-2.316l-.014-.007C19.7 5.372 17.5 5 12 5H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8c5.5 0 7.7-.372 8.856-1.027a6.002 6.002 0 0 0 2.316-2.316l.014-.007C23.828 14.5 24 12.3 24 12c0-.3-.172-2.5-.814-3.65zm-7.686 5.85c-.6.6-1.5.8-2.7.8H9.5v-2.2h3.3c1.2 0 2.1.2 2.7.8.6.6.9 1.3.9 2.2 0 .9-.3 1.6-.9 2.2zm0-4.6c-.6.6-1.4.8-2.5.8H9.5V8.2h3c1.1 0 1.9.2 2.5.8.6.6.9 1.3.9 2.1 0 .8-.3 1.5-.9 2.1z"/>
        </svg>
      );
    case 'zustand':
      return <Layers className={`${className} text-[#ef4444]`} />;
    case 'formik':
      return <FileText className={`${className} text-[#ff6b6b]`} />;
    case 'tanstackquery':
    case 'reactquery':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#ff4154]`} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
        </svg>
      );
    case 'reactrouter':
      return <Globe className={`${className} text-[#f44250]`} />;
    case 'axios':
      return <Code className={`${className} text-[#5a29e4]`} />;
    case 'express':
    case 'expressjs':
      return <Terminal className={`${className} text-gray-400`} />;
    case 'restapis':
    case 'restapi':
      return <Cpu className={`${className} text-[#06b6d4]`} />;
    case 'postman':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#FF6C37]`} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.66 14.16c-.57.57-1.49.57-2.06 0L12 10.56l-3.6 3.6c-.57.57-1.49.57-2.06 0a1.46 1.46 0 0 1 0-2.06l3.6-3.6-3.6-3.6a1.46 1.46 0 0 1 0-2.06c.57-.57 1.49-.57 2.06 0l3.6 3.6 3.6-3.6c.57-.57 1.49-.57 2.06 0a1.46 1.46 0 0 1 0 2.06l-3.6 3.6 3.6 3.6a1.46 1.46 0 0 1 0 2.06z"/>
        </svg>
      );
    case 'vscode':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#007acc]`} xmlns="http://www.w3.org/2000/svg">
          <path d="M23.982 5.23a.896.896 0 0 0-.367-.53L19.302.924a.896.896 0 0 0-1.127.108L10.07 8.35 6.035 5.31a.897.897 0 0 0-1.128.107L.375 9.471a.897.897 0 0 0-.107 1.128l3.684 4.887-3.684 4.888a.897.897 0 0 0 .107 1.127l4.532 4.054c.328.293.818.251 1.128-.108l4.035-3.039 8.105 7.318c.328.296.83.25 1.128-.107l4.312-3.777a.897.897 0 0 0 .367-.53V5.23zm-17.7 7.77L2.435 9.87l3.847-3.13 3.847 3.13-3.847 3.13zm15.7 6.13L13.832 12l8.15-7.13v14.26z"/>
        </svg>
      );
    case 'chromedevtools':
      return <Laptop className={`${className} text-blue-400`} />;
    default:
      return <Code className={`${className} text-[#3b82f6]`} />;
  }
};

export const UIVal = {
  Terminal, Database, Cpu, Layers, Globe, Code, 
  GitBranch, ExternalLink, FileText, Mail, MapPin, 
  Github, Linkedin, ChevronDown, Check, Menu, X, 
  Briefcase, GraduationCap, Award, Download, User, 
  FolderGit2, Server, Smartphone, Laptop, Search, 
  Settings, CheckCircle2, AlertCircle
};
