import './App.css'
import { Outlet } from "react-router-dom";
import { Navbar } from './components/Navbar';
import MyFooter from './components/MyFooter';

function App() {
    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'>
                <Outlet /> {/* This is where nested routes will be rendered */}
            </div> 
            <MyFooter/>
        </div>
    );
}

export default App;
