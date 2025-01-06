import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
  return (
    <div className=" w-11/12 mx-auto">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="my-10">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
