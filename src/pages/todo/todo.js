import React from 'react'
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext'
import './todo.css'

const Todo = () => {

    const [text,setText]=React.useState({
        add:""
    })

    const [items,setItems]=React.useState([""])
    function handleClick(){
        setItems(x=>([...x,text]))
    }
    const showItems=items.map(x=><h2>{x}</h2>)

    
    function handleChange(event){
        setText(x=>({
            ...x,
            [event.target.name]:event.target.value
        }))
    }

    return (
        <div className='Main'>
            Todo
            <br />
            <input type="text"
                placeholder="type items"
                width="50%"
                name="add"
                value={text.value}
                onChange={handleChange}
            />
            <br />
            <input type="submit" value="Add item" onClick={handleClick}/>
            <div>{showItems}</div>
        </div>
    )
}

export default Todo