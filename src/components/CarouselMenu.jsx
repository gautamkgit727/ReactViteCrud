const CarouselMenu = () => {
  const menuLinks = [
    { href: "feed.html", label: "Newsfeed", active: true },
    { href: "videos.html", label: "Videos" },
    { href: "courses.html", label: "Courses" },
    { href: "books.html", label: "Books" },
    { href: "blog.html", label: "Blog" },
    { href: "groups.html", label: "Groups" },
  ];

  return (
    <section>
      <div className="white-bg">
        <div className="container-fluid">
          <div className="menu-caro">
            <div className="row">
              <div className="col-lg-2">
                <div className="sidemenu">
                  <i>
                    <svg id="side-menu" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </i>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="page-caro">
                  {menuLinks.map((item, i) => (
                    <div className="link-item" key={i}>
                      <a className={item.active ? "active" : ""} href={item.href}>
                        <i className=""></i>
                        <p>{item.label}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-2">
                <div className="user-inf">
                  <div className="folowerz">Followers: 204</div>
                  <ul className="stars">
                    {[1,2,3,4,5].map(s => <li key={s}><i className="icofont-star"></i></li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselMenu;
