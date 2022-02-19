import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar/Sidebar';

function App() {
    return (
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //             Edit <code>src/App.tsx</code> and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Learn React
        //         </a>
        //     </header>

        // </div>
        <div className='flex'>
            <SideBar></SideBar>
            {/* <div className="text-center text-green-500 font-bold hover:text-red-700">
                Hello World
            </div> */}

        </div>
    );
}

export default App;
