import React, {useEffect, useState} from 'react';
import './App.css';
import LeftSidebar from "./Components/Sidebar/Sidebar";
import PageHeader from "./Components/Page/PageHeader";
import Form from "./Components/Generator/Form";

const App = () => {

    const [activeCommand, setActiveCommand] = useState(null);
    return (
        <div className="App">
            <PageHeader/>
            <div className="m-5 flex">
                <LeftSidebar setActiveCommand={setActiveCommand}/>
                <Form command={activeCommand}/>
            </div>
        </div>
    );
}

export default App;
