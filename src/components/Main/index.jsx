//Styles
import styles from "./Main.module.css"

//Data
import db from "../../data/dummy.json";

//Components
import Highlights from "./Highlights";
import Library from "./Library";


const videoData = db.data;

const Main = ({menu=false}) => {
  return (
    <>
    {/*menu && <Navigation/>*/}
    <main>
      <Highlights data={videoData}/>
      <Library data={videoData}/>
    </main>
    </>

  );
}

export default Main;
