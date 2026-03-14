import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="theme-layout">

      {/* Page Loader */}
      <div className="page-loader" id="page-loader">
        <div className="loader">
          <span className="loader-item"></span><span className="loader-item"></span>
          <span className="loader-item"></span><span className="loader-item"></span>
          <span className="loader-item"></span><span className="loader-item"></span>
          <span className="loader-item"></span><span className="loader-item"></span>
          <span className="loader-item"></span><span className="loader-item"></span>
        </div>
      </div>

      {/* Responsive Header */}
      <div className="responsive-header">
        <div className="logo res"><img src="images/logo.png" alt="" /><span>Socimo</span></div>
        <div className="user-avatar mobile">
          <a href="profile.html" title="View Profile"><img alt="" src="images/resources/user.jpg" /></a>
          <div className="name">
            <h4>Danial Cardos</h4>
            <span>Ontario, Canada</span>
          </div>
        </div>
        <div className="right-compact">
          <div className="sidemenu">
            <i>
              <svg id="side-menu2" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </i>
          </div>
          <div className="res-search">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </div>
        </div>
        <div className="restop-search">
          <span className="hide-search"><i className="icofont-close-circled"></i></span>
          <form method="post">
            <input type="text" placeholder="Search..." />
          </form>
        </div>
      </div>

      {/* Header */}
      <header className="">
        <div className="topbar stick">
          <div className="logo"><img src="images/logo.png" alt="" /><span>Socimo</span></div>
          <div className="searches">
            <form method="post">
              <input type="text" placeholder="Search..." />
              <button type="submit"><i className="icofont-search"></i></button>
              <span className="cancel-search"><i className="icofont-close"></i></span>
              <div className="recent-search">
                <h4 className="recent-searches">Your's Recent Search</h4>
                <ul className="so-history">
                  {[
                    { img: "user1.jpg", name: "Danial Carabal" },
                    { img: "user2.jpg", name: "Maria K" },
                    { img: "user3.jpg", name: "Fawad Khan" },
                    { img: "user4.jpg", name: "Danial Sandos" },
                    { img: "user5.jpg", name: "Jack Carter" },
                  ].map((u, i) => (
                    <li key={i}>
                      <div className="searched-user">
                        <figure><img src={`images/resources/${u.img}`} alt="" /></figure>
                        <span>{u.name}</span>
                      </div>
                      <span className="trash"><i className="icofont-close-circled"></i></span>
                    </li>
                  ))}
                </ul>
              </div>
            </form>
          </div>
          <ul className="web-elements">
            <li>
              <div className="user-dp">
                <a href="profile-page2.html" title="">
                  <img alt="" src="images/resources/user.jpg" />
                  <div className="name"><h4>Danial Cardos</h4></div>
                </a>
              </div>
            </li>
            <li className="go-live">
              <a href="live-stream.html" title="Go Live" data-toggle="tooltip">
                <i>
                  <svg fill="#f00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18px" height="18px">
                    <path d="M 6.1015625 6.1015625 C 3.5675625 8.6345625 2 12.134 2 16 C 2 19.866 3.5675625 23.365437 6.1015625 25.898438 L 7.5195312 24.480469 C 5.3465312 22.307469 4 19.308 4 16 C 4 12.692 5.3465312 9.6925313 7.5195312 7.5195312 L 6.1015625 6.1015625 z M 25.898438 6.1015625 L 24.480469 7.5195312 C 26.653469 9.6925312 28 12.692 28 16 C 28 19.308 26.653469 22.307469 24.480469 24.480469 L 25.898438 25.898438 C 28.432437 23.365437 30 19.866 30 16 C 30 12.134 28.432437 8.6345625 25.898438 6.1015625 z M 9.6367188 9.6367188 C 8.0077188 11.265719 7 13.515 7 16 C 7 18.485 8.0077187 20.734281 9.6367188 22.363281 L 11.052734 20.947266 C 9.7847344 19.680266 9 17.93 9 16 C 9 14.07 9.7847344 12.319734 11.052734 11.052734 L 9.6367188 9.6367188 z M 22.363281 9.6367188 L 20.947266 11.052734 C 22.215266 12.319734 23 14.07 23 16 C 23 17.93 22.215266 19.680266 20.947266 20.947266 L 22.363281 22.363281 C 23.992281 20.734281 25 18.485 25 16 C 25 13.515 23.992281 11.265719 22.363281 9.6367188 z M 16 12 A 4 4 0 0 0 16 20 A 4 4 0 0 0 16 12 z" />
                  </svg>
                </i>
              </a>
            </li>
            <li>
              <a href="index.html" title="Home" data-toggle="tooltip">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </i>
              </a>
            </li>
            <li>
              <a className="mesg-notif" href="#" title="Messages" data-toggle="tooltip">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </i>
              </a>
              <span></span>
            </li>
            <li>
              <a className="mesg-notif" href="#" title="Notifications" data-toggle="tooltip">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </i>
              </a>
              <span></span>
            </li>
            <li>
              <a className="create" href="#" title="Add New" data-toggle="tooltip">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </i>
              </a>
            </li>
            <li>
              <a href="#" title="">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </i>
              </a>
              <ul className="dropdown">
                <li><a href="profile.html" title=""><i className="icofont-user-alt-3"></i> Your Profile</a></li>
                <li><a href="add-new-course.html" title=""><i className="icofont-plus"></i> New Course</a></li>
                <li><a className="invite-new" href="#" title=""><i className="icofont-brand-slideshare"></i> Invite Collegue</a></li>
                <li><a href="pay-out.html" title=""><i className="icofont-price"></i> Payout</a></li>
                <li><a href="price-plan.html" title=""><i className="icofont-flash"></i> Upgrade</a></li>
                <li><a href="help-faq.html" title=""><i className="icofont-question-circle"></i> Help</a></li>
                <li><a href="settings.html" title=""><i className="icofont-gear"></i> Setting</a></li>
                <li><a href="privacy-n-policy.html" title=""><i className="icofont-notepad"></i> Privacy</a></li>
                <li><a className="dark-mod" href="#" title=""><i className="icofont-moon"></i> Dark Mode</a></li>
                <li className="logout"><a href="sign-in.html" title=""><i className="icofont-power"></i> Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </header>

      {/* Sidebar Nav */}
      <nav className="sidebar">
        <ul className="menu-slide">
          <li className="active menu-item-has-children">
            <a href="#" title=""><i><svg className="feather feather-home" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></i> Home</a>
            <ul className="submenu">
              <li><a href="index.html">Newsfeed</a></li>
              <li><a href="company-home.html">Company Home</a></li>
              <li><a href="profile-page2.html">User Profile</a></li>
              <li><a href="profile.html">Student User Profile</a></li>
              <li><a href="groups.html">Groups</a></li>
              <li><a href="group-detail.html">Group Detail</a></li>
              <li><a href="post-detail.html">Social Post Detail</a></li>
              <li><a href="messages.html">Chat/Messages</a></li>
              <li><a href="notifications.html">Notifications</a></li>
              <li><a href="search-result.html">Search Result</a></li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#" title=""><i><svg className="feather feather-zap" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></i> Features</a>
            <ul className="submenu">
              <li><a href="videos.html">Videos</a></li>
              <li><a href="live-stream.html">Live Stream</a></li>
              <li><a href="event-page.html">Events Page</a></li>
              <li><a href="event-detail.html">Event Detail</a></li>
              <li><a href="Q-A.html">QA</a></li>
              <li><a href="Q-detail.html">QA Detail</a></li>
              <li><a href="help-faq.html">Support Help</a></li>
              <li><a href="help-faq-detail.html">Support Detail</a></li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#" title=""><i><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></i> Market Place</a>
            <ul className="submenu">
              <li><a href="books.html">Books</a></li>
              <li><a href="courses.html">Course</a></li>
              <li><a href="product-cart.html">Cart Page</a></li>
              <li><a href="product-checkout.html">Checkout</a></li>
              <li><a href="price-plan.html">Pricing Plans</a></li>
              <li><a href="invoice.html">Invoice</a></li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#" title=""><i><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-coffee"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg></i> Blogs</a>
            <ul className="submenu">
              <li><a href="blog.html">Blog</a></li>
              <li><a href="blog-detail.html">Blog Detail</a></li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#" title=""><i><svg className="feather feather-lock" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></i> Authentications</a>
            <ul className="submenu">
              <li><a href="sign-in.html">Sign In</a></li>
              <li><a href="signup.html">Sign Up</a></li>
              <li><a href="forgot-password.html">Forgot Password</a></li>
            </ul>
          </li>
          <li><a href="about-university.html"><i><svg className="feather feather-users" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle r="4" cy="7" cx="9" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></i> University Profile</a></li>
          <li><a href="messages.html"><i><svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i> Live Chat</a></li>
          <li><a href="settings.html"><i><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></i> Web Settings</a></li>
        </ul>
      </nav>

      {/* Carousel Menu */}
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
                    {[
                      { href: "feed.html", icon: "zap", label: "Newsfeed", active: true },
                      { href: "videos.html", icon: "youtube", label: "Videos" },
                      { href: "courses.html", icon: "airplay", label: "Courses" },
                      { href: "books.html", icon: "book", label: "Books" },
                      { href: "blog.html", icon: "layout", label: "Blog" },
                      { href: "groups.html", icon: "users", label: "Groups" },
                    ].map((item, i) => (
                      <div className="link-item" key={i}>
                        <a className={item.active ? "active" : ""} href={item.href} title="">
                          <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></svg></i>
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
                      {[1, 2, 3, 4, 5].map(s => <li key={s}><i className="icofont-star"></i></li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section>
        <div className="gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div id="page-contents" className="row merged20">

                  {/* Left Sidebar */}
                  <div className="col-lg-3">
                    <aside className="sidebar static left">
                      <div className="widget whitish low-opacity">
                        <img src="images/time-clock.png" alt="" />
                        <div className="bg-image" style={{ backgroundImage: "url(images/resources/time-bg.jpg)" }}></div>
                        <div className="date-time">
                          <div className="realtime">
                            <span id="hours">00</span>
                            <span id="point">:</span>
                            <span id="min">00</span>
                          </div>
                          <span id="date"></span>
                        </div>
                      </div>
                      <div className="widget">
                        <h4 className="widget-title">Complete Your Profile</h4>
                        <span>Your Profile is missing followings!</span>
                        <div data-progress="tip" className="progress__outer" data-value="0.67">
                          <div className="progress__inner">82%</div>
                        </div>
                        <ul className="prof-complete">
                          <li><i className="icofont-plus-square"></i> <a href="#" title="">Upload Your Picture</a><em>10%</em></li>
                          <li><i className="icofont-plus-square"></i> <a href="#" title="">Your University?</a><em>20%</em></li>
                          <li><i className="icofont-plus-square"></i> <a href="#" title="">Add Payment Method</a><em>20%</em></li>
                        </ul>
                      </div>
                      <div className="advertisment-box">
                        <h4><i className="icofont-info-circle"></i> advertisment</h4>
                        <figure>
                          <a href="#" title="Advertisment"><img src="images/resources/ad-widget2.gif" alt="" /></a>
                        </figure>
                      </div>
                      <div className="widget">
                        <h4 className="widget-title"><i className="icofont-flame-torch"></i> Popular Courses</h4>
                        <ul className="premium-course">
                          <li>
                            <figure><img src="images/resources/course-5.jpg" alt="" /><span className="tag">Free</span></figure>
                            <div className="vid-course">
                              <h5><a href="course-detail.html">Wordpress Online video course</a></h5>
                              <ins className="price">$19/M</ins>
                            </div>
                          </li>
                          <li>
                            <figure><img src="images/resources/course-3.jpg" alt="" /><span className="tag">Premium</span></figure>
                            <div className="vid-course">
                              <h5><a href="course-detail.html">Node JS Online video course</a></h5>
                              <ins className="price">$29/M</ins>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="widget">
                        <h4 className="widget-title">Recent Blogs <a className="see-all" href="#">See All</a></h4>
                        <ul className="recent-links">
                          {[
                            { img: "recentlink-1.jpg", title: "Moira's fade reach much farther...", time: "2 weeks ago" },
                            { img: "recentlink-2.jpg", title: "Daniel asks The voice of doomfist...", time: "3 months ago" },
                            { img: "recentlink-3.jpg", title: "The socimo over watch scandals.", time: "1 day before" },
                          ].map((blog, i) => (
                            <li key={i}>
                              <figure><img alt="" src={`images/resources/${blog.img}`} /></figure>
                              <div className="re-links-meta">
                                <h6><a href="#">{blog.title}</a></h6>
                                <span>{blog.time}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="widget">
                        <h4 className="widget-title">Your profile has a new Experience section</h4>
                        <p>Showcase your professional experience and education to help potential employers and collaborators find and contact you about career opportunities.</p>
                        <a className="main-btn" href="profile.html" data-ripple="">view profile</a>
                      </div>
                      <div className="widget web-links stick-widget">
                        <h4 className="widget-title">Useful Links <a href="#" className="see-all">See All</a></h4>
                        <ul>
                          {["about", "career", "advertise", "socimo Apps", "socimo Blog", "Help", "socimo Gifts", "content policy", "User Policy"].map((link, i) => (
                            <li key={i}><i className="icofont-dotted-right"></i> <a href="#">{link}</a></li>
                          ))}
                        </ul>
                        <p>&copy; Socimo 2020. All Rights Reserved.</p>
                      </div>
                    </aside>
                  </div>

                  {/* Main Feed */}
                  <div className="col-lg-6">
                    <ul className="filtr-tabs">
                      <li><a className="active" href="#">Home</a></li>
                      <li><a href="#">Recent</a></li>
                      <li><a href="#">Favourit</a></li>
                    </ul>

                    {/* Create New Post */}
                    <div className="main-wraper">
                      <span className="new-title">Create New Post</span>
                      <div className="new-post">
                        <form method="post">
                          <i className="icofont-pen-alt-1"></i>
                          <input type="text" placeholder="Create New Post" />
                        </form>
                        <ul className="upload-media">
                          <li><a href="#"><i><img src="images/image.png" alt="" /></i><span>Photo/Video</span></a></li>
                          <li><a href="#"><i><img src="images/activity.png" alt="" /></i><span>Feeling/Activity</span></a></li>
                          <li><a href="live-stream.html"><i><img src="images/live-stream.png" alt="" /></i><span>Live Stream</span></a></li>
                        </ul>
                      </div>
                    </div>

                    {/* Stories */}
                    <div className="story-card">
                      <div className="story-title">
                        <h5>Recent Stories</h5>
                        <a href="#">See all</a>
                      </div>
                      <div className="story-wraper">
                        <img src="images/resources/story-card5.jpg" alt="" />
                        <div className="users-dp"><img src="images/resources/user3.jpg" alt="" /></div>
                        <a className="add-new-stry" href="#"><i className="icofont-plus"></i></a>
                        <span>Add Your Story</span>
                      </div>
                      {[
                        { bg: "story-card.jpg", user: "user6.jpg", name: "Tamana Bhatia" },
                        { bg: "story-card2.jpg", user: "user7.jpg", name: "Emily Caros" },
                        { bg: "story-card3.jpg", user: "user8.jpg", name: "Daniel Cardos" },
                        { bg: "story-card4.jpg", user: "user4.jpg", name: "Emma Watson" },
                      ].map((s, i) => (
                        <div className="story-wraper" key={i}>
                          <img src={`images/resources/${s.bg}`} alt="" />
                          <div className="users-dp"><img src={`images/resources/${s.user}`} alt="" /></div>
                          <span>{s.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Chat Rooms */}
                    <div className="main-wraper">
                      <div className="chatroom-title">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-tv">
                            <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                            <polyline points="17 2 12 7 7 2"></polyline>
                          </svg>
                        </i>
                        <span>Chat Rooms <em>Video chat with friends</em></span>
                        <a className="create-newroom" href="#">Create Room</a>
                      </div>
                      <ul className="chat-rooms">
                        {[
                          { img: "user2.jpg", name: "Sara's Room", status: "online" },
                          { img: "user3.jpg", name: "jawad's Room", status: "offline" },
                          { img: "user4.jpg", name: "Jack's Room", status: "away" },
                          { img: "user5.jpg", name: "jobidn's Room", status: "online" },
                          { img: "user6.jpg", name: "Emily's Room", status: "offline" },
                        ].map((room, i) => (
                          <li key={i}>
                            <div className="room-avatar">
                              <img src={`images/resources/${room.img}`} alt="" />
                              <span className={`status ${room.status}`}></span>
                            </div>
                            <span>{room.name}</span>
                            <a className="join" href="#">Join</a>
                            <a className="say-hi send-mesg" href="#"><i className="icofont-facebook-messenger"></i></a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Suggested Friends */}
                    <div className="main-wraper">
                      <div className="user-post">
                        <div className="friend-info">
                          <figure><i className="icofont-learn"></i></figure>
                          <div className="friend-name">
                            <ins><a href="time-line.html">Suggested</a></ins>
                            <span><i className="icofont-runner-alt-1"></i> Follow similar People</span>
                          </div>
                          <ul className="suggested-caro">
                            {[
                              { img: "speak-1.jpg", name: "Amy Watson" },
                              { img: "speak-2.jpg", name: "Muhammad Khan" },
                              { img: "speak-3.jpg", name: "Sadia Gill" },
                            ].map((p, i) => (
                              <li key={i}>
                                <figure><img src={`images/resources/${p.img}`} alt="" /></figure>
                                <span>{p.name}</span>
                                <ins>Department of Socilolgy</ins>
                                <a href="#" data-ripple=""><i className="icofont-star"></i> Follow</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Load More */}
                    <div className="loadmore">
                      <div className="sp sp-bars"></div>
                      <a href="#" data-ripple="">Load More..</a>
                    </div>
                  </div>

                  {/* Right Sidebar */}
                  <div className="col-lg-3">
                    <aside className="sidebar static right">
                      <div className="widget">
                        <h4 className="widget-title">Your Groups</h4>
                        <ul className="ak-groups">
                          {[
                            { img: "your-group1.jpg", name: "Good Group" },
                            { img: "your-group2.jpg", name: "E-course Group" },
                          ].map((g, i) => (
                            <li key={i}>
                              <figure><img src={`images/resources/${g.img}`} alt="" /></figure>
                              <div className="your-grp">
                                <h5><a href="group-detail.html">{g.name}</a></h5>
                                <a href="#"><i className="icofont-bell-alt"></i>Notifications <span>13</span></a>
                                <a href="group-feed.html" className="promote">view feed</a>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="widget">
                        <h4 className="widget-title">Ask Research Question?</h4>
                        <div className="ask-question">
                          <i className="icofont-question-circle"></i>
                          <h6>Ask questions in Q&A to get help from experts in your field.</h6>
                          <a className="ask-qst" href="#">Ask a question</a>
                        </div>
                      </div>
                      <div className="widget">
                        <h4 className="widget-title">Explor Events <a className="see-all" href="#">See All</a></h4>
                        <div className="rec-events bg-purple">
                          <i className="icofont-gift"></i>
                          <h6><a href="">BZ University good night event in columbia</a></h6>
                          <img alt="" src="images/clock.png" />
                        </div>
                        <div className="rec-events bg-blue">
                          <i className="icofont-microphone"></i>
                          <h6><a href="">The 3rd International Conference 2020</a></h6>
                          <img alt="" src="images/clock.png" />
                        </div>
                      </div>
                      <div className="widget stick-widget">
                        <h4 className="widget-title">Who's following</h4>
                        <ul className="followers">
                          {[
                            { img: "friend-avatar.jpg", name: "Kelly Bill" },
                            { img: "friend-avatar2.jpg", name: "Issabel" },
                            { img: "friend-avatar3.jpg", name: "Andrew" },
                            { img: "friend-avatar4.jpg", name: "Sophia" },
                            { img: "friend-avatar5.jpg", name: "Allen" },
                          ].map((f, i) => (
                            <li key={i}>
                              <figure><img alt="" src={`images/resources/${f.img}`} /></figure>
                              <div className="friend-meta">
                                <h4><a href="time-line.html">{f.name}</a><span>Dept colleague</span></h4>
                                <a className="underline" href="#">Follow</a>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </aside>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <figure className="bottom-mockup"><img src="images/footer.png" alt="" /></figure>
      <div className="bottombar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span>&copy; copyright All rights reserved by socimo 2020</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Box */}
      <div className="chat-live">
        <a className="chat-btn" href="#" title="Start Live Chat" data-toggle="tooltip"><i className="icofont-facebook-messenger"></i></a>
        <span>07</span>
      </div>

      {/* Cart Button */}
      <div className="cart-product">
        <a href="product-cart.html" title="View Cart" data-toggle="tooltip"><i className="icofont-cart-alt"></i></a>
        <span>03</span>
      </div>

    </div>
  );
}

export default App;