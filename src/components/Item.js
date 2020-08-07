import React from 'react';
import './Item.css';

class Item extends React.Component{
    constructor(props){
        super(props);
    }

    onCompletion = () => this.props.onCompletion(this.props.id);

    delete = () => this.props.onDelete(this.props.id);

    render(){
        return (
            <>
                <div className='todo-item'>
                    <input type="checkbox" checked={this.props.completed} onChange={this.onCompletion}/>
                    <span className="todo-title" style={{textDecoration: this.props.completed ?  'line-through' : null}}>{this.props.title}</span>
                    <button className="del-btn" onClick={this.delete}>X</button>
                </div>
            </>
        );
    }
}

export default Item;