import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{  
  constructor(props) {
    super(props)
  }
  
  render(){
    const {imageData} = this.props;
    console.log(imageData)
    return(
      <>
        <div id="parent">{
          imageData.map(element => {
            return(
              <img key={element.id} src={element.img} id={element.id}></img>)
              console.log(element);
          })
        }
        </div>
      </>
     )
  }
}

