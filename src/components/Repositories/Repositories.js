import React, {useEffect, useState} from 'react';
import classes from './Repositories.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../store/reducers/repository-reducer";
import RepositoryItem from "./RepositoryItem/RepositoryItem";
import Loader from "../Loader/Loader";

const Repositories = () => {
    const state = useSelector(state => state.repositoryPage);
    const dispatch = useDispatch();
    useEffect(() => dispatch(getRepos()), []);
    const [searchInput, setSearchInput] = useState();

    const searchBtnHandler =()=> {
        dispatch(getRepos(searchInput))

    }
    return (
        <div className={classes.container}>

            <div className={classes.searchBox}>
                <input type="text" value={searchInput} onChange={event => setSearchInput(event.target.value)} placeholder={'Type here...'} className={classes.searchBoxInput}/>
                <button className={classes.searchBoxBtn} onClick={searchBtnHandler}>Search</button>
            </div>
            {state.isFetching ? <Loader/> : state.items.map(item => <RepositoryItem key={item.id} item={item}/>)}


        </div>
    );
};

export default Repositories;