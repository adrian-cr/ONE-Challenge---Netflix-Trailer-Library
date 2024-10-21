import styles from "./Library.module.css"
import ContentList from "./ContentList"
import CategoryMenu from "./CategoryMenu";
import { useState } from "react";

const fetchDate = str => {
  const [month, year] = str.split('/').map(Number);
  return [month, year];
  }
const getDateTime = arr => {
  return new Date(arr[1], arr[0], 0, 0, 0, 0, 0);
}
const sortData = (unsortedData, latest=true)  => {
  let filteredData;
  let sortedData;
  if (latest) {
    filteredData = unsortedData.filter(i => Date.now() - getDateTime(fetchDate(i.releaseDate)) > 0);
    sortedData = filteredData.toSorted((a, b) => getDateTime(fetchDate(b.releaseDate)) - getDateTime(fetchDate(a.releaseDate)));
  } else {
    filteredData = unsortedData.filter(i => getDateTime(fetchDate(i.releaseDate)) - Date.now() > 0);
    sortedData = filteredData.toSorted((a, b) => getDateTime(fetchDate(a.releaseDate)) - getDateTime(fetchDate(b.releaseDate)));
  }
  return sortedData;
}

const Library = ({data}) => {
  const dataLatest = sortData(data);
  const dataNext = sortData(data, false);
  return (
    <>
      <section className={styles.library}>
        <div className={styles.overlay}></div>
        <ContentList listName="Categories" data={data}/>
        <ContentList listName="Latest Releases" data={dataLatest}/>
        <ContentList listName="Upcoming Releases" data={dataNext}/>
      </section>
    </>
  )
}

export default Library
