import React, { Component } from 'react';
import TodoItem from './component/TodoItem';
import './App.css';
import down from './img/down.svg'

class App extends Component {
  constructor(){
    super();   
    this.state ={
      newItem: '',
      todoItem: [
        {title : 'Di mua xang', isComplete : true},
        {title : 'Dat cho di dao', isComplete :false},
        {title : 'Mua bim bim', }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
    
     onItemCliked(item) {  
        return () => {

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

     onKeyUp(event){
       if(event.keyCode ===13){
       let text = event.target.value;
       if(!text){
         return;
       }
       text = text.trim();
       if(!text){
         return;
       }
       this.setState({
         newItem: '',
         todoItem: [
          {title: text, isComplete: false},
          ...this.state.todoItem
         ]
       })
     }
    }

    onChange(event){
      this.setState({
        newItem: event.target.value
      })
    }

    onClick(item){
      if( item === true){
        console.log(true);
      }
      else if (item === false){
        console.log(false);
      }
    }

    render() {
      const { todoItem, newItem } = this.state;
      if(todoItem.length){
      return(
        <div className="App">
          <div className='Header'>
            <img src={down} width={25} height={25}/>
            <input 
              value={newItem}
              onChange={this.onChange}
              type="text" 
              placeholder="Add a new item here "
              onKeyUp={this.onKeyUp} />
          </div>
         { todoItem.length && todoItem.map((item, index) => 
              <TodoItem 
                key={index} 
                item={item} 
                onClick={this.onItemCliked(item)} />                           
            )}
          <div className="footer">
            {/* <button onClick={this.onClick()}>All</button>
            <button onClick={this.onClick()}>Active</button>
            <button onClick={this.onClick()}>Complete</button> */}
            <button >Delete Complete</button>
          </div>
        </div>
      );
    }
    else{
      //<div className="App">Nothing here</div>
    }
  }
  }
  
  export default App;




   