import React from 'react';
import Repositories from "./components/Repositories/Repositories";
import {Route} from "react-router-dom";
import RepositoryPage from "./components/RepositoryPage/RepositoryPage";
import './index.css'

const App = () => {
    return (


        <div className={'container'}>
            <Route path={'/'} exact component={Repositories}/>
            <Route path={'/card/:username/:reponame'} component={RepositoryPage}/>
        </div>


    );
};

export default App;