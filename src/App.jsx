import Navbar from "./components/NavBar";
import Section from "./components/Section";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects"
import Contact from "./sections/Contact";

import { Box, Container, Grid } from "@mui/material";

export default function App() {
  return (
    <>
      <Navbar />
      <Section id="home"><Hero /></Section>
      <Section id="about"><About /></Section>
      <Section id="projects"><Projects /></Section>
      <Section id="contact"><Contact /></Section>
    </>
  );
}
