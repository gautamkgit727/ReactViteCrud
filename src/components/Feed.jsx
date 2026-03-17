import { useState, useEffect } from "react";

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconMenu = () => (






  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconHome = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconMessage = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconBell = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);
const IconPlus = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconGrid = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);
const IconLive = () => (
  <svg fill="#f00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18px" height="18px">
    <path d="M6.1 6.1C3.57 8.63 2 12.13 2 16s1.57 7.37 4.1 9.9l1.42-1.42C5.35 22.31 4 19.31 4 16s1.35-6.31 3.52-8.48L6.1 6.1zm19.8 0l-1.42 1.42C26.65 9.69 28 12.69 28 16s-1.35 6.31-3.52 8.48l1.42 1.42C28.43 23.37 30 19.87 30 16s-1.57-7.37-4.1-9.9zM9.64 9.64l-1.41 1.41C9.81 12.67 11 14.22 11 16s-1.19 3.33-2.77 4.95l1.41 1.41C11.5 20.47 13 18.38 13 16s-1.5-4.47-3.36-6.36zm12.72 0C20.5 11.53 19 13.62 19 16s1.5 4.47 3.36 6.36l1.41-1.41C22.19 19.33 21 17.78 21 16s1.19-3.33 2.77-4.95l-1.41-1.41zM16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
  </svg>
);
const IconEye = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const IconStar = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconShare = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);
const IconMoreH = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
  </svg>
);
const IconThumbUp = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
);
const IconTV = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" /><polyline points="17 2 12 7 7 2" />
  </svg>
);
const IconVerified = ({ color = "#7fba00" }) => (
  <svg style={{ verticalAlign: "middle" }} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
    <path fill={color} stroke={color} d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
  </svg>
);
const IconGlobe = () => <i className="icofont-globe" />;
const IconZap = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconYoutube = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);
const IconBook = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const IconLayout = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" /><line y2="9" x2="21" y1="9" x1="3" /><line y2="9" x2="9" y1="21" x1="9" />
  </svg>
);
const IconUsers = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconAirplay = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" /><polygon points="12 15 17 21 7 21 12 15" />
  </svg>
);

// ─── Reusable Sub-components ──────────────────────────────────────────────────

const PostStatTools = () => (
  <div className="stat-tools">
    <div className="box">
      <div className="Like">
        <a className="Like__link" href="#"><i className="icofont-like" /> Like</a>
        <div className="Emojis">
          <div className="Emoji Emoji--like"><div className="icon icon--like" /></div>
          <div className="Emoji Emoji--love"><div className="icon icon--heart" /></div>
          <div className="Emoji Emoji--haha"><div className="icon icon--haha" /></div>
          <div className="Emoji Emoji--wow"><div className="icon icon--wow" /></div>
          <div className="Emoji Emoji--sad"><div className="icon icon--sad" /></div>
          <div className="Emoji Emoji--angry"><div className="icon icon--angry" /></div>
        </div>
      </div>
    </div>
    <div className="box">
      <div className="Emojis">
        <div className="Emoji Emoji--like"><div className="icon icon--like" /></div>
        <div className="Emoji Emoji--love"><div className="icon icon--heart" /></div>
        <div className="Emoji Emoji--haha"><div className="icon icon--haha" /></div>
        <div className="Emoji Emoji--wow"><div className="icon icon--wow" /></div>
        <div className="Emoji Emoji--sad"><div className="icon icon--sad" /></div>
        <div className="Emoji Emoji--angry"><div className="icon icon--angry" /></div>
      </div>
    </div>
    <a href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
    <a href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
    <div className="emoji-state">
      {[
        { img: "images/smiles/thumb.png", label: "Likes", names: ["Jhon Doe", "Amara Sin", "Sarah K.", "20+ more"] },
        { img: "images/smiles/heart.png", label: "Love", names: ["Amara Sin", "Jhon Doe", "10+ more"] },
        { img: "images/smiles/smile.png", label: "Happy", names: ["Sarah K.", "Jhon Doe", "Amara Sin", "100+ more"] },
        { img: "images/smiles/weep.png", label: "Dislike", names: ["Danial Carbal", "Amara Sin", "Sarah K.", "15+ more"] },
      ].map((item) => (
        <div key={item.label} className="popover_wrapper">
          <a className="popover_title" href="#"><img alt="" src={item.img} /></a>
          <div className="popover_content">
            <span><img alt="" src={item.img} /> {item.label}</span>
            <ul className="namelist">
              {item.names.map((n, i) =>
                n.includes("+") ? <li key={i}><span>{n}</span></li> : <li key={i}>{n}</li>
              )}
            </ul>
          </div>
        </div>
      ))}
      <p>10+</p>
    </div>
  </div>
);

const PostActions = ({ views = "1.2k", comments = "54", stars = "5k", shares = "205" }) => (
  <div className="we-video-info">
    <ul>
      <li>
        <span title="views" className="views">
          <i><IconEye /></i><ins>{views}</ins>
        </span>
      </li>
      <li>
        <span title="Comments" className="Recommend">
          <i><IconMessage /></i><ins>{comments}</ins>
        </span>
      </li>
      <li>
        <span title="follow" className="Follow">
          <i><IconStar /></i><ins>{stars}</ins>
        </span>
      </li>
      <li>
        <span className="share-pst" title="Share">
          <i><IconShare /></i><ins>{shares}</ins>
        </span>
      </li>
    </ul>
    <a href="post-detail.html" className="reply">Reply <i className="icofont-reply" /></a>
  </div>
);

