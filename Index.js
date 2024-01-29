// redux has four main component
 const redux = require("redux")
 console.log(redux)


/*
1 Actions
2 AcvtionCreator
3 ReducerFunction
4 StoreObject
*/

// 1 action 

/*
action are js object its must contain "type" Properties

{
    type: "Something"
    payload: value
}
*/
let initialState ={
    value:0
};


// 2 ActionCreator

        // what is action creator in redux 
        // ActionCreator are function which return some Action\
/*
        let actionName=()=>{
            return {
                //  type pros are compalsory 
                type: 
            }
        }
*/

//    define some ActionCretor 

const AdditionByOne=()=>{
    return {
        type: "ADDITION",
        payload:1
    }
}

const SubscrationByOne=()=>{
    return {
        type: "SUBCRATION",
        payload:1
    }
}

//  3 Define ReducerFunction 

const RootReducer=(oldState = initialState, action)=>{
   let newState = oldState;
   switch(action.type){
    case "ADDITION": 
    return {
        ...newState,
            value: newState.value + action.payload
    }
   }
   return newState
}

//  4 Store global Object 
    // Store object is a js Object\
    // StoreObject is passed at the top level application comp

let StoreObj = redux.legacy_createStore(RootReducer)
console.log(StoreObj.getState())
console.log(StoreObj.dispatch(AdditionByOne()))
console.log(StoreObj.getState())

