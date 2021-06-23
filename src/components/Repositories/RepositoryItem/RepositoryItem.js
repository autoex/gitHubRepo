import React from 'react';
import classes from './RepositoryItem.module.scss'
import {Link} from "react-router-dom";

const RepositoryItem = (props) => {
console.log(props.item)
    const repo = props.item;
    return (
        <div className={classes.item}>
            <div className={classes.header}>
                <div>
                    <Link to={`/card/${repo.owner.login}/${repo.name}`}>{props.item.name}</Link>


                </div>
                <div><strong>Stars: </strong>{props.item.stargazers_count}</div>
            </div>
            <div><strong>Date: </strong>{props.item.updated_at}</div>

        </div>
    );
};

export default RepositoryItem;