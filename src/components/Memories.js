// import React from 'react'
// import { connect } from 'react-redux'
// import { removeMemory } from '../actions/removeMemory'

// // A functional component is simply functional.  It does not have state and/or lifecycle methods.

// const Memories = (props) => {
    
//     const handleRemoveMemory = (memory) => {
//         props.removeMemory(memory.id, memory.category_id)
//     }

//     return (
//         <div>
//             {props.memories && props.memories.map(memory =>
//                 <li key={memory.id}> {memory.title} - {memory.description} 
//                 <button onClick={() => handleRemoveMemory(memory)}> Remove Memory </button></li>)}
//         </div>
//     )
// }

// export default connect(null, {removeMemory})(Memories)