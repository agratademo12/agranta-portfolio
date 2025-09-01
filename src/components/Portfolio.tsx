import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from "@/components/Navbar";
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Users, 
  Heart,
  MapPin,
  Calendar,
  Send
} from 'lucide-react';
import agrataPhoto from '@/assets/Screenshot 2024-12-22 201133.jpg';

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const skills = [
    { name: 'HTML', icon: Code },
    { name: 'CSS', icon: Palette },
    { name: 'React.js', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'Excel', icon: Code },
    { name: 'PowerPoint', icon: Code },
    { name: 'Word', icon: Code },
    { name: 'Canva', icon: Palette }
  ];

  const projects = [
    {
      title: 'Fair Split',
      description: 'A React-based application for splitting expenses among friends with real-time calculations for my 4th semester final project.',
      tech: ['React', 'JavaScript', 'CSS'],
      github: '#',
      live: '#'
    },
    {
      title: 'Hotel Website Design',
      description: 'hotel website with modern UI/UX design using figma and react using its front end development. it just contain the lanidng page for learning purpose.',
      tech: ['Figma', 'React', 'CSS', 'JavaScript'],
      github: 'https://github.com/agrata051/Bholenath-Hotel',
      live: 'https://bholenath-hotel.vercel.app/'
    },
    {
      title: 'Photography Portfolio',
      description: 'A portfolio website i made for showcasing my photography work just for learning.',
      tech: [ 'React', 'CSS'],
      github: 'https://github.com/agrata051/portfolio-photography',
      live: 'https://portfolio-vert-five-20.vercel.app/'
    },
    {
      title: 'This Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills with modern design principles.',
      tech: ['React', 'Tailwind', 'Javascript'],
      github: '#',
      live: '#'
    }
    ,
    {
      title: 'BDH LAB',
      description: 'A real world frontend based website for Builders and Devlopers Hand located in chyasal,Lalitpur.',
      tech: ['React', 'Tailwind', 'JavaScript'],
      github: '#',
      live: '#'
    }
  ];
   const graphics = [
    {
      title: "Hotel Design (Figma)",
      description: "UI/UX design for hotel landing page using Figma.",
    },
    {
      title: "Canva Posters",
      description: "Designed creative posters and graphics using Canva.",
    },
  ];

  const experiences = [
    
    {
      title: 'React Devloper -Internship ',
      organization: 'Sarbatra Inc',
      period: 'April/2025 - june/2025',
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Learned React.js from core by working on real-world projects and cloning multiple websites.</li>
          <li>Acquired GitHub skills for version control and collaborative development.</li>
          <li>Designed a hotel website in Figma and developed it using React.js.</li>
          <li>Worked on various projects involving front-end development and UI/UX design.</li>
          <li>Gained confidence and communication skills through field activities, including photoshoots and video shoots for client projects.</li>
          <li>Participated in on-site tasks, enhancing teamwork and creative problem-solving abilities.</li>
        </ul>
      )
    },
    
    {
      title: 'Model United Nations ',
      organization: 'Various MUN Conferences',
      period: '2021 - 2022',
      description: 'Participated in multiple MUN conferences representing different countries and volunteering the Mun team.'
    },
    {
      title: 'Nepal Red Cross Volunteer',
      organization: 'Nepal Red Cross Society',
      period: 'March/2023 - july/2023',
      description: 'Community service and disaster response activities'
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
 return (
    <div className="min-h-screen bg-background">
      <Navbar />
 
  
      {/* Hero Section */}
      <section  id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
              <span className="text-gradient">Agrata Humagain</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 fade-in fade-in-delay-1">
              IT Student & Aspiring Frontend Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto fade-in fade-in-delay-2">
              Passionate about React, design, and creating user-friendly experiences.
            </p>
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg rounded-xl fade-in fade-in-delay-3"
            >
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section  id="about" className="py-20 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 fade-in">
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm an IT student with a passion for frontend development and creating 
                  meaningful digital experiences. My journey in technology is driven by 
                  curiosity and a desire to solve real-world problems through code.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Beyond academics, I'm actively involved in community service through 
                  Nepal Red Cross, which have shaped my leadership and communication skills.
                </p>
                <p className="text-lg text-muted-foreground">
                  I believe in the power of technology to make a positive impact and 
                  am constantly learning new skills to stay at the forefront of web development.
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center fade-in fade-in-delay-1">
                <div className="relative">
                  <img
                    src={agrataPhoto}
                    alt="Agrata Humagain"
                    className="w-64 h-64 rounded-full object-cover shadow-portfolio-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section  id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 fade-in">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-in fade-in-delay-1">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="skill-badge group cursor-pointer">
                    <Icon className="w-5 h-5 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Works (Graphics + Projects) */}
      <section id="works" className="py-20 section-gradient">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12">My Works</h2>

          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="flex justify-center mb-8">
              <TabsTrigger value="graphics">Graphics</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>

            {/* Graphics */}
            <TabsContent value="graphics" className="grid md:grid-cols-2 gap-8">
              {graphics.map((item) => (
                <Card key={item.title} className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </TabsContent>

            {/* Projects */}
            <TabsContent value="projects" className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.title} className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="default" size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section  id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 fade-in">Experience & Volunteering</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={exp.title} className={`card-portfolio fade-in fade-in-delay-${index + 1}`}>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-4 text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.organization}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section  id="contact" className="py-20 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 fade-in">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="fade-in">
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always interested in discussing new opportunities, 
                  projects,
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>agratahumagain111@gmail.com</span>
                     <span>+977-9762420429</span>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://www.linkedin.com/in/agrata-humagain-05472433a/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://github.com/agrata051" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
             
               
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">
            </p>
            <p className="text-muted-foreground flex items-center justify-center gap-1">
              Made by Agrata Humagain
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;