import React from 'react';
import classes from './RepositoryItem.module.scss'

const RepositoryItem = (props) => {

    return (
        <div className={classes.item}>
            <div className={classes.header}><div><a href={props.item.html_url}> {props.item.name}</a></div>
           <div><strong>Stars: </strong>{props.item.stargazers_count}</div></div>
        <div><strong>Date: </strong>{props.item.updated_at}</div>

        </div>
    );
};

export default RepositoryItem;