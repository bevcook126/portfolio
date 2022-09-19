import { Link } from 'react-router-dom';

export default function NavBar() {


  return (
    <nav>
      <Link to='#about'>ABOUT</Link>
      &nbsp; | &nbsp;
      <Link to='#resume'>RESUME</Link>
      &nbsp; | &nbsp;
      <Link to='#projects'>PROJECTS</Link>
      &nbsp; | &nbsp;
      <Link to='#contact'>CONTACT</Link>
    </nav>
  );
}