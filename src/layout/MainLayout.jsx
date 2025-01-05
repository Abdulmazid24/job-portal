import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';

const MainLayout = () => {
  return (
    <div className=" w-11/12 mx-auto">
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
