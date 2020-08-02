import React from 'react'
import {Route, Link} from 'react-router-dom'

import '../styles/App.css';


// This is a functional component displays a list of Categories


const Categories = (props) => {

    return (
        <div className="container">
            <h1 className="centerform">Categories</h1>
            <div>
                {props.categories.map(category => 
                // use a key when iterating to avoid warnings
                <li key={category.id}>
                    <Link to={`/categories/${category.id}`}>{category.category_name}</Link> 
                    </li> )}
            </div>
        </div>
    )

}

export default Categories