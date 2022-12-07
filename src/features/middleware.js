
//displays state value before and after dispatch
export const logger = store => next => action => {
    //treat it just the way Redux would call our Thunk:
    //by passing it the store dispatch and getState methods.
    if (typeof action === 'function') {
        action(store.dispatch, store.getState)
    } else { 
        console.log('dispatch', store.getState())
        next(action)
        console.log('after dispatch', store.getState())
    }
}

// export const logger = store => next => action => {
//     console.log('dispatch', store.getState())
//     next(action)
//     console.log('after dispatch', store.getState())
// }