import React, { Component } from 'react';
import "./App.css";
import { FaTwitter, FaIcons } from "react-icons/fa";
class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      data:null,
      currentquote:'',
      currentauthor:'',
      randomIndex:''

    };
   // this.ask = this.ask.bind(this);
    this.getRandomQuote = this.getQuote.bind(this);
  }
  
  /*ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        
      });
    }
  }*/
  componentWillMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => response.json())
      .then(data => this.setState({ data }, this.getQuote(data)))
  }

  getQuote(data)
  {
    const {quotes}=data;
    const quotesdata=Math.floor(Math.random()*quotes.length);
   
    this.setState({
      currentquote: quotes[quotesdata].quote,
      currentauthor:quotes[quotesdata].author,
      randomIndex: Math.floor(Math.random() * 12)
    });
    
  }

  render() {
    
    const colors = ['#7FFF00', '#00FFFF', '#8FBC8F', '#FF1493', '#FFD700', '#808080', '#ADFF2F', '#4B0082', "#800000", "#FF4500", "#FF6347", "#A0522D"];
   const { data, currentquote, currentauthor } = this.state;
    const randomcolor = colors[this.state.randomIndex];
    return (
      <div id="wrapper" className="app" style={{ backgroundColor: randomcolor }} >
         <div id="quote-box" >
    <div className="quote-text" style={{ color: randomcolor }}>
    <FaIcons icon="quote-left"  pull="left"/>
    <span id="text">{currentquote}</span>
    </div>
    <div className="quote-author" style={{ color: randomcolor }}>
      - {currentauthor}<span id="author"></span>
      
    </div>
    <div className="buttons" style={{ backgroundColor: randomcolor }}>
      
   <a className="button"
    id="tweet-quote" 
    href={`https://twitter.com/intent/tweet?text=${currentquote} - ${currentauthor}`}
    title="Tweet this quote!" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ backgroundColor: randomcolor }}>
       <FaTwitter /> 
      </a>

        
      <button className="button" id="new-quote" onClick={()=>this.getQuote(data)} style={{ backgroundColor: randomcolor }}>New quote</button>
    </div>
  </div>

      </div>
    );
  }
}

export default App;


