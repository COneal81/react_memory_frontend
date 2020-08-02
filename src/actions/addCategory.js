export const addCategory = (dataInfo) => {

    return (dispatch) => {
        
        fetch('http://localhost:3001/api/v1/categories', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            // dataInfo is being changed from an object to a string.
            body: JSON.stringify(dataInfo)
        }) 
         // changing dataInfo back into json
        .then(response => response.json())
        // dispatches to a reducer with an action object. Then is added to redux store without refetching
        .then(category => dispatch({type: 'ADD_CATEGORY', payload: category}))
       
        


    }

}