const PostMoreOptions = () => (
  <div className="more-post-optns">
    <i><IconMoreH /></i>
    <ul>
      <li><i className="icofont-pen-alt-1" />Edit Post<span>Edit This Post within a Hour</span></li>
      <li><i className="icofont-ban" />Hide Post<span>Hide This Post</span></li>
      <li><i className="icofont-ui-delete" />Delete Post<span>If inappropriate Post By Mistake</span></li>
      <li><i className="icofont-flag" />Report<span>Inappropriate content</span></li>
    </ul>
  </div>
);

const CommentArea = ({ open = false }) => (
  <div className="new-comment" style={{ display: open ? "block" : "none" }}>
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="write comment" />
      <button type="submit"><i className="icofont-paper-plane" /></button>
    </form>
    <div className="comments-area">
      <ul>
        {[
          { img: "images/resources/user1.jpg", name: "Jack Carter", extra: true },
          { img: "images/resources/user2.jpg", name: "Ching xang", extra: false },
        ].map((c) => (
          <li key={c.name}>
            <figure><img alt="" src={c.img} /></figure>
            <div className="commenter">
              <h5><a href="#">{c.name}</a></h5>
              <span>2 hours ago</span>
              <p>i think that some how, we learn who we really are and then live with that decision, great post!</p>
              {c.extra && (
                <>
                  <span>you can view the more detail via link</span>
                  <a href="https://www.youtube.com/watch?v=HpZgwHU1GcI" target="_blank" rel="noreferrer">
                    https://www.youtube.com/watch?v=HpZgwHU1GcI
                  </a>
                </>
              )}
            </div>
            <a title="Like" href="#"><i className="icofont-heart" /></a>
            <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const UserThumbList = () => (
  <div className="users-thumb-list">
    {["userlist-1.jpg", "userlist-2.jpg", "userlist-1.jpg", "userlist-2.jpg"].map((img, i) => (
      <a key={i} href="#" data-toggle="tooltip">
        <img src={`images/resources/${img}`} alt="" />
      </a>
    ))}
    <span><strong>You</strong>, <b>Sarah</b> and <a href="#">24+ more</a> liked</span>
  </div>
);

// ─── HEADER ───────────────────────────────────────────────────────────────────
const ResponsiveHeader = () => (
  <div className="responsive-header">
    <div className="logo res"><img src="images/logo.png" alt="" /><span>Socimo</span></div>
    <div className="user-avatar mobile">
      <a href="profile.html" title="View Profile"><img alt="" src="images/resources/user.jpg" /></a>
      <div className="name"><h4>Danial Cardos</h4><span>Ontario, Canada</span></div>
    </div>
    <div className="right-compact">
      <div className="sidemenu">
        <i><IconMenu /></i>
      </div>
      <div className="res-search">
        <span><IconSearch /></span>
      </div>
    </div>
    <div className="restop-search">
      <span className="hide-search"><i className="icofont-close-circled" /></span>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search..." />
      </form>
    </div>
  </div>
);

const TopBar = () => {
  const recentUsers = [
    { img: "user1.jpg", name: "Danial Carabal" },
    { img: "user2.jpg", name: "Maria K" },
    { img: "user3.jpg", name: "Fawad Khan" },
    { img: "user4.jpg", name: "Danial Sandos" },
    { img: "user5.jpg", name: "Jack Carter" },
  ];

  return (
    <header>
      <div className="topbar stick">
        <div className="logo"><img src="images/logo.png" alt="" /><span>Socimo</span></div>
        <div className="searches">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Search..." />
            <button type="submit"><i className="icofont-search" /></button>
            <span className="cancel-search"><i className="icofont-close" /></span>
            <div className="recent-search">
              <h4 className="recent-searches">Your's Recent Search</h4>
              <ul className="so-history">
                {recentUsers.map((u) => (
                  <li key={u.name}>
                    <div className="searched-user">
                      <figure><img src={`images/resources/${u.img}`} alt="" /></figure>
                      <span>{u.name}</span>
                    </div>
                    <span className="trash"><i className="icofont-close-circled" /></span>
                  </li>
                ))}
              </ul>
            </div>
          </form>
        </div>

        <ul className="web-elements">
          <li>
            <div className="user-dp">
              <a href="profile-page2.html">
                <img alt="" src="images/resources/user.jpg" />
                <div className="name"><h4>Danial Cardos</h4></div>
              </a>
            </div>
          </li>
          <li className="go-live">
            <a href="live-stream.html" title="Go Live" data-toggle="tooltip">
              <i><IconLive /></i>
            </a>
          </li>
          <li>
            <a href="index.html" title="Home" data-toggle="tooltip"><i><IconHome /></i></a>
          </li>
          <li>
            <a className="mesg-notif" href="#" title="Messages" data-toggle="tooltip"><i><IconMessage /></i></a>
            <span></span>
          </li>
          <li>
            <a className="mesg-notif" href="#" title="Notifications" data-toggle="tooltip"><i><IconBell /></i></a>
            <span></span>
          </li>
          <li>
            <a className="create" href="#" title="Add New" data-toggle="tooltip"><i><IconPlus /></i></a>
          </li>
          <li>
            <a href="#"><i><IconGrid /></i></a>
            <ul className="dropdown">
              <li><a href="profile.html"><i className="icofont-user-alt-3" /> Your Profile</a></li>
              <li><a href="add-new-course.html"><i className="icofont-plus" /> New Course</a></li>
              <li><a className="invite-new" href="#"><i className="icofont-brand-slideshare" /> Invite Collegue</a></li>
              <li><a href="pay-out.html"><i className="icofont-price" /> Payout</a></li>
              <li><a href="price-plan.html"><i className="icofont-flash" /> Upgrade</a></li>
              <li><a href="help-faq.html"><i className="icofont-question-circle" /> Help</a></li>
              <li><a href="settings.html"><i className="icofont-gear" /> Setting</a></li>
              <li><a href="privacy-n-policy.html"><i className="icofont-notepad" /> Privacy</a></li>
              <li><a className="dark-mod" href="#"><i className="icofont-moon" /> Dark Mode</a></li>
              <li className="logout"><a href="sign-in.html"><i className="icofont-power" /> Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

// ─── SIDEBAR NAV ──────────────────────────────────────────────────────────────
const SidebarNav = () => {
  const navItems = [
    { label: "Home", icon: <IconHome size={14} />, active: true, children: ["Newsfeed", "Company Home", "User Profile", "Student User Profile", "Groups", "Group Detail", "Social Post Detail", "Chat/Messages", "Notificatioins", "Search Result"] },
    { label: "Features", icon: <IconZap size={14} />, children: ["Videos", "Live Stream", "Events Page", "Event Detail", "QA", "QA Detail", "Support Help", "Support Detail"] },
    { label: "Market Place", icon: null, children: ["Books", "Books Detail", "Course", "course Detail", "Add New Course", "Cart Page", "Checkout", "Add Credit", "Payouts", "Pricing Plans", "Invoice", "Thank you Page"] },
    { label: "Blogs", icon: null, children: ["Blog", "Blog Detail"] },
    { label: "Featured Pages", icon: null, children: ["Error 404", "Coming Soon", "Send Feedback", "Badges", "Thank You"] },
    { label: "Authentications", icon: null, children: ["Sign In", "Sign Up", "Forgot Password"] },
  ];

  return (
    <nav className="sidebar">
      <ul className="menu-slide">
        {navItems.map((item) => (
          <li key={item.label} className={`${item.active ? "active" : ""} menu-item-has-children`}>
            <a href="#">
              {item.icon && <i>{item.icon}</i>} {item.label}
            </a>
            <ul className="submenu">
              {item.children.map((c) => <li key={c}><a href="#">{c}</a></li>)}
            </ul>
          </li>
        ))}
        <li><a href="about-university.html"><i><IconUsers size={14} /></i> University Profile</a></li>
        <li><a href="messages.html"><i><IconMessage size={14} /></i> Live Chat</a></li>
        <li><a href="privacy-n-policy.html"><i><IconAirplay size={14} /></i> Privacy Polices</a></li>
        <li><a href="settings.html"><i className="icofont-gear" /> Web Settings</a></li>
        <li className="menu-item-has-children">
          <a href="#">Development Tools</a>
          <ul className="submenu">
            <li><a href="#">Widgets Collection</a></li>
            <li><a href="#">Web Component</a></li>
            <li><a href="#">Web Elements</a></li>
            <li><a href="#">Loader Spiners</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

// ─── TOP CAROUSEL MENU ────────────────────────────────────────────────────────
const CarouselMenu = () => {
  const links = [
    { label: "Newsfeed", icon: <IconZap />, href: "feed.html", active: true },
    { label: "Videos", icon: <IconYoutube />, href: "videos.html" },
    { label: "Courses", icon: <IconAirplay />, href: "courses.html" },
    { label: "Books", icon: <IconBook />, href: "books.html" },
    { label: "Blog", icon: <IconLayout />, href: "blog.html" },
    { label: "Groups", icon: <IconUsers />, href: "groups.html" },
  ];
  return (
    <section>
      <div className="white-bg">
        <div className="container-fluid">
          <div className="menu-caro">
            <div className="row">
              <div className="col-lg-2">
                <div className="sidemenu"><i><IconMenu /></i></div>
              </div>
              <div className="col-lg-8">
                <div className="page-caro">
                  {links.map((l) => (
                    <div key={l.label} className="link-item">
                      <a className={l.active ? "active" : ""} href={l.href}>
                        <i>{l.icon}</i>
                        <p>{l.label}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-2">
                <div className="user-inf">
                  <div className="folowerz">Followers: 204</div>
                  <ul className="stars">
                    {[1, 2, 3, 4, 5].map((s) => <li key={s}><i className="icofont-star" /></li>)}
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

// ─── LEFT SIDEBAR ─────────────────────────────────────────────────────────────
const LeftSidebar = () => (
  <aside className="sidebar static left">
    {/* Clock Widget */}
    <div className="widget whitish low-opacity">
      <img src="images/time-clock.png" alt="" />
      <div className="bg-image" style={{ backgroundImage: "url(images/resources/time-bg.jpg)" }} />
      <div className="date-time">
        <div className="realtime">
          <span id="hours">00</span><span id="point">:</span><span id="min">00</span>
        </div>
        <span id="date"></span>
      </div>
    </div>

    {/* Complete Profile */}
    <div className="widget">
      <h4 className="widget-title">Complete Your Profile</h4>
      <span>Your Profile is missing followings!</span>
      <div data-progress="tip" className="progress__outer" data-value="0.67">
        <div className="progress__inner">82%</div>
      </div>
      <ul className="prof-complete">
        <li><i className="icofont-plus-square" /> <a href="#">Upload Your Picture</a><em>10%</em></li>
        <li><i className="icofont-plus-square" /> <a href="#">Your University?</a><em>20%</em></li>
        <li><i className="icofont-plus-square" /> <a href="#">Add Payment Method</a><em>20%</em></li>
      </ul>
    </div>

    {/* Advertisement */}
    <div className="advertisment-box">
      <h4><i className="icofont-info-circle" /> advertisment</h4>
      <figure>
        <a href="#"><img src="images/resources/ad-widget2.gif" alt="" /></a>
      </figure>
    </div>

    {/* Popular Courses */}
    <div className="widget">
      <h4 className="widget-title"><i className="icofont-flame-torch" /> Popular Courses</h4>
      <ul className="premium-course">
        {[
          { img: "course-5.jpg", tag: "Free", title: "Wordpress Online video course", price: "$19/M" },
          { img: "course-3.jpg", tag: "Premium", title: "Node JS Online video course", price: "$29/M" },
        ].map((c) => (
          <li key={c.title}>
            <figure><img src={`images/resources/${c.img}`} alt="" /><span className="tag">{c.tag}</span></figure>
            <div className="vid-course">
              <h5><a href="course-detail.html">{c.title}</a></h5>
              <ins className="price">{c.price}</ins>
            </div>
          </li>
        ))}
      </ul>
    </div>

    {/* Recent Blogs */}
    <div className="widget">
      <h4 className="widget-title">Recent Blogs <a className="see-all" href="#">See All</a></h4>
      <ul className="recent-links">
        {[
          { img: "recentlink-1.jpg", title: "Moira's fade reach much farther...", time: "2 weeks ago" },
          { img: "recentlink-2.jpg", title: "Daniel asks The voice of doomfist...", time: "3 months ago" },
          { img: "recentlink-3.jpg", title: "The socimo over watch scandals.", time: "1 day before" },
        ].map((b) => (
          <li key={b.title}>
            <figure><img alt="" src={`images/resources/${b.img}`} /></figure>
            <div className="re-links-meta">
              <h6><a href="#">{b.title}</a></h6>
              <span>{b.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>

    {/* Profile Experience */}
    <div className="widget">
      <h4 className="widget-title">Your profile has a new Experience section</h4>
      <p>Showcase your professional experience and education to help potential employers and collaborators find and contact you about career opportunities.</p>
      <a className="main-btn" href="profile.html" data-ripple="">view profile</a>
    </div>

    {/* Useful Links */}
    <UserThumbList />
    {/* {
      const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 981) {
      setIsSticky(true);
      } else {
      setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    {isSticky ? "widget web-links stick-widget fff" : "widget web-links stick-widget"}
    }
    <div className="widget web-links stick-widget">
      <h4 className="widget-title">Useful Links <a href="#" className="see-all">See All</a></h4>
      <ul>
        {["about", "career", "advertise", "socimo Apps", "socimo Blog", "Help", "socimo Gifts", "content policy", "User Policy"].map((l) => (
          <li key={l}><i className="icofont-dotted-right" /> <a href="#">{l}</a></li>
        ))}
      </ul>
      <p>&copy; Socimo 2020. All Rights Reserved.</p>
    </div> */}
  </aside>
);

// ─── MIDDLE FEED ──────────────────────────────────────────────────────────────

const CreatePost = () => (
  <div className="main-wraper">
    <span className="new-title">Create New Post</span>
    <div className="new-post">
      <form onSubmit={(e) => e.preventDefault()}>
        <i className="icofont-pen-alt-1" />
        <input type="text" placeholder="Create New Post" />
      </form>
      <ul className="upload-media">
        <li><a href="#"><i><img src="images/image.png" alt="" /></i><span>Photo/Video</span></a></li>
        <li><a href="#"><i><img src="images/activity.png" alt="" /></i><span>Feeling/Activity</span></a></li>
        <li><a href="live-stream.html"><i><img src="images/live-stream.png" alt="" /></i><span>Live Stream</span></a></li>
      </ul>
    </div>
  </div>
);

const Stories = () => {
  const stories = [
    { bg: "story-card5.jpg", user: "user3.jpg", name: "Add Your Story", isAdd: true },
    { bg: "story-card.jpg", user: "user6.jpg", name: "Tamana Bhatia" },
    { bg: "story-card2.jpg", user: "user7.jpg", name: "Emily Caros" },
    { bg: "story-card3.jpg", user: "user8.jpg", name: "Daniel Cardos" },
    { bg: "story-card4.jpg", user: "user4.jpg", name: "Emma Watson" },
  ];
  return (
    <div className="story-card">
      <div className="story-title">
        <h5>Recent Stories</h5>
        <a href="#">See all</a>
      </div>
      {stories.map((s) => (
        <div key={s.name} className="story-wraper">
          <img src={`images/resources/${s.bg}`} alt="" />
          <div className="users-dp"><img src={`images/resources/${s.user}`} alt="" /></div>
          {s.isAdd && <a className="add-new-stry" href="#"><i className="icofont-plus" /></a>}
          <span>{s.name}</span>
        </div>
      ))}
    </div>
  );
};

const ChatRooms = () => {
  const rooms = [
    { img: "user2.jpg", name: "Sara's Room", status: "online" },
    { img: "user3.jpg", name: "jawad's Room", status: "offline" },
    { img: "user4.jpg", name: "Jack's Room", status: "away" },
    { img: "user5.jpg", name: "jobidn's Room", status: "online" },
    { img: "user6.jpg", name: "Emily's Room", status: "offline" },
  ];
  return (
    <div className="main-wraper">
      <div className="chatroom-title">
        <i><IconTV /></i>
        <span>Chat Rooms <em>Video chat with friends</em></span>
        <a className="create-newroom" href="#">Create Room</a>
      </div>
      <ul className="chat-rooms">
        {rooms.map((r) => (
          <li key={r.name}>
            <div className="room-avatar">
              <img src={`images/resources/${r.img}`} alt="" />
              <span className={`status ${r.status}`} />
            </div>
            <span>{r.name}</span>
            <a className="join" href="#">Join</a>
            <a className="say-hi send-mesg" href="#"><i className="icofont-facebook-messenger" /></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SuggestedFriends = () => {
  const people = [
    { img: "speak-1.jpg", name: "Amy Watson", dept: "Department of Socilolgy" },
    { img: "speak-2.jpg", name: "Muhammad Khan", dept: "Department of Socilolgy" },
    { img: "speak-3.jpg", name: "Sadia Gill", dept: "Department of Socilolgy" },
  ];
  return (
    <div className="main-wraper">
      <div className="user-post">
        <div className="friend-info">
          <figure><i className="icofont-learn" /></figure>
          <div className="friend-name">
            <ins><a href="time-line.html">Suggested</a></ins>
            <span><i className="icofont-runner-alt-1" /> Follow similar People</span>
          </div>
          <ul className="suggested-caro">
            {people.map((p) => (
              <li key={p.name}>
                <figure><img src={`images/resources/${p.img}`} alt="" /></figure>
                <span>{p.name}</span>
                <ins>{p.dept}</ins>
                <a href="#" data-ripple=""><i className="icofont-star" /> Follow</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// ─── POST: Audio ──────────────────────────────────────────────────────────────
const AudioPost = () => (
  <div className="main-wraper">
    <div className="user-post">
      <div className="friend-info">
        <figure>
          <em><IconVerified /></em>
          <img alt="" src="images/resources/user7.jpg" />
        </figure>
        <div className="friend-name">
          <div className="more"><PostMoreOptions /></div>
          <ins><a href="time-line.html">Andrew</a> Post Audio</ins>
          <span><i className="icofont-globe" /> published: Sep,15 2020</span>
        </div>
        <div className="post-meta">
          <p>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
          <div className="aud-vid">
            <audio id="plyr-audio-player" className="audio-player" controls>
              <source src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3" type="audio/mp3" />
              <source src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg" type="audio/ogg" />
            </audio>
          </div>
          <PostActions />
          <PostStatTools />
          <CommentArea open={false} />
        </div>
      </div>
    </div>
  </div>
);

// ─── POST: Video/Podcast ──────────────────────────────────────────────────────
const VideoPost = () => (
  <div className="main-wraper">
    <div className="user-post">
      <div className="friend-info">
        <figure>
          <em><IconVerified /></em>
          <img alt="" src="images/resources/user6.jpg" />
        </figure>
        <div className="friend-name">
          <div className="more"><PostMoreOptions /></div>
          <ins><a href="time-line.html">Elie Honey</a> Podcast</ins>
          <span><i className="icofont-globe" /> published: Sep,15 2020</span>
        </div>
        <div className="post-meta">
          <a href="post-detail.html" className="post-title">Supervision as a Personnel Development Device</a>
          <p>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
          <div className="aud-vid">
            <div className="video-player">
              <iframe
                src="https://www.youtube.com/embed/RBfJR4oRC0k?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
                allowFullScreen
                allow="autoplay"
                title="podcast"
              />
            </div>
          </div>
          <PostActions />
          <PostStatTools />
          <CommentArea open={false} />
        </div>
      </div>
    </div>
  </div>
);

// ─── POST: Premium Product ────────────────────────────────────────────────────
const PremiumPost = () => (
  <div className="main-wraper">
    <div className="user-post">
      <div className="friend-info">
        <figure>
          <em><IconVerified color="#82828e" /></em>
          <img alt="" src="images/resources/user2.jpg" />
        </figure>
        <div className="friend-name">
          <div className="more"><PostMoreOptions /></div>
          <ins><a href="time-line.html">Maria k.</a> Premium Product</ins>
          <span><i className="icofont-globe" /> published: Sep,15 2020</span>
        </div>
        <div className="post-meta">
          <figure className="premium-post"><img src="images/resources/book5.jpg" alt="" /></figure>
          <div className="premium">
            <a href="book-detail.html" className="post-title">Technicial words 2020 Book world</a>
            <p>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
            <a className="main-btn purchase-btn" href="book-detail.html"><i className="icofont-cart-alt" /> Buy Now</a>
          </div>
          <PostActions />
          <PostStatTools />
          <CommentArea open={false} />
        </div>
      </div>
    </div>
  </div>
);

// ─── POST: Shared Link with iframe ────────────────────────────────────────────
const SharedLinkPost = () => (
  <div className="main-wraper">
    <div className="user-post">
      <div className="friend-info">
        <figure>
          <em><IconVerified /></em>
          <img alt="" src="images/resources/user2.jpg" />
        </figure>
        <div className="friend-name">
          <div className="more"><PostMoreOptions /></div>
          <ins><a href="time-line.html">Maria k.</a> Shared Link</ins>
          <span><i className="icofont-globe" /> published: Sep,15 2020</span>
        </div>
        <div className="post-meta">
          <em><a href="https://www.youtube.com/embed/zdow47FQRfQ" target="_blank" rel="noreferrer">https://www.youtube.com/embed/zdow47FQRfQ</a></em>
          <iframe height="285" src="https://www.youtube.com/embed/zdow47FQRfQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="shared link" />
          <p>Cookie? Biscuit? Bikkie? They all mean the same thing! Our lovely English teachers will quickly show you some pronunciation and vocabulary differences from Australia, America, and England!</p>
          <PostActions />
          <PostStatTools />
          <CommentArea open={true} />
        </div>
      </div>
    </div>
  </div>
);

// ─── POST: Sponsor Ads Carousel ───────────────────────────────────────────────
const SponsorPost = () => {
  const products = [
    { img: "sponsor-prod1.jpg", name: "Aloevera Juice 1 liter", price: "$24" },
    { img: "sponsor-prod5.jpg", name: "Beauty Cosmetics", price: "$24" },
    { img: "sponsor-prod3.jpg", name: "Baby items fider", price: "$24" },
  ];
  return (
    <div className="main-wraper">
      <div className="user-post">
        <div className="friend-info">
          <figure><img alt="" src="images/resources/sponsor.png" /></figure>
          <div className="friend-name">
            <div className="more"><PostMoreOptions /></div>
            <ins><a href="time-line.html">Sponsors Ads</a></ins>
            <span><i className="icofont-globe" /> Sponsor</span>
          </div>
          <div className="post-meta">
            <ul className="sponsored-caro">
              {products.map((p) => (
                <li key={p.name}>
                  <figure><img src={`images/resources/${p.img}`} alt="" /></figure>
                  <div className="sponsor-prod-name">
                    <a href="#">{p.name}</a>
                    <span>{p.price}</span>
                  </div>
                  <a href="#" className="shop-btn">Shop Now</a>
                  <div className="share-info">
                    <span>50 shares</span>
                    <span>20k Likes</span>
                  </div>
                  <div className="stat-tools">
                    <div className="box">
                      <div className="Like">
                        <a className="Like__link" href="#"><i className="icofont-like" /> Like</a>
                        <div className="Emojis">
                          <div className="Emoji Emoji--like"><div className="icon icon--like" /></div>
                          <div className="Emoji Emoji--love"><div className="icon icon--heart" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="box">
                      <div className="Emojis">
                        <div className="Emoji Emoji--like"><div className="icon icon--like" /></div>
                        <div className="Emoji Emoji--love"><div className="icon icon--heart" /></div>
                      </div>
                    </div>
                    <a href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoadMore = () => (
  <div className="loadmore">
    <div className="sp sp-bars" />
    <a href="#" data-ripple="">Load More..</a>
  </div>
);

// ─── RIGHT SIDEBAR ────────────────────────────────────────────────────────────
const RightSidebar = () => (
  <aside className="sidebar static right">
    {/* Your Groups */}
    <div className="widget">
      <h4 className="widget-title">Your Groups</h4>
      <ul className="ak-groups">
        {[
          { img: "your-group1.jpg", name: "Good Group" },
          { img: "your-group2.jpg", name: "E-course Group" },
        ].map((g) => (
          <li key={g.name}>
            <figure><img src={`images/resources/${g.img}`} alt="" /></figure>
            <div className="your-grp">
              <h5><a href="group-detail.html">{g.name}</a></h5>
              <a href="#"><i className="icofont-bell-alt" />Notifilactions <span>13</span></a>
              <a href="group-feed.html" className="promote">view feed</a>
            </div>
          </li>
        ))}
      </ul>
    </div>

    {/* Suggested Groups */}
    <div className="widget">
      <h4 className="widget-title">Suggested Group</h4>
      <div className="sug-caro">
        {[
          { bg: "sidebar-info.jpg", icon: "frnd-figure2.jpg", name: "Social Research", handle: "@biolabest" },
          { bg: "sidebar-info2.jpg", icon: "frnd-figure3.jpg", name: "Bio Labest Group", handle: "@biolabest" },
        ].map((g) => (
          <div key={g.name} className="friend-box">
            <figure>
              <img alt="" src={`images/resources/${g.bg}`} />
              <span>Members: 505K</span>
            </figure>
            <div className="frnd-meta">
              <img alt="" src={`images/resources/${g.icon}`} />
              <div className="frnd-name">
                <a href="#">{g.name}</a>
                <span>{g.handle}</span>
              </div>
              <a className="main-btn2" href="#">Join Community</a>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Ask Question */}
    <div className="widget">
      <h4 className="widget-title">Ask Research Question?</h4>
      <div className="ask-question">
        <i className="icofont-question-circle" />
        <h6>Ask questions in Q&amp;A to get help from experts in your field.</h6>
        <a className="ask-qst" href="#">Ask a question</a>
      </div>
    </div>

    {/* Events */}
    <div className="widget">
      <h4 className="widget-title">Explor Events <a className="see-all" href="#">See All</a></h4>
      <div className="rec-events bg-purple">
        <i className="icofont-gift" />
        <h6><a href="">BZ University good night event in columbia</a></h6>
        <img alt="" src="images/clock.png" />
      </div>
      <div className="rec-events bg-blue">
        <i className="icofont-microphone" />
        <h6><a href="">The 3rd International Conference 2020</a></h6>
        <img alt="" src="images/clock.png" />
      </div>
    </div>

    {/* Sponsored */}
    <div className="widget">
      <span><i className="icofont-globe" /> Sponsored</span>
      <ul className="sponsors-ad">
        {[
          { img: "sponsor.jpg", name: "IQ Options Broker", url: "www.iqvie.com" },
          { img: "sponsor2.jpg", name: "BM Fashion Designer", url: "www.abcd.com" },
        ].map((s) => (
          <li key={s.name}>
            <figure><img src={`images/resources/${s.img}`} alt="" /></figure>
            <div className="sponsor-meta">
              <h5><a href="#">{s.name}</a></h5>
              <a href="#" target="_blank" rel="noreferrer">{s.url}</a>
            </div>
          </li>
        ))}
      </ul>
    </div>

    {/* Who's Following */}
    <div className="widget stick-widget">
      <h4 className="widget-title">Who's follownig</h4>
      <ul className="followers">
        {[
          { img: "friend-avatar.jpg", name: "Kelly Bill" },
          { img: "friend-avatar2.jpg", name: "Issabel" },
          { img: "friend-avatar3.jpg", name: "Andrew" },
          { img: "friend-avatar4.jpg", name: "Sophia" },
          { img: "friend-avatar5.jpg", name: "Allen" },
        ].map((f) => (
          <li key={f.name}>
            <figure><img alt="" src={`images/resources/${f.img}`} /></figure>
            <div className="friend-meta">
              <h4>
                <a href="time-line.html">{f.name}</a>
                <span>Dept colleague</span>
              </h4>
              <a className="underline" href="#">Follow</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

// ─── POPUPS ───────────────────────────────────────────────────────────────────
const NewPostPopup = () => (
  <div className="post-new-popup">
    <div className="popup" style={{ width: 800 }}>
      <span className="popup-closed"><i className="icofont-close" /></span>
      <div className="popup-meta">
        <div className="popup-head">
          <h5><i><IconPlus size={24} /></i>Create New Post</h5>
        </div>
        <div className="post-new">
          <div className="post-newmeta">
            <ul className="post-categoroes">
              <li><i className="icofont-camera" /> Photo / Video</li>
              <li><i className="icofont-google-map" /> Post Location</li>
              <li><i className="icofont-file-gif" /> Post Gif</li>
              <li><i className="icofont-ui-tag" /> Tag to Friend</li>
              <li><i className="icofont-users" /> Share in Group</li>
              <li><i className="icofont-link" /> Share Link</li>
              <li><i className="icofont-video-cam" /> Go Live</li>
              <li><i className="icofont-sale-discount" /> Post Online Course</li>
              <li><i className="icofont-read-book" /> Post A Book</li>
              <li><i className="icofont-globe" /> Post an Ad</li>
            </ul>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="c-form">
            <textarea id="emojionearea1" placeholder="What's On Your Mind?" />
            <div className="activity-post">
              <div className="checkbox">
                <input type="checkbox" id="checkbox" defaultChecked />
                <label htmlFor="checkbox"><span>Activity Feed</span></label>
              </div>
              <div className="checkbox">
                <input type="checkbox" id="checkbox2" defaultChecked />
                <label htmlFor="checkbox2"><span>My Story</span></label>
              </div>
            </div>
            <input type="text" placeholder="https://www.youtube.com/watch?v=vgvsuiFlA-Y&t=56s" />
            <button type="submit" className="main-btn">Publish</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const InvitePopup = () => (
  <div className="wraper-invite">
    <div className="popup">
      <span className="popup-closed"><i className="icofont-close" /></span>
      <div className="popup-meta">
        <div className="popup-head">
          <h5>
            <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></i> Invite Colleagues
          </h5>
        </div>
        <div className="invitation-meta">
          <p>Enter an email address to invite a colleague or co-author to join you on socimo.</p>
          <form onSubmit={(e) => e.preventDefault()} className="c-form">
            <input type="text" placeholder="Enter Email" />
            <button type="submit" className="main-btn">Invite</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const SendMessagePopup = () => (
  <div className="popup-wraper">
    <div className="popup">
      <span className="popup-closed"><i className="icofont-close" /></span>
      <div className="popup-meta">
        <div className="popup-head">
          <h5><i><IconMessage size={24} /></i> Send Message</h5>
        </div>
        <div className="send-message">
          <form onSubmit={(e) => e.preventDefault()} className="c-form">
            <input type="text" placeholder="Enter Name.." />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Write Message" />
            <div className="uploadimage">
              <i className="icofont-file-jpg" />
              <label className="fileContainer">
                <input type="file" />Attach file
              </label>
            </div>
            <button type="submit" className="main-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// ─── SIDE SLIDE (Messages & Notifications) ────────────────────────────────────
const SideSlide = () => {
  const [activeTab, setActiveTab] = useState("messages");
  const messages = [
    { img: "user1.jpg", name: "Ibrahim Ahmed" },
    { img: "user2.jpg", name: "Fatima J." },
    { img: "user3.jpg", name: "Fawad Ahmed" },
    { img: "user4.jpg", name: "Saim Turan" },
    { img: "user5.jpg", name: "Alis wells" },
  ];
  const notifications = [
    { img: "user5.jpg", name: "Alis wells", action: "recommend your post" },
    { img: "user4.jpg", name: "Alis wells", action: "share your post" },
    { img: "user2.jpg", name: "Alis wells", action: "recommend your post" },
    { img: "user1.jpg", name: "Alis wells", action: "share your post" },
    { img: "user3.jpg", name: "Alis wells", action: "recommend your post" },
  ];
  return (
    <div className="side-slide">
      <span className="popup-closed"><i className="icofont-close" /></span>
      <div className="slide-meta">
        <ul className="nav nav-tabs slide-btns">
          <li className="nav-item">
            <a className={activeTab === "messages" ? "active" : ""} href="#" onClick={(e) => { e.preventDefault(); setActiveTab("messages"); }}>Messages</a>
          </li>
          <li className="nav-item">
            <a className={activeTab === "notifications" ? "active" : ""} href="#" onClick={(e) => { e.preventDefault(); setActiveTab("notifications"); }}>Notifications</a>
          </li>
        </ul>
        <div className="tab-content">
          {activeTab === "messages" && (
            <div className="tab-pane active fade show" id="messages">
              <h4><i className="icofont-envelope" /> messages</h4>
              <a href="#" className="send-mesg" title="New Message"><i className="icofont-edit" /></a>
              <ul className="new-messages">
                {messages.map((m) => (
                  <li key={m.name}>
                    <figure><img src={`images/resources/${m.img}`} alt="" /></figure>
                    <div className="mesg-info">
                      <span>{m.name}</span>
                      <a href="#">Helo dear i wanna talk to you</a>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#" className="main-btn" data-ripple="">view all</a>
            </div>
          )}
          {activeTab === "notifications" && (
            <div className="tab-pane active fade show" id="notifications">
              <h4><i className="icofont-bell-alt" /> notifications</h4>
              <ul className="notificationz">
                {notifications.map((n, i) => (
                  <li key={i}>
                    <figure><img src={`images/resources/${n.img}`} alt="" /></figure>
                    <div className="mesg-info">
                      <span>{n.name}</span>
                      <a href="#">{n.action}</a>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#" className="main-btn" data-ripple="">view all</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── PAGE LOADER ──────────────────────────────────────────────────────────────
const PageLoader = () => (
  <div className="page-loader" id="page-loader">
    <div className="loader">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} className="loader-item" />
      ))}
    </div>
  </div>
);

// ─── MAIN FEED COMPONENT ──────────────────────────────────────────────────────
export default function Feed() {

  return (
    <div className="theme-layout">
      <PageLoader />
      <ResponsiveHeader />
      <TopBar />
      <SidebarNav />
      <CarouselMenu />

      <section>
        <div className="gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div id="page-contents" className="row merged20">

                  {/* Left Sidebar */}
                  <div className="col-lg-3">
                    <LeftSidebar />
                  </div>

                  {/* Main Feed */}
                  <div className="col-lg-6">
                    <ul className="filtr-tabs">
                      <li><a className="active" href="#">Home</a></li>
                      <li><a href="#">Recent</a></li>
                      <li><a href="#">Favourit</a></li>
                    </ul>

                    <CreatePost />
                    <Stories />
                    <ChatRooms />
                    <SuggestedFriends />
                    <AudioPost />
                    <VideoPost />
                    <PremiumPost />
                    <SharedLinkPost />
                    <SponsorPost />
                    <LoadMore />
                  </div>

                  {/* Right Sidebar */}
                  <div className="col-lg-3">
                    <RightSidebar />
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

      {/* Popups & Overlays */}
      <NewPostPopup />
      <InvitePopup />
      <SendMessagePopup />
      <SideSlide />
    </div>
  );
}
