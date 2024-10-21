import styles from "./Highlights.module.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsFillPlayCircleFill} from "react-icons/bs";
import { useState } from "react";
import clsx from "clsx";

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const Highlights = ({data}) => {
  const [slide, setSlide] = useState(0);
  const highlights = data.filter(i => i.highlight)

  const prevSlide = () => setSlide(slide === 0 ? highlights.length - 1 : slide - 1);
  const nextSlide = () => setSlide(slide === highlights.length - 1 ? 0 : slide + 1);

  return (
    <section className={styles.highlights}>
      <BsArrowLeftCircleFill className={`${styles.arrow} ${styles["arrow-left"]}`} onClick={prevSlide}/>
      {highlights.map((i, idx) => {
      return (
        <div
        className={clsx({
          [styles.slide]: slide === idx,
          [styles["slide-hidden"]]: slide !== idx,
        })}
        key={idx}
        style={{background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${i.highlightImageUrl})`}}>
          <h2>{i.title}</h2>
          <p className={styles["info-tag"]}>{i.season && `Season ${i.season} | `}{i.categories.map(j => j == i.categories[i.categories.length - 1] ? capitalize(j) : `${capitalize(j)} • `)}</p>
          <p className={styles.description}>{i.description}</p>
          <a href={i.videoUrl}><BsFillPlayCircleFill/> Watch Trailer</a>
        </div>
      );
    })}
    <BsArrowRightCircleFill className={`${styles.arrow} ${styles["arrow-right"]}`}  onClick={nextSlide}/>
    <span className={styles["nav-dot-box"]}>
      {highlights.map((_, idx) => {
        return <button
        key={idx}
        onClick={() => setSlide(idx)}
        className={clsx({
          [styles["nav-dot"]]:true,
          [styles["nav-dot-active"]]: slide === idx
        })}></button>
      })
      }
    </span>
    </section>
  )
}

export default Highlights
