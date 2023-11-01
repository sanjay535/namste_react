import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Provider } from 'react-redux';
import store from '../utils/store';

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

export default AppLayout;
