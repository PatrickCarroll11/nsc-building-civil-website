import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 flex items-center justify-between py-2.5 text-sm">
          <span className="font-semibold tracking-wide hidden sm:block">
            Your Trusted Building &amp; Civil Experts
          </span>
          <a
            href="tel:0868447778"
            className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors font-medium ml-auto sm:ml-0"
          >
            <Phone className="h-3.5 w-3.5" />
            086 844 7778
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-3 gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="NSC Building & Civil"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ to, label }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 ${
                    isActive
                      ? "text-accent"
                      : "text-foreground hover:text-accent hover:bg-muted/60"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Button
              asChild
              className="bg-accent text-accent-foreground px-7 py-2.5 font-bold rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-200 text-sm tracking-wide"
            >
              <a href="tel:0868447778">Get a Free Quote</a>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:text-accent hover:bg-muted/60 transition-all duration-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <nav className="container mx-auto px-6 py-5 flex flex-col gap-1.5">
            {navLinks.map(({ to, label }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-accent bg-accent/10 border-l-4 border-accent pl-3"
                      : "text-foreground hover:text-accent hover:bg-muted/60"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="pt-4 pb-1">
              <Button
                asChild
                className="w-full bg-accent text-accent-foreground font-bold rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-200 py-3"
              >
                <a href="tel:0868447778">
                  <Phone className="h-4 w-4 mr-2" />
                  086 844 7778
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}