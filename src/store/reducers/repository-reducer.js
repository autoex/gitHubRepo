import axios from "axios";
const SET_REPOS = 'SET_REPOS';

const initState = {
    items: [],
    isFetching: true
};

export const repositoryReducer =(state = initState, action)=> {
    switch (action.type) {
        case SET_REPOS:
            return  {...state, items: action.payload}


        default:
            return state

    }
};


const setRepos =(repos)=> ({
    type: SET_REPOS,
    payload: repos
});


export const getRepos =(searchQuery = "stars:%3E1")=> async (dispatch)=> {
   const resp = await axios(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`);
    dispatch(setRepos(resp.data.items));

};