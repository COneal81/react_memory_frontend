import React from 'react'
import { connect } from 'react-redux'
import { addMemory } from '../actions/addMemory'

// connect enables us to use the dispatch action that is sent to a reducer when create memory is called


class MemoryForm extends React.Component {
    
    state = {
        title: '',
        description:'',
        date:'',
        image_url:''
    }

    
    
    handleChange = (event) => {
        this.setState( {
            [event.target.name]: event.target.value
        // evaluating value of event.target.name before setting it as key
        // setState makes changes to the component state 
        // it then tells React that this component and its children need to be re-rendered with the updated state (value that the user input)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        this.props.addMemory(this.state, this.props.category.id)
        this.setState({
            title: '',
            description:'',
            date:'',
            image_url:''
        })
// the submit button sends state that the user input
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Title: </label>
                    <input type='text' placeholder='Title' name='title' value={this.state.title} onChange={this.handleChange}> </input>
                    <label> Title: </label>
                    <input type='text' placeholder='Description' name='description' value={this.state.description} onChange={this.handleChange}> </input>
                    <label> Date: </label>
                    <input type='text' placeholder='Date' name='date' value={this.state.date} onChange={this.handleChange}> </input>
                    <label> Image URL: </label>
                    <input type='text' placeholder='Image URL' name='image_url' value={this.state.image_url} onChange={this.handleChange}> </input>
                    <input type= 'submit'/>
                </form>
            </div>
        )
    }
}
export default connect(null, {addMemory})(MemoryForm)


// connect() function connects a React component to a Redux store.

// It provides its connected component with the pieces of the data it needs 
// from the store, and the functions it can use to dispatch actions to the store.

// It does not modify the component class passed to it; instead, it returns a new, 
// connected component class that wraps the component you passed in.

// connect accepts four different parameters, all optional. By convention, they are called:
