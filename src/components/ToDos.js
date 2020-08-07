import React from 'react';
import Item from './Item';
import uuid from 'react-uuid';
import './ToDos.css';

class ToDos extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            search: '',
            items: [
                {title: "Estudar React", completed: false, id: uuid()},
                {title: "Fazer compras", completed: false, id: uuid()},
                {title: "Passear com o cachorro", completed: true, id: uuid()},
                {title: "Tomar vacina do corona", completed: false, id: uuid()},
            ]
        }
    }

    addItem = (e) => {
        e.preventDefault();

        const newItem = {
            title: this.state.search,
            completed: false,
            id: uuid()
        }

        this.setState({
            search: '',
            items: this.state.items.concat(newItem)
        })
    }

    searchChange = (e) => {
        this.setState(
            {search: e.target.value}
        );
    }

    onCompletion = (id) => {
        const updatedList = this.state.items.map(
            item => {
                return item.id === id ? {...item, completed: !item.completed} : item;
            }
        )

        this.setState({
            items: updatedList
        });
    }

    deleteItem = (id) => {
        const updatedList = this.state.items.filter(
            item => item.id !== id
        );

        this.setState({
            items: updatedList
        });
    }

    render(){
        return (
            <>
                <div className="todo-list">
                    <form className='AddForm' onSubmit={this.addItem} >
                        <input className='textField' type='text' placeholder='Nova tarefa' value={this.state.search} onChange={this.searchChange}/>
                        <input type='submit' value='Add' />
                    </form>
                    <div className="todo-items">
                        {this.state.items.map(
                            item => (
                                <Item 
                                    title={item.title}
                                    completed={item.completed}
                                    onCompletion={this.onCompletion} 
                                    onDelete={this.deleteItem}
                                    id={item.id}
                                    key={item.id}
                                />)
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default ToDos;