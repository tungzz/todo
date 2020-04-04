import React, { Component } from 'react';
import TodoItem from './component/TodoItem';
import './App.css';

class App extends Component {
  constructor(){
    super();   
    this.state ={
      todoItem: [
        {title : 'Di mua xang', isComplete : true},
        {title : 'Dat cho di dao', isComplete :false},
        {title : 'Mua bim bim', isComplete: false}
      ]
    }
    this.onItemCliked = this.onItemCliked.bind(this);
    }
    
     onItemCliked() {  
       console.log('Item click');  
     }
    
    render() {
      this.onItemCliked = this.onItemCliked.bind(this);
      const { todoItem } = this.state;
      if(todoItem.length){
      return(
        <div className="App">
         { todoItem.length && todoItem.map((item, index) => 
              <TodoItem 
                key={index} 
                item={item} 
                onClick={this.onItemCliked} />                           
            )}
        </div>
      );
    }
    else{
      //<div className="App">Nothing here</div>
    }
  }
  }
  
  export default App;




    // return (event) => {
      //   const isComplete = this.isComplete;
      //   const { todoItem } = this.state;
      //   const index = todoItem.indexOf(item);
      //   this.setState({
      //     todoItem: [
      //       ...todoItem.slice(0,index),
      //       {
      //         ...item,
      //         isComplete: !isComplete
      //       },
      //       ...todoItem.slice(index +1)    //immutibility
      //     ]
      //   })
      // }  