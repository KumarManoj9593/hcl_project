import "./App.css";
import storyPayload from "./../src/BookNow/influencer.json";
import { Component } from "react";

class App extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         indexId:1,
         currentStory : {}
      }
    }
    
   componentDidMount()
   {
     let currentData = storyPayload.filter(currentData=>currentData.id===this.state.indexId)
     this.setState({currentStory:currentData[0]})
   }

  render() {
    let data =  this.state.currentStory;

    let imageStyle = {
      backgroundImage:`url(${data.image})`,
      backgroundSize:"contain",
      backgroundRepeat:"no-repeat",
      // height: "100vh",
      backgroundPosition:"center"

    }

    let handleClick = (e) =>
    {
      console.log(storyPayload.length,this.state.indexId)
      let targetId = e.target.id
      let currentIndex = 0;

        if(targetId==="left" && this.state.indexId !==1)
        {
          currentIndex = this.state.indexId-1;
        }
        else if(targetId==="right" && this.state.indexId !== storyPayload.length)
        {
          currentIndex = this.state.indexId+1;
        }

        console.log(this.state.currentStory)
        if(currentIndex)
        {
          let currentData = storyPayload.filter(currentData=>currentData.id===currentIndex)
          this.setState({currentStory:currentData[0],indexId:currentIndex})
        }
        else{
          alert("No data Available")
        }

     
    }
    return (
      
      <div className="App">
         <span className="title" >Storybook</span>
        <div style ={imageStyle} >
        <div className="story-container">
          <div className="button-container">
          <div className = "arrow prev" id="left" onClick = {handleClick}></div>
          <div className="arrow next" id="right" onClick = {handleClick}></div>
          </div>
          <div className="name">
          <label>{data.name}</label>
          </div>
          <div className="known-for">
          <label>{data.knownFor}</label>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          </div>
      </div>
      </div>
    </div>
    );
  }
}

export default App;
