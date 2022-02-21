import SideBar from './components/sidebar/Sidebar';
import ContentContainer from './components/content-container/ContentContainer';
import { useEffect } from 'react';
import Store from 'electron-store'

function App() {

    useEffect(() => {
        const store = new Store();
        // store.set('foo', 'bar')

        console.log(store.get('foo'))


        // console.log(electron.fileApi.readFile("todo.json"))
        // console.log(ReadFile("todo.json"))


        // window.electron.store.set('foo', 'bar');
        // or
        // console.log(window.electron.store.get('foo'));
    }, [])

    return (
        <div className='flex'>
            <SideBar></SideBar>
            <ContentContainer></ContentContainer>
        </div>
    );
}

export default App;
