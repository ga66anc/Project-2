import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer>
      &copy; Cocktail Party
      <nav>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/cookie-policy">Cookie Policy</Link>
      </nav>
    </footer>
  )
}