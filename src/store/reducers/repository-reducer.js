import axios from "axios";
const SET_REPOS = 'SET_REPOS';
const SET_FETCHING = 'SET_FETCHING';

const initState = {
    items: [],
    isFetching: false
};

export const repositoryReducer =(state = initState, action)=> {
    switch (action.type) {
        case SET_REPOS:
            return  {...state, items: action.payload}

        case SET_FETCHING:
            return {...state, isFetching: action.payload}


        default:
            return state

    }
};


const setRepos =(repos)=> ({
    type: SET_REPOS,
    payload: repos
});

const setFetching =(bool)=> ({
    type: SET_FETCHING,
    payload: bool
});


export const getRepos =(searchQuery = "stars:%3E1")=> async (dispatch)=> {
    dispatch(setFetching(true));
   const resp = await axios(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`);
    dispatch(setRepos(resp.data.items));
    dispatch(setFetching(false));

};