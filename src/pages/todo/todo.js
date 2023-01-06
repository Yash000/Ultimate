import React from 'react'
import './todo.css'
import {Button,Card,InputGroup,Form} from 'react-bootstrap';



const Todo = () => {

    const [text, setText] = React.useState({
        add: ""
    })

    const [items, setItems] = React.useState([])
    function handleClick() {
        setItems(x => (text.add==""?[...x]: [...x, text.add]))
    }
    const showItems = items.map(x => <Card body>{x}</Card>)


    function handleChange(event) {
        setText(x => ({
            ...x,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div className='Main'>
        
            <br />
            <InputGroup className="mb-3">
            
            <Form.Control type="text"
                placeholder="type items"
                width="50%"
                name="add"
                value={text.value}
                onChange={handleChange}
                id="type_item"
                onKeyUp={(e) => { if (e.key === "Enter") { handleClick(); } }}
                />
            <Button type="submit" value="Add item" onClick={handleClick} id="add_item" variant="light">+</Button>
            </InputGroup>
            <div>{showItems}</div>
        </div>
    )
}

export default Todo
