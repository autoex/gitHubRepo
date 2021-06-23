import React from 'react';

const RepositoryPage = ({history, link, title}) => {
    return (
        <div>
            <h1>{title}</h1>
<button onClick={()=>history.goBack()}>Back</button>
        </div>
    );
};

export default RepositoryPage;