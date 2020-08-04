export const removeMemory = (memoryId, categoryId) => {
    
    return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/categories/${memoryId}/category/${categoryId}', {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(category => dispatch({type: "REMOVE_MEMORY", payload: category}))
           
    }
}