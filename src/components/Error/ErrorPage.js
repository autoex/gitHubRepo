import React from 'react';

const ErrorPage = (propps) => {
    return (
        <div>
           <h1>Error</h1>
            <button onClick={()=> propps.history.push('/') }>To main</button>
        </div>
    );
};

export default ErrorPage;