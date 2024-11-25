import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Works from '../Works/Works';
import Myskills from '../Skills/MySkills';
import Layout from '../../Layout';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Works />} />
          <Route path="skills" element={<Myskills />} />
          <Route path="*" element={<h3>Not Found</h3>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
