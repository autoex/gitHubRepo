import React from 'react';
import Repositories from "./components/Repositories/Repositories";
import {Route} from "react-router-dom";
import RepositoryPage from "./components/RepositoryPage/RepositoryPage";
import './index.css'
import ErrorPage from "./components/Error/ErrorPage";

const App = () => {
    return (


        <div className={'container'}>
            <Route path={'/'} exact component={Repositories}/>
            <Route path={'/card/:username/:reponame'} component={RepositoryPage}/>
            <Route path={'/error'} component={ErrorPage}/>
        </div>


    );
};

export default App;