import React from 'react'
import MemoriesContainer from '../containers/MemoriesContainer'


//this will render one category

const Category = (props) => {
  
    let category = props.categories.filter(category => category.id === props.match.params.id)[0]
    
// debugger

    return (
        <div className="container">
        <h2>
            {category ? category.category_name : null}
           {/* if category exists, render name, or null */}
        </h2>
        <MemoriesContainer category={category}/>
        </div>
    )

}

export default Category