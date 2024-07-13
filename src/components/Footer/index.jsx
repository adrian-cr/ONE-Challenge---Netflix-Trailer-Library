import styles from "./Footer.module.css"
const Footer = ({img}) => {
  return (
    <footer>
      <div className={styles.logo}>
        <img src={img} />
        <h2>TRAILERS</h2>
      </div>

      <p>A React website developed by Adrián Camacho</p>
    </footer>
  )
}

export default Footer;
