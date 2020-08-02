import React from 'react'
import MemoryForm from '../components/MemoryForm'
import Memories from '../components/Memories'

class MemoriesContainer extends React.Component {
    
    render() {
        return (
            <div>
                <h1> MEMORIES Container</h1>
                <MemoryForm category={this.props.category}/>
                <Memories memories={this.props.category && this.props.category.memories}/>
            </div>
        )
    }
}

export default MemoriesContainer