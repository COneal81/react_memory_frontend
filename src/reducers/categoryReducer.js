export default function categoryReducer(state = {categories: []}, action) {
    switch(action.type) {
        case 'FETCH_CATEGORIES':
            return {categories: action.payload}

        case "ADD_CATEGORY": 
            return {...state, categories: [...state.categories, action.payload]}

        case "ADD_MEMORY":
            let categories = state.categories.map(categories => {
                if (category.id === action.payload.id) {
                    return action.payload
                } else {
                    return categories
                }
            })
            return {...state, categories: categories }
            
        case "REMOVE_MEMORY":
            let categoriesRemove = state.categories.map(category => {
                if (category.id === action.payload.id) {
                    return action.payload
                } else {
                    return category
                }
            })
            return { ...state, categories: categoriesRemove}

        default:
        return state
    }
}