import styles from "./Header.module.css";
const Header = ({img}) => {
  return(
    <header>
      <img src={img}/>
      <h2>TRAILERS</h2>
    </header>
  )
}

export default Header;
