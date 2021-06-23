import React from 'react';
import Repositories from "./components/Repositories/Repositories";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import RepositoryPage from "./components/RepositoryPage/RepositoryPage";
import './index.css'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <div className={'container'}>
                        <Route path={'/'} exact component={Repositories}/>
                        <Route path={'/card'} component={RepositoryPage}/>
                    </div>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;