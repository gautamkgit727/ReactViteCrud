const LeftSidebar = () => {
  const now = new Date();
  const recentBlogs = [
    { img: "recentlink-1.jpg", title: "Moira's fade reach much farther...", time: "2 weeks ago" },
    { img: "recentlink-2.jpg", title: "Daniel asks The voice of doomfist...", time: "3 months ago" },
    { img: "recentlink-3.jpg", title: "The socimo over watch scandals.", time: "1 day before" },
  ];

  const usefulLinks = ["about", "career", "advertise", "socimo Apps", "socimo Blog", "Help", "socimo Gifts", "content policy", "User Policy"];

  // Date
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dateStr = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
  const dateEl = document.getElementById("date");
  if (dateEl) dateEl.textContent = dateStr;

  return (
    <aside className="sidebar static left">
      {/* Clock Widget */}
      <div className="widget whitish low-opacity">
        <img src="images/time-clock.png" alt="" />
        <div className="bg-image" style={{ backgroundImage: "url(images/resources/time-bg.jpg)" }}></div>
        <div className="date-time">
          <div className="realtime">
            <span id="hours">00</span>
            <span id="point">:</span>
            <span id="min">00</span>
          </div>
          <span id="date">{dateStr}</span>
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
          <li><i className="icofont-plus-square"></i> <a href="#">Upload Your Picture</a><em>10%</em></li>
          <li><i className="icofont-plus-square"></i> <a href="#">Your University?</a><em>20%</em></li>
          <li><i className="icofont-plus-square"></i> <a href="#">Add Payment Method</a><em>20%</em></li>
        </ul>
      </div>

      {/* Advertisement */}
      <div className="advertisment-box">
        <h4><i className="icofont-info-circle"></i> advertisment</h4>
        <figure>
          <a href="#"><img src="images/resources/ad-widget2.gif" alt="" /></a>
        </figure>
      </div>

      {/* Popular Courses */}
      <div className="widget">
        <h4 className="widget-title"><i className="icofont-flame-torch"></i> Popular Courses</h4>
        <ul className="premium-course">
          <li>
            <figure>
              <img src="images/resources/course-5.jpg" alt="" />
              <span className="tag">Free</span>
            </figure>
            <div className="vid-course">
              <h5><a href="course-detail.html">Wordpress Online video course</a></h5>
              <ins className="price">$19/M</ins>
            </div>
          </li>
          <li>
            <figure>
              <img src="images/resources/course-3.jpg" alt="" />
              <span className="tag">Premium</span>
            </figure>
            <div className="vid-course">
              <h5><a href="course-detail.html">Node JS Online video course</a></h5>
              <ins className="price">$29/M</ins>
            </div>
          </li>
        </ul>
      </div>

      {/* Recent Blogs */}
      <div className="widget">
        <h4 className="widget-title">Recent Blogs <a className="see-all" href="#">See All</a></h4>
        <ul className="recent-links">
          {recentBlogs.map((blog, i) => (
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

      {/* Profile CTA */}
      <div className="widget">
        <h4 className="widget-title">Your profile has a new Experience section</h4>
        <p>Showcase your professional experience and education to help potential employers and collaborators find and contact you about career opportunities.</p>
        <a className="main-btn" href="profile.html" data-ripple="">view profile</a>
      </div>

      {/* Useful Links */}
      <div className="widget web-links stick-widget">
        <h4 className="widget-title">Useful Links <a href="#" className="see-all">See All</a></h4>
        <ul>
          {usefulLinks.map((link, i) => (
            <li key={i}><i className="icofont-dotted-right"></i> <a href="#">{link}</a></li>
          ))}
        </ul>
        <p>&copy; Socimo 2020. All Rights Reserved.</p>
      </div>
    </aside>
  );
};

export default LeftSidebar;
