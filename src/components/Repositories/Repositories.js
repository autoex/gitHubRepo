import React, {useEffect} from 'react';
import classes from './Repositories.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../store/reducers/repository-reducer";
import RepositoryItem from "./RepositoryItem/RepositoryItem";

const Repositories = () => {
    const state = useSelector((state => state.repositoryPage));
    const dispatch = useDispatch();
   useEffect(()=>dispatch(getRepos()) , []);
   console.log(state)

    return (
        <div className={classes.container}>
            {state.items.map(item=><RepositoryItem key={item.id} item={item}/>)}

        </div>
    );
};

export default Repositories;