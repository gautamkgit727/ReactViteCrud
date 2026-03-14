import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CarouselMenu from './components/CarouselMenu';
import LeftSidebar from './components/LeftSidebar';
import MainFeed from './components/MainFeed';
import RightSidebar from './components/RightSidebar';
import Popups from './components/Popups';

function App() {
  return (
    <>
      {/* Page Loader */}
      <div className="page-loader" id="page-loader">
        <div className="loader">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="loader-item"></span>
          ))}
        </div>
      </div>

      {/* <div className="theme-layout"> */}
        <Header />
        <Sidebar />
        <CarouselMenu />

        <section>
          <div className="gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div id="page-contents" className="row merged20">
                    <div className="col-lg-3"><LeftSidebar /></div>
                    <MainFeed />
                    <div className="col-lg-3"><RightSidebar /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <figure className="bottom-mockup">
          <img src="images/footer.png" alt="" />
        </figure>
        <div className="bottombar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <span>&copy; copyright All rights reserved by socimo 2020</span>
              </div>
            </div>
          </div>
        </div>

        <Popups />
      {/* </div> */}
    </>
  );
}

export default App;