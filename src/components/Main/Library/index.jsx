import styles from "./Library.module.css"

import ContentList from "./ContentList"


const Library = ({data}) => {
  return (
    <>

      <section className={styles.library}>
        <div className={styles.overlay}/>
        <ContentList listName="Categories" data={data}/>
        <ContentList listName="My Favorites" data={data}/>
        <ContentList listName="Latest Releases" data={data}/>
        <ContentList listName="Upcoming Releases" data={data}/>
      </section>

    </>
  )
}

export default Library
