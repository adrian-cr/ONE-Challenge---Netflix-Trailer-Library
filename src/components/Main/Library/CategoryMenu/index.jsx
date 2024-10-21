import styles from "./CategoryMenu.module.css";
import {BsFillPlayCircleFill} from "react-icons/bs";
import ContentList from "../ContentList";
import { useState } from "react";

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const CategoryMenu = ({cats, data, filterByCat, setVideos})=> {
  let categories = cats;
  const labelStyles = cat => `${styles["category-label"]} ${cat === actCat ? styles["category-label-active"] : ""}`;
  let [actCat, setActCat] = useState("All");

  return (
    <div className={styles["menu-container"]}>
      <div
        className={labelStyles("All")}
        onClick={() => {
          setVideos(data);
          setActCat("All");
        }}>
        All
      </div>
    {categories.map(i => {
      return (
        <div
          className={labelStyles(i)}
          onClick={() => {
            filterByCat(i);
            setActCat(i);
          }
        }>
          {capitalize(i)}
        </div>
      )}
      )}
    </div>
  )
}

export default CategoryMenu;
