import React from 'react';
import Repositories from "./components/Repositories/Repositories";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path={'/'} exact component={Repositories} />
            </BrowserRouter>
        </div>
    );
};

export default App;