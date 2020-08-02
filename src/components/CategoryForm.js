import React from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../actions/addCategory'

class CategoryForm extends React.Component {

    state = {
        category_name: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event => {
        event.preventDefault();
        this.props.addCategory(this.state)
        this.setState({
            category_name: ""
        })
         //when form is submitted history.push will direct browser back to /categories
        // setState is asynchronous, it will not clear state until function is completed
        this.props.history.push('/categories')
    })

    // Controlled Form
    render() {
        return(
            <div class="container">
                {/* handleSubmit is in form tag to submit entire form */}
                <form onSubmit={this.handleSubmit}>
                    <label>Category Name: </label>
                    <input type='text' 
                        placeholder='Category Name' 
                        value={this.state.category_name} 
                        name="category_name" 
                        onChange={this.handleChange}/><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }

}

export default connect(null, {addCategory})(CategoryForm)
// passing addCategory into connect gives us access to props
// component is creating data to send to backend and update redux store