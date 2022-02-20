import SideBar from './components/sidebar/Sidebar';
import ContentContainer from './components/content-container/ContentContainer';

function App() {
    return (
        <div className='flex'>
            <SideBar></SideBar>
            <ContentContainer></ContentContainer>
        </div>
    );
}

export default App;
