import styles from "./ContentList.module.css";
import {BsFillPlayCircleFill} from "react-icons/bs";
import clsx from "clsx";
import CategoryMenu from "../CategoryMenu";
import { useState } from "react";

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const dateTransform = str => {
  const [month, year] = str.split('/').map(Number);
  const date = new Date(year, month - 1);
  const options = { year: 'numeric', month: 'short' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
  }
const getSortedCategories = videoData => {
  let arr = [];
  for (let i of videoData) {
    i.categories.map(j => {
      if (!arr.includes(j)) {
        arr.push(j);
      }
    });
  }
  return arr.toSorted();
}

const ContentList = ({listName, data}) => {
  const sortedCategories = getSortedCategories(data);
  const [videos, setVideos] = useState(data);
  const filterByCat = cat => {
    const fData = data.filter(i => i.categories.includes(cat));
    setVideos(fData);
  }
  return (
    <>
    <h2 className={styles["list-title"]}>{listName}</h2>
    {listName==="Categories" && <CategoryMenu data={data} cats={sortedCategories} filterByCat={filterByCat} setVideos={setVideos}/>}
    <section className={styles["content-list"]}>
      {videos.map((i, idx) => {
      return (
        <>
          <a href={i.videoUrl} className={styles["content-card"]} target="_blank">
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
