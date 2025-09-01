// components/Navbar.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Works", id: "works" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => scrollTo("home")}>
          Agrata
        </h1>
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-muted-foreground hover:text-primary transition"
            >
              {link.label}
            </button>
          ))}
        </div>
        <Button
          className="md:hidden"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </Button>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollTo(link.id);
                  setIsOpen(false);
                }}
                className="text-muted-foreground hover:text-primary transition"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
