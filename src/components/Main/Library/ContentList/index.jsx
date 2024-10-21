import styles from "./ContentList.module.css";
import {BsFillPlayCircleFill} from "react-icons/bs";
import clsx from "clsx";
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const dateTransform = str => {
  const [month, year] = str.split('/').map(Number);
  const date = new Date(year, month - 1);
  const options = { year: 'numeric', month: 'short' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
  }

const ContentList = ({listName, data}) => {
  const videos = data;
  return (
    <>
    <h2 className={styles["list-title"]}>{listName}</h2>
    <section className={styles["content-list"]}>
      {videos.map((i, idx) => {
      return (
        <>
          <a href={i.videoUrl} className={styles["content-card"]}>
            <img src={i.imageUrl} className={styles.banner} key={idx}/>
            <BsFillPlayCircleFill className={styles["play-icon"]}/>
            <h3 className={styles["content-title"]}>{i.title}</h3>
            <p className={styles["category-tag"]}>{i.categories.map(j => j == i.categories[i.categories.length - 1] ? capitalize(j) : `${capitalize(j)} • `)}</p>
            <p className={styles["season-tag"]}>{i.format === "show" ? `Season ${i.season}` : <br/>}</p>
            <p className={styles["release-date-tag"]}><em>Release Date: </em><strong>{dateTransform(i.releaseDate)}</strong></p>

          </a>
        </>


      );
    })}
    </section>
    </>

  )
}

export default ContentList;
