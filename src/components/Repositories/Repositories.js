import React, {useEffect} from 'react';
import classes from './Repositories.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../store/reducers/repository-reducer";
import RepositoryItem from "./RepositoryItem/RepositoryItem";
import Loader from "../Loader/Loader";

const Repositories = () => {
    const repoList = useSelector(state => state.repositoryPage.items);
    const fetching = useSelector(state => state.repositoryPage.isFetching);
    const dispatch = useDispatch();
   useEffect(()=>dispatch(getRepos()) , []);


    return (
        <div className={classes.container}>


            {fetching ? <Loader />  : repoList.map(item=><RepositoryItem key={item.id} item={item}/>) }


        </div>
    );
};

export default Repositories;