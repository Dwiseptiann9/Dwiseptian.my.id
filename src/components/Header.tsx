import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-900 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
            ADR
          </Link>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button
              className="md:hidden text-gray-800 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="hidden md:flex space-x-8">
              <NavLink to="/" active={isActive('/')}>Home</NavLink>
              <NavLink to="/resume" active={isActive('/resume')}>Resume</NavLink>
              <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" active={isActive('/')} onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/resume" active={isActive('/resume')} onClick={() => setIsMenuOpen(false)}>
                Resume
              </MobileNavLink>
              <MobileNavLink to="/contact" active={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

function NavLink({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={to}
        className={`${
          active
            ? 'text-blue-600 dark:text-blue-400 font-semibold'
            : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
        } transition-colors duration-200`}
      >
        {children}
      </Link>
    </motion.div>
  );
}

function MobileNavLink({ to, children, active, onClick }: { to: string; children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${
        active
          ? 'text-blue-600 dark:text-blue-400 font-semibold'
          : 'text-gray-600 dark:text-gray-300'
      } block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200`}
    >
      {children}
    </Link>
  );
}