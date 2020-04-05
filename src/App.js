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
        {title : 'Mua bim bim', }
      ]
    }
    
    }
    
     onItemCliked(item) {  
        return () => {

          // this.setState({
          //   todoItems: this.state.todoItems.map(i => i !== item ? {...i} : {...i, isCompleted: !item.isCompleted})
          // })
        const isComplete = item.isComplete;
        const { todoItem } = this.state;
        const index = todoItem.indexOf(item);
        this.setState({
          todoItem: [
            ...todoItem.slice(0,index),
            {
              ...item,
              isComplete: !isComplete
            },
            ...todoItem.slice(index +1)    //immutibility
          ]
        })
        }  
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
                onClick={this.onItemCliked(item)} />                           
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




   