// Thunk enables use of dispatch inside a action creator.

export function fetchCategories() {
    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/categories`)
        .then(resp => resp.json())
        .then(categories => dispatch({
            type: "FETCH_CATEGORIES",
            payload: categories
        }))
    }
}