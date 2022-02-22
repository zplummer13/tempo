import SideBar from './components/sidebar/Sidebar';
import ContentContainer from './components/content-container/ContentContainer';
import { useEffect } from 'react';
import Store from 'electron-store';

function App() {

    useEffect(() => {
        const store = new Store({ name: "journal/test" });
        store.set('foo', 'bar')
        console.log(store.get('foo'))
    }, [])

    return (
        <div className='flex'>
            <SideBar></SideBar>
            <ContentContainer></ContentContainer>
        </div>
    );
}

export default App;
