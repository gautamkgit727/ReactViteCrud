const Popups = () => {
  return (
    <>
      {/* Invite Colleague Popup */}
      <div className="wraper-invite">
        <div className="popup">
          <span className="popup-closed"><i className="icofont-close"></i></span>
          <div className="popup-meta">
            <div className="popup-head">
              <h5>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </i> Invite Colleagues
              </h5>
            </div>
            <div className="invitation-meta">
              <p>Enter an email address to invite a colleague or co-author to join you on socimo.</p>
              <form method="post" className="c-form">
                <input type="text" placeholder="Enter Email" />
                <button type="submit" className="main-btn">Invite</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Send Message Popup */}
      <div className="popup-wraper">
        <div className="popup">
          <span className="popup-closed"><i className="icofont-close"></i></span>
          <div className="popup-meta">
            <div className="popup-head">
              <h5>
                <i>
                  <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </i> Send Message
              </h5>
            </div>
            <div className="send-message">
              <form method="post" className="c-form">
                <input type="text" placeholder="Enter Name.." />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Write Message"></textarea>
                <div className="uploadimage">
                  <i className="icofont-file-jpg"></i>
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

      {/* Side Slide Messages & Notifications */}
      <div className="side-slide">
        <span className="popup-closed"><i className="icofont-close"></i></span>
        <div className="slide-meta">
          <ul className="nav nav-tabs slide-btns">
            <li className="nav-item"><a className="active" href="#messages" data-toggle="tab">Messages</a></li>
            <li className="nav-item"><a href="#notifications" data-toggle="tab">Notifications</a></li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active fade show" id="messages">
              <h4><i className="icofont-envelope"></i> messages</h4>
              <a href="#" className="send-mesg"><i className="icofont-edit"></i></a>
              <ul className="new-messages">
                {[
                  { img: "user1.jpg", name: "Ibrahim Ahmed", msg: "Helo dear i wanna talk to you" },
                  { img: "user2.jpg", name: "Fatima J.", msg: "Helo dear i wanna talk to you" },
                  { img: "user3.jpg", name: "Fawad Ahmed", msg: "Helo dear i wanna talk to you" },
                  { img: "user4.jpg", name: "Saim Turan", msg: "Helo dear i wanna talk to you" },
                  { img: "user5.jpg", name: "Alis wells", msg: "Helo dear i wanna talk to you" },
                ].map((m, i) => (
                  <li key={i}>
                    <figure><img src={`images/resources/${m.img}`} alt="" /></figure>
                    <div className="mesg-info">
                      <span>{m.name}</span>
                      <a href="#">{m.msg}</a>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#" className="main-btn" data-ripple="">view all</a>
            </div>
            <div className="tab-pane fade" id="notifications">
              <h4><i className="icofont-bell-alt"></i> notifications</h4>
              <ul className="notificationz">
                {[
                  { img: "user5.jpg", action: "recommend your post" },
                  { img: "user4.jpg", action: "share your post", strong: "a good time today!" },
                  { img: "user2.jpg", action: "recommend your post" },
                  { img: "user1.jpg", action: "share your post", strong: "a good time today!" },
                  { img: "user3.jpg", action: "recommend your post" },
                ].map((n, i) => (
                  <li key={i}>
                    <figure><img src={`images/resources/${n.img}`} alt="" /></figure>
                    <div className="mesg-info">
                      <span>Alis wells</span>
                      <a href="#">{n.action} {n.strong && <strong>{n.strong}</strong>}</a>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#" className="main-btn" data-ripple="">view all</a>
            </div>
          </div>
        </div>
      </div>

      {/* New Post Popup */}
      <div className="post-new-popup">
        <div className="popup" style={{ width: "800px" }}>
          <span className="popup-closed"><i className="icofont-close"></i></span>
          <div className="popup-meta">
            <div className="popup-head">
              <h5>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </i>Create New Post
              </h5>
            </div>
            <div className="post-new">
              <div className="post-newmeta">
                <ul className="post-categoroes">
                  <li><i className="icofont-camera"></i> Photo / Video</li>
                  <li><i className="icofont-google-map"></i> Post Location</li>
                  <li><i className="icofont-file-gif"></i> Post Gif</li>
                  <li><i className="icofont-ui-tag"></i> Tag to Friend</li>
                  <li><i className="icofont-users"></i> Share in Group</li>
                  <li><i className="icofont-link"></i> Share Link</li>
                  <li><i className="icofont-video-cam"></i> Go Live</li>
                  <li><i className="icofont-sale-discount"></i> Post Online Course</li>
                  <li><i className="icofont-read-book"></i> Post A Book</li>
                  <li><i className="icofont-globe"></i> Post an Ad</li>
                </ul>
              </div>
              <form method="post" className="c-form">
                <textarea id="emojionearea1" placeholder="What's On Your Mind?"></textarea>
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

      {/* Share Wrapper */}
      <div className="share-wraper">
        <div className="share-options">
          <span className="close-btn"><i className="icofont-close-circled"></i></span>
          <h5>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
            </i>Share To!
          </h5>
          <form method="post">
            <textarea placeholder="Write Something"></textarea>
          </form>
          <ul>
            <li><a href="#">Your Timeline</a></li>
            <li className="friends"><a href="#">To Friends</a></li>
            <li className="socialz"><a className="active" href="#">Social Media</a></li>
          </ul>
          <div style={{ display: "block" }} className="social-media">
            <ul>
              <li><a href="#" className="facebook"><i className="icofont-facebook"></i></a></li>
              <li><a href="#" className="twitter"><i className="icofont-twitter"></i></a></li>
              <li><a href="#" className="instagram"><i className="icofont-instagram"></i></a></li>
              <li><a href="#" className="pinterest"><i className="icofont-pinterest"></i></a></li>
              <li><a href="#" className="youtube"><i className="icofont-youtube"></i></a></li>
              <li><a href="#" className="dribble"><i className="icofont-dribbble"></i></a></li>
              <li><a href="#" className="behance"><i className="icofont-behance-original"></i></a></li>
            </ul>
          </div>
          <button type="submit" className="main-btn">Publish</button>
        </div>
      </div>

      {/* Cart Button */}
      <div className="cart-product">
        <a href="product-cart.html" title="View Cart" data-toggle="tooltip"><i className="icofont-cart-alt"></i></a>
        <span>03</span>
      </div>

      {/* Chat Button */}
      <div className="chat-live">
        <a className="chat-btn" href="#" title="Start Live Chat" data-toggle="tooltip"><i className="icofont-facebook-messenger"></i></a>
        <span>07</span>
      </div>

      {/* Chat Box */}
      <div className="chat-box">
        <div className="chat-head">
          <h4>New Messages</h4>
          <span className="clozed"><i className="icofont-close-circled"></i></span>
          <form method="post">
            <input type="text" placeholder="To.." />
          </form>
        </div>
        <div className="user-tabs">
          <ul className="nav nav-tabs">
            <li className="nav-item"><a className="active" href="#link1" data-toggle="tab">All Friends</a></li>
            <li className="nav-item"><a href="#link2" data-toggle="tab">Active</a><em>3</em></li>
            <li className="nav-item"><a href="#link3" data-toggle="tab">Groups</a></li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active fade show" id="link1">
              <div className="friend">
                {[
                  { img: "user1.jpg", name: "Oliver", status: "online" },
                  { img: "user2.jpg", name: "Amelia", status: "away" },
                  { img: "user3.jpg", name: "George", status: "offline" },
                  { img: "user4.jpg", name: "Jacob", status: "online" },
                  { img: "user5.jpg", name: "Poppy", status: "away" },
                  { img: "user6.jpg", name: "Sophia", status: "online" },
                  { img: "user7.jpg", name: "Leo king", status: "away" },
                ].map((f, i) => (
                  <a href="#" key={i}>
                    <figure>
                      <img src={`images/resources/${f.img}`} alt="" />
                      <span className={`status ${f.status}`}></span>
                    </figure>
                    <span>{f.name}</span>
                    <i className="icofont-check-circled"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="chat-card">
          <div className="chat-card-head">
            <img src="images/resources/user13.jpg" alt="" />
            <h6>George Floyd</h6>
            <div className="frnd-opt">
              <span className="close-mesage"><i className="icofont-close"></i></span>
            </div>
          </div>
          <div className="chat-list">
            <ul>
              <li className="me">
                <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt="" /></div>
                <div className="notification-event">
                  <span className="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I'm gonna be handling the gifts and Jake's gonna get the drinks</span>
                  <span className="notification-date">
                    <time className="entry-date updated">Yesterday at 8:10pm</time>
                    <i><img src="images/d-tick.png" alt="" /></i>
                  </span>
                </div>
              </li>
              <li className="you">
                <div className="chat-thumb"><img src="images/resources/chatlist2.jpg" alt="" /></div>
                <div className="notification-event">
                  <span className="chat-message-item">Hi James! Please remember to buy the food for tomorrow!</span>
                  <span className="notification-date">
                    <time className="entry-date updated">Yesterday at 8:10pm</time>
                    <i><img src="images/d-tick.png" alt="" /></i>
                  </span>
                </div>
              </li>
            </ul>
            <form className="text-box">
              <textarea placeholder="Write Message..."></textarea>
              <div className="add-smiles">
                <span><img src="images/smiles/happy-3.png" alt="" /></span>
              </div>
              <button type="submit"><i className="icofont-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>

      {/* Create Room Popup */}
      <div className="createroom-popup">
        <div className="popup">
          <span className="popup-closed"><i className="icofont-close"></i></span>
          <div className="popup-meta">
            <div className="popup-head text-center">
              <h5 className="only-icon"><i className="icofont-video-cam"></i></h5>
            </div>
            <div className="room-meta">
              <h4>Create Your Room</h4>
              <ul>
                <li>
                  <i className="icofont-hand"></i>
                  <div><h6>Room Activity</h6><span>Jack&apos;s Room</span></div>
                  <div className="checkbox">
                    <input type="checkbox" id="checkbox3" />
                    <label htmlFor="checkbox3"></label>
                  </div>
                </li>
                <li>
                  <i className="icofont-clock-time"></i>
                  <div><h6>Start Time</h6><span>Now</span></div>
                  <div className="checkbox">
                    <input type="checkbox" id="checkbox4" />
                    <label htmlFor="checkbox4"></label>
                  </div>
                </li>
                <li>
                  <i className="icofont-users-alt-4"></i>
                  <div><h6>Invite to All Friends</h6><span>Allow All friends to see this room</span></div>
                  <div className="checkbox">
                    <input type="checkbox" id="checkbox5" />
                    <label htmlFor="checkbox5"></label>
                  </div>
                </li>
              </ul>
              <span>Your room isn&apos;t visible until you invite people after you&apos;ve created it.</span>
              <a href="#" className="main-btn full-width">Create Room</a>
            </div>
          </div>
        </div>
      </div>

      {/* Auto Popup */}
      {/* <div className="auto-popup">
        <div className="popup-innner">
          <div className="popup-head">
            <h4>We want to hear from you!</h4>
          </div>
          <div className="popup-meta">
            <span>What are you struggling with right now? what we can help you with?</span>
            <form method="post" className="inquiry-about">
              <input type="text" placeholder="Your Answer" />
              <h5>How did you hear about us?</h5>
              {["Facebook", "instagram", "Google Search", "Twitter", "Whatsapp", "Other"].map((opt, i) => (
                <label key={i}><input type="radio" name="hear" /> {opt}</label>
              ))}
              <input type="text" placeholder="Write Other" />
              <button type="submit" className="primary button">Submit</button>
              <button className="canceled button outline-primary" type="button">Cancel</button>
            </form>
          </div>
        </div>
      </div> */}

      {/* Image Modal */}
      <div className="modal fade" id="img-comt">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
              <div className="row merged">
                <div className="col-lg-9">
                  <div className="pop-image">
                    <div className="pop-item">
                      <figure><img src="images/resources/blog-detail.jpg" alt="" /></figure>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="commentbar">
                    <div className="user">
                      <figure><img src="images/resources/user1.jpg" alt="" /></figure>
                      <div className="user-information">
                        <h4><a href="#">Danile Walker</a></h4>
                        <span>2 hours ago</span>
                      </div>
                      <a href="#" data-ripple="">Follow</a>
                    </div>
                    <div className="new-comment" style={{ display: "block" }}>
                      <form method="post">
                        <input type="text" placeholder="write comment" />
                        <button type="submit"><i className="icofont-paper-plane"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popups;
