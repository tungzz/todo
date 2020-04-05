import React,{ Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import checkImg from '../img/uncheck.svg';
import checkCompleteImg from '../img/check.svg'; 

class TodoItem extends Component {

render() {

    const { item,onClick } = this.props;
    let url = checkImg;
    if (item.isComplete){
        url = checkCompleteImg;
    }

    return (
        
        <div onClick={onClick} className={classNames('TodoItem', 
        { 'TodoItem-complete': item.isComplete }
        )}>
            <img src={url} width={32} />
            <p>{this.props.item.title}</p>
        </div>
    );

    }
}

export default TodoItem;
