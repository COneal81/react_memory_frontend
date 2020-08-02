export const addMemory = (memory, categoryId) => {
    console.log(memory)
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/categories/${categoryId}/memories`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(memory)
    })
    .then(resp => resp.json())
    .then(category => {
        console.log(category)
        if (category.error) {
            alert(category.error)
        } else {
            dispatch({type: 'ADD_MEMORY', payload: category})
        }
    })
    }
} 
// returning dispatch so we can use to dispatch to our reducer