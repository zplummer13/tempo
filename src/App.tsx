import SideBar from './components/sidebar/Sidebar';
import ContentContainer from './components/content-container/ContentContainer';
import { ReadFile } from './services/data-service';

function App() {

    console.log(ReadFile("todo.json"))
    return (
        <div className='flex'>
            <SideBar></SideBar>
            <ContentContainer></ContentContainer>
        </div>
    );
}

export default App;
