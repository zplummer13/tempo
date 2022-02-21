import SideBar from './components/sidebar/Sidebar';
import ContentContainer from './components/content-container/ContentContainer';
import { ReadFile } from './services/data-service';
import { useEffect } from 'react';
import electron from 'electron';

function App() {

    useEffect(() => {
        // console.log(electron.fileApi.readFile("todo.json"))
        console.log(ReadFile("todo.json"))
    }, [])

    return (
        <div className='flex'>
            <SideBar></SideBar>
            <ContentContainer></ContentContainer>
        </div>
    );
}

export default App;
