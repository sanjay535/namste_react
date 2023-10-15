import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AppLayout=()=>{
    return (
        <div className='layout'>
        <Header/>
         <Outlet/>
        <Footer/>
        </div>
    );
}

export default AppLayout;