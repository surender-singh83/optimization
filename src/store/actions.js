export const searchAction = (query) =>{
    return function(dispatch) {
        console.log(query)
        dispatch({
            type: 'SEARCH',
            payload: query
        })
    }
}