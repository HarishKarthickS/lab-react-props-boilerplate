import './App.css';
import elephant from "./images/elephant.jpeg";
import AppClass from "./AppClass"

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  const image = imageData();
  return(
    <>
      <AppClass imageData={image}/>
    </>
   )
}
export default App
