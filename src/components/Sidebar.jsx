import { useState, useEffect } from 'react';
import { useCommonData } from '../context/CommonContext';

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({ 0: true }); // Home open by default
  const { isOpenSidebar, sidebarRef } = useCommonData();
  // Toggle submenu open/close
  const toggleMenu = (index) => {
    setOpenMenus(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Sidebar collapse/expand — mirrors what the template's JS does
  useEffect(() => {
    const sideMenuBtns = document.querySelectorAll('#side-menu, #side-menu2');
    const body = document.body;

    const handleToggle = () => {
      body.classList.toggle('sidebar-collapse');
    };

    sideMenuBtns.forEach(btn => btn.addEventListener('click', handleToggle));

    return () => {
      sideMenuBtns.forEach(btn => btn.removeEventListener('click', handleToggle));
    };
  }, []);

  const menuItems = [
    {
      label: "Home", active: true,
      icon: <svg className="feather feather-home" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
      submenu: [
        { href: "index.html", label: "Newsfeed" },
        { href: "company-home.html", label: "Company Home" },
        { href: "profile-page2.html", label: "User Profile" },
        { href: "profile.html", label: "Student User Profile" },
        { href: "groups.html", label: "Groups" },
        { href: "group-detail.html", label: "Group Detail" },
        { href: "post-detail.html", label: "Social Post Detail" },
        { href: "messages.html", label: "Chat/Messages" },
        { href: "notifications.html", label: "Notifications" },
        { href: "search-result.html", label: "Search Result" },
      ]
    },
    {
      label: "Features",
      icon: <svg className="feather feather-zap" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
      submenu: [
        { href: "videos.html", label: "Videos" },
        { href: "live-stream.html", label: "Live Stream" },
        { href: "event-page.html", label: "Events Page" },
        { href: "event-detail.html", label: "Event Detail" },
        { href: "Q-A.html", label: "QA" },
        { href: "Q-detail.html", label: "QA Detail" },
        { href: "help-faq.html", label: "Support Help" },
        { href: "help-faq-detail.html", label: "Support Detail" },
      ]
    },
    {
      label: "Market Place",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>,
      submenu: [
        { href: "books.html", label: "Books" },
        { href: "book-detail.html", label: "Books Detail" },
        { href: "courses.html", label: "Course" },
        { href: "course-detail.html", label: "Course Detail" },
        { href: "add-new-course.html", label: "Add New Course" },
        { href: "product-cart.html", label: "Cart Page" },
        { href: "product-checkout.html", label: "Checkout" },
        { href: "add-credits.html", label: "Add Credit" },
        { href: "pay-out.html", label: "Payouts" },
        { href: "price-plan.html", label: "Pricing Plans" },
        { href: "invoice.html", label: "Invoice" },
        { href: "thank-you.html", label: "Thank you Page" },
      ]
    },
    {
      label: "Blogs",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-coffee"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>,
      submenu: [
        { href: "blog.html", label: "Blog" },
        { href: "blog-detail.html", label: "Blog Detail" },
      ]
    },
    {
      label: "Featured Pages",
      icon: <svg className="feather feather-file" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /></svg>,
      submenu: [
        { href: "404.html", label: "Error 404" },
        { href: "coming-soon.html", label: "Coming Soon" },
        { href: "send-feedback.html", label: "Send Feedback" },
        { href: "badges.html", label: "Badges" },
        { href: "thank-you.html", label: "Thank You" },
      ]
    },
    {
      label: "Authentications",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
      submenu: [
        { href: "sign-in.html", label: "Sign In" },
        { href: "signup.html", label: "Sign Up" },
        { href: "forgot-password.html", label: "Forgot Password" },
      ]
    },
  ];

  const singleItems = [
    {
      href: "about-university.html", label: "University Profile",
      icon: <svg className="feather feather-users" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle r="4" cy="7" cx="9" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    },
    {
      href: "messages.html", label: "Live Chat",
      icon: <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
    },
    {
      href: "privacy-n-policy.html", label: "Privacy Polices",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
    },
    {
      href: "settings.html", label: "Web Settings",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
    },
  ];

  return (
    <nav ref={sidebarRef} className={isOpenSidebar ? "sidebar hide" : "sidebar"}>
      <ul className="menu-slide">

        {menuItems.map((item, i) => (
          <li
            key={i}
            className={`menu-item-has-children${item.active ? " active" : ""}${openMenus[i] ? " open" : ""}`}
          >
            <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu(i); }}>
              <i>{item.icon}</i> {item.label}
            </a>
            {/* Controlled submenu — only render when open */}
            {openMenus[i] && (
              <ul className="submenu" style={{ display: "block" }}>
                {item.submenu.map((sub, j) => (
                  <li key={j}><a href={sub.href}>{sub.label}</a></li>
                ))}
              </ul>
            )}
          </li>
        ))}

        {singleItems.map((item, i) => (
          <li key={`single-${i}`}>
            <a href={item.href}><i>{item.icon}</i> {item.label}</a>
          </li>
        ))}

        {/* Development Tools */}
        <li className={`menu-item-has-children${openMenus['dev'] ? " open" : ""}`}>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu('dev'); }}>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </i> Development Tools
          </a>
          {openMenus['dev'] && (
            <ul className="submenu" style={{ display: "block" }}>
              <li><a href="widgets.html">Widgets Collection</a></li>
              <li><a href="development-component.html">Web Component</a></li>
              <li><a href="development-elements.html">Web Elements</a></li>
              <li><a href="loader-spiners.html">Loader Spiners</a></li>
            </ul>
          )}
        </li>

      </ul>
    </nav>
  );
};

export default Sidebar;