import React, {useEffect, useState} from 'react';
import classes from './Repositories.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getRepos, setCurrentPageAC} from "../../store/reducers/repository-reducer";
import RepositoryItem from "./RepositoryItem/RepositoryItem";
import Loader from "../Loader/Loader";
import Paginator from "../Paginator/Paginator";
import ErrorPage from "../Error/ErrorPage";

const Repositories = (props) => {

    const state = useSelector(state => state.repositoryPage);
    const dispatch = useDispatch();
    useEffect(() => dispatch(getRepos(searchInput, state.currentPage, state.perPage)), [state.currentPage]);
    const [searchInput, setSearchInput] = useState();

    const searchBtnHandler = () => {
        dispatch(setCurrentPageAC(1))
        dispatch(getRepos(searchInput))

    };
    const setCurrentPage = (number) => {
        dispatch(setCurrentPageAC(number))


    }

    const pagesTotal = Math.ceil(state.totalReps / state.perPage);
    if(state.isFetchError) return <ErrorPage/>;
    return (
        <div>

            <div className={classes.searchBox}>
                <input type="text" value={searchInput} onChange={event => setSearchInput(event.target.value)}
                       placeholder={'Type here...'} className={classes.searchBoxInput}/>
                <button className={classes.searchBoxBtn} onClick={searchBtnHandler}>Search</button>
            </div>
            {state.isFetching ? <Loader/> :
                <div> {state.items.map(item => <RepositoryItem key={item.id} item={item}/>)}
                    <Paginator currentPage={state.currentPage} setCurrentPage={setCurrentPage} pagesTotal={pagesTotal}/>
                </div>


            }


        </div>
    );
};

export default Repositories;