import axios from "axios";

const SET_REPOS = 'SET_REPOS';
const SET_FETCHING = 'SET_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


const initState = {
    items: [],
    isFetching: false,
    totalReps: 0,
    perPage: 9,
    currentPage: 1
};

export const repositoryReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_REPOS:
            return {...state, items: action.repos, totalReps: action.totalReps}

        case SET_FETCHING:
            return {...state, isFetching: action.payload}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}


        default:
            return state

    }
};


const setReps = (repos, totalReps) => ({
    type: SET_REPOS,
    repos,
    totalReps
});

const setFetching = (bool) => ({
    type: SET_FETCHING,
    payload: bool
});

export const setCurrentPageAC = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page
});


export const getRepos = (searchQuery = "stars:%3E1", currentPage = 1, perPage) => {
    if (searchQuery == '') {
        searchQuery = "stars:%3E1"
    }
    return async (dispatch) => {

        dispatch(setFetching(true));
        const resp = await axios(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`);
        dispatch(setReps(resp.data.items, resp.data.total_count));
        dispatch(setFetching(false));
    }

};


export const getCurrentRepo = async (username, reponame, setRepo) => {


    const resp = await axios(`https://api.github.com/repos/${username}/${reponame}`);
    setRepo(resp.data);
    // console.log(resp.data)


};