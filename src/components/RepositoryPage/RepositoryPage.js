import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import {getCurrentRepo} from "../../store/reducers/repository-reducer";
import {useDispatch} from "react-redux";

const RepositoryPage = (props) => {
    const dispatch = useDispatch();
    const {username, reponame} = useParams();
    const [repo, setRepo] = useState({owner:{}});
    useEffect(()=> {
        getCurrentRepo(username, reponame, setRepo);

    } ,[])

    console.log(repo)

    return (
        <div>
            <h1><Link onClick={() => props.history.goBack()}>back</Link> {username}</h1>
            <img src={repo.owner.avatar_url} />
        </div>
    );
};

export default RepositoryPage;