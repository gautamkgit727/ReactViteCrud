const RightSidebar = () => {
  const groups = [
    { img: "your-group1.jpg", name: "Good Group" },
    { img: "your-group2.jpg", name: "E-course Group" },
  ];

  const followers = [
    { img: "friend-avatar.jpg", name: "Kelly Bill" },
    { img: "friend-avatar2.jpg", name: "Issabel" },
    { img: "friend-avatar3.jpg", name: "Andrew" },
    { img: "friend-avatar4.jpg", name: "Sophia" },
    { img: "friend-avatar5.jpg", name: "Allen" },
  ];

  return (
    <aside className="sidebar static right">
      {/* Your Groups */}
      <div className="widget">
        <h4 className="widget-title">Your Groups</h4>
        <ul className="ak-groups">
          {groups.map((g, i) => (
            <li key={i}>
              <figure><img src={`images/resources/${g.img}`} alt="" /></figure>
              <div className="your-grp">
                <h5><a href="group-detail.html">{g.name}</a></h5>
                <a href="#"><i className="icofont-bell-alt"></i>Notifilactions <span>13</span></a>
                <a href="group-feed.html" className="promote">view feed</a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Suggested Group */}
      <div className="widget">
        <h4 className="widget-title">Suggested Group</h4>
        <div className="sug-caro">
          <div className="friend-box">
            <figure>
              <img alt="" src="images/resources/sidebar-info.jpg" />
              <span>Members: 505K</span>
            </figure>
            <div className="frnd-meta">
              <img alt="" src="images/resources/frnd-figure2.jpg" />
              <div className="frnd-name">
                <a href="#">Social Research</a>
                <span>@biolabest</span>
              </div>
              <a className="main-btn2" href="#">Join Community</a>
            </div>
          </div>
          <div className="friend-box">
            <figure>
              <img alt="" src="images/resources/sidebar-info2.jpg" />
              <span>Members: 505K</span>
            </figure>
            <div className="frnd-meta">
              <img alt="" src="images/resources/frnd-figure3.jpg" />
              <div className="frnd-name">
                <a href="#">Bio Labest Group</a>
                <span>@biolabest</span>
              </div>
              <a className="main-btn2" href="#">Join Community</a>
            </div>
          </div>
        </div>
      </div>

      {/* Ask Question */}
      <div className="widget">
        <h4 className="widget-title">Ask Research Question?</h4>
        <div className="ask-question">
          <i className="icofont-question-circle"></i>
          <h6>Ask questions in Q&A to get help from experts in your field.</h6>
          <a className="ask-qst" href="#">Ask a question</a>
        </div>
      </div>

      {/* Events */}
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

      {/* Sponsored */}
      <div className="widget">
        <span><i className="icofont-globe"></i> Sponsored</span>
        <ul className="sponsors-ad">
          <li>
            <figure><img src="images/resources/sponsor.jpg" alt="" /></figure>
            <div className="sponsor-meta">
              <h5><a href="#">IQ Options Broker</a></h5>
              <a href="#" target="_blank">www.iqvie.com</a>
            </div>
          </li>
          <li>
            <figure><img src="images/resources/sponsor2.jpg" alt="" /></figure>
            <div className="sponsor-meta">
              <h5><a href="#">BM Fashion Designer</a></h5>
              <a href="#" target="_blank">www.abcd.com</a>
            </div>
          </li>
        </ul>
      </div>

      {/* Who's Following */}
      <div className="widget stick-widget">
        <h4 className="widget-title">Who's follownig</h4>
        <ul className="followers">
          {followers.map((f, i) => (
            <li key={i}>
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
};

export default RightSidebar;
