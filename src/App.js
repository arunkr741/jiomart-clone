import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import {
  TopCatBar,
  SideNavBar,
  Routes,
  NavigationBar,
  Context,
  Footer1,
} from './Components';

function App() {
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const { setcartPopUpVisible } = useContext(Context);

  useEffect(() => {
    setcartPopUpVisible(true);
  }, [setcartPopUpVisible]);
  return (
    <div className='App'>
      <header className='nav-container'>
        <div className='sticky-nav'>
          <NavigationBar setSideBarVisible={setSideBarVisible} />
          <section className='top-cat-bar'>
            <TopCatBar />
          </section>
        </div>
        <SideNavBar
          sideBarVisible={sideBarVisible}
          setSideBarVisible={setSideBarVisible}
        />
      </header>
      <main>
        <Routes />
      </main>
      <Footer1 />
    </div>
  );
}
export default App;
