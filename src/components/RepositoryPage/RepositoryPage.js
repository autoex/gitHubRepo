import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
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
        <h1>{username}</h1>
            <img src={repo.owner.avatar_url} />
            <button onClick={() => props.history.goBack()}>Back</button>
        </div>
    );
};

export default RepositoryPage;