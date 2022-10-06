import About from '../../components/About/About';
import Resume from '../../components/Resume/Resume';
import Projects from '../../components/Projects/Projects';
import './App.css';

export default function App() {

  return (
    <main className="App">
      {
        <>
          <About/>
          <Resume/>
          <Projects/>
        </>
      }
    </main>
  );
}
