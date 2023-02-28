import './App.css';
import Gallery from './components/Gallery';
import Layout from './components/Layout';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <div className="pb-10">
        <Banner></Banner>
        <AboutMe id='abotMe'></AboutMe>

        <Gallery></Gallery>
        <Projects id='projects'></Projects>
        <Contact id='contact'></Contact>
      </div>
    </Layout>
  );
}

export default App;
