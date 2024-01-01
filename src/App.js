import React from 'react';
import './App.css';
import LeftSidebar from "./Components/Sidebar/Sidebar";
import PageHeader from "./Components/Page/PageHeader";
import Form from "./Components/Generator/Form";

const App: React.FC = () => {
    const command =
        'rsync -avz {Source Username}@{Source Ip Address}:{Source Directory Path} {Local Directory Path}';

    return (
        <div className="App">
            <PageHeader/>
            <div className="m-5 flex">
                <LeftSidebar/>
                <Form command={command} />
            </div>
        </div>
    );
}

export default App;
