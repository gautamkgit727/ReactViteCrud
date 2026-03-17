import PostActions from './PostActions';
import PostStats from './PostStats';
import PostMenu from './PostMenu';
import Carousel from './Carousel';
import ChatRoom from './ChatRoom';
import Suggested from './Suggested';
import SponsorsAds from './SponsorsAds';


const VerifiedBadge = ({ color = "#7fba00" }) => (
  <em>
    <svg style={{ verticalAlign: "middle" }} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
      <path fill={color} stroke={color} d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
    </svg>
  </em>
);

const MainFeed = () => {
  const stories = [
    { bg: "story-card.jpg", user: "user6.jpg", name: "Tamana Bhatia" },
    { bg: "story-card2.jpg", user: "user7.jpg", name: "Emily Caros" },
    { bg: "story-card3.jpg", user: "user8.jpg", name: "Daniel Cardos" },
    { bg: "story-card4.jpg", user: "user4.jpg", name: "Emma Watson" },
  ];

  const videos = [
    { href: "https://www.youtube.com/watch?v=8iZTb9NWbz8", user: "user4.jpg", name: "Frank J.", time: "1 year ago", views: "3.1k" },
    { href: "https://www.youtube.com/watch?v=8itUNRIWVIs", user: "user2.jpg", name: "Maria K.", time: "2 weeks ago", views: "1.1k" },
    { href: "https://www.youtube.com/watch?v=JpxsRwnRwCQ", user: "user1.jpg", name: "Jack Carter", time: "4 weeks ago", views: "20k" },
    { href: "https://www.youtube.com/watch?v=WNeLUngb-Xg", user: "user3.jpg", name: "Fawad Jan", time: "1 Month ago", views: "8k" },
  ];

  return (
    <div className="col-lg-6">

      {/* Tab Buttons */}
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

      {/* ===== RECENT STORIES ===== */}
      <div className="story-card">
        <div className="story-title">
          <h5>Recent Stories</h5>
          <a href="#">See all</a>
        </div>
        <div style={{ display: "flex", overflowX: "auto", scrollbarWidth: "none" }}>
          <div className="story-wraper" style={{ flexShrink: 0, minWidth: "113px" }}>
            <img src="images/resources/story-card5.jpg" alt=""
              style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }} />
            <div className="users-dp"><img src="images/resources/user3.jpg" alt="" /></div>
            <a className="add-new-stry" href="#"><i className="icofont-plus"></i></a>
            <span>Add Your Story</span>
          </div>
          {stories.map((s, i) => (
            <div className="story-wraper" key={i} style={{ flexShrink: 0, minWidth: "113px" }}>
              <img src={`images/resources/${s.bg}`} alt=""
                style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }} />
              <div className="users-dp"><img src={`images/resources/${s.user}`} alt="" /></div>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CHAT ROOMS with arrows ===== */}
      <div className="main-wraper">
        <div className="chatroom-title">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="feather feather-tv">
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
              <polyline points="17 2 12 7 7 2"></polyline>
            </svg>
          </i>
          <span>Chat Rooms <em>Video chat with friends</em></span>
          <a className="create-newroom" href="#">Create Room</a>
        </div>

        <div style={{ padding: "12px 0" }}>
          <ChatRoom />
          {/* <Carousel
            items={chatRooms}
            itemWidth={140}
            renderItem={(room) => (
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                border: "1px solid #eee", borderRadius: "8px",
                padding: "15px 8px", textAlign: "center",
                background: "#fff",
              }}>
                <div style={{ position: "relative", marginBottom: "8px" }}>
                  <img src={`images/resources/${room.img}`} alt=""
                    style={{ width: "45px", height: "45px", borderRadius: "50%", objectFit: "cover" }} />
                  <span className={`status ${room.status}`}
                    style={{ position: "absolute", bottom: "2px", right: "2px" }}></span>
                </div>
                <span style={{ fontSize: "13px", fontWeight: "500", marginBottom: "8px", display: "block" }}>
                  {room.name}
                </span>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <a className="join" href="#" style={{ fontSize: "12px", padding: "4px 10px" }}>Join</a>
                  <a className="say-hi send-mesg" href="#"><i className="icofont-facebook-messenger"></i></a>
                </div>
              </div>
            )}
          /> */}
        </div>
      </div>

      {/* ===== SUGGESTED FRIENDS with arrows ===== */}
      <Suggested />

      {/* Audio Post */}
      <div className="main-wraper mt-4">
        <div className="user-post">
          <div className="friend-info">
            <figure><VerifiedBadge /><img alt="" src="images/resources/user7.jpg" /></figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Andrew</a> Post Audio</ins>
              <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
            </div>
            <div className="post-meta">
              <p>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
              <div className="aud-vid">
                <audio className="audio-player" controls>
                  <source src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3" type="audio/mp3" />
                </audio>
              </div>
              <PostStats /><PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* Video Post */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure><VerifiedBadge /><img alt="" src="images/resources/user6.jpg" /></figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Elie Honey</a> Podcast</ins>
              <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
            </div>
            <div className="post-meta">
              <a href="post-detail.html" className="post-title">Supervision as a Personnel Development Device</a>
              <p>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
              <div className="aud-vid">
                <div className="video-player">
                  <iframe src="https://www.youtube.com/embed/RBfJR4oRC0k?modestbranding=1&rel=0"
                    allowFullScreen allow="autoplay" title="video"></iframe>
                </div>
              </div>
              <PostStats /><PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* Text Post */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure><VerifiedBadge /><img alt="" src="images/resources/user1.jpg" /></figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Jack Carter</a> Share Post</ins>
              <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
            </div>
            <div className="post-meta">
              <a href="post-detail.html" className="post-title">Supervision as a Personnel Development Device</a>
              <p>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
              <PostStats /><PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* Book/Premium Post */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure><VerifiedBadge color="#82828e" /><img alt="" src="images/resources/user2.jpg" /></figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Maria k.</a> Premium Product</ins>
              <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
            </div>
            <div className="post-meta">
              <figure className="premium-post"><img src="images/resources/book5.jpg" alt="" /></figure>
              <div className="premium">
                <a href="book-detail.html" className="post-title">Technicial words 2020 Book world</a>
                <p>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
                <a className="main-btn purchase-btn" href="book-detail.html"><i className="icofont-cart-alt"></i> Buy Now</a>
              </div>
              <PostStats /><PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* ===== VIDEOS PLAYLIST with arrows ===== */}
      <div className="main-wraper">
        <div className="wraper-title">
          <span><i className="icofont-video-alt"></i> Videos Play List</span>
          <a href="videos.html">See all Videos</a>
        </div>
        <div style={{ padding: "12px 0" }}>
          <Carousel
            items={videos}
            itemWidth={170}
            renderItem={(v) => {
              const videoId = v.href.split('v=')[1];
              return (
                <div style={{ borderRadius: "8px", overflow: "hidden", background: "#000" }}>
                  <a href={v.href} target="_blank" rel="noreferrer" style={{ display: "block", position: "relative" }}>
                    <img src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} alt={v.name}
                      style={{ width: "100%", height: "110px", objectFit: "cover", display: "block", opacity: 0.85 }} />
                    <span style={{
                      position: "absolute", top: "50%", left: "50%",
                      transform: "translate(-50%,-50%)",
                      width: "32px", height: "32px", background: "rgba(255,255,255,0.9)",
                      borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#333">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </span>
                  </a>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 8px", background: "#fff" }}>
                    <img src={`images/resources/${v.user}`} alt=""
                      style={{ width: "24px", height: "24px", borderRadius: "50%", objectFit: "cover" }} />
                    <span style={{ fontSize: "11px", fontWeight: "500" }}>{v.name}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 8px 8px", background: "#fff", fontSize: "10px", color: "#888" }}>
                    <span>{v.time}</span>
                    <span><i className="icofont-eye-open"></i> {v.views}</span>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>

      {/* Image Post */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure><VerifiedBadge /><img alt="" src="images/resources/user3.jpg" /></figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Turgut Alp</a> Create Post</ins>
              <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
            </div>
            <div className="post-meta">
              <figure>
                <a href="images/resources/album1.jpg">
                  <img src="images/resources/study.jpg" alt="" />
                </a>
              </figure>
              <a href="post-detail.html" className="post-title">Supervision as a Personnel Development Device</a>
              <p>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
              <PostStats /><PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* Image Album Post */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure><VerifiedBadge color="#82828e" /><img alt="" src="images/resources/user4.jpg" /></figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Saim turan</a> added image album</ins>
              <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
            </div>
            <div className="post-meta">
              <figure>
                <div className="img-bunch">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <figure><a href="images/resources/album1.jpg"><img src="images/resources/album1.jpg" alt="" /></a></figure>
                      <figure><a href="images/resources/album2.jpg"><img src="images/resources/album2.jpg" alt="" /></a></figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <figure><a href="images/resources/album6.jpg"><img src="images/resources/album6.jpg" alt="" /></a></figure>
                      <figure><a href="images/resources/album5.jpg"><img src="images/resources/album5.jpg" alt="" /></a></figure>
                      <figure>
                        <a href="images/resources/album4.jpg"><img src="images/resources/album4.jpg" alt="" /></a>
                        <div className="more-photos"><span>+15</span></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </figure>
              <a href="post-detail.html" className="post-title">Supervision as a Personnel Development Device</a>
              <p>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
              <PostStats /><PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* Shared Link Post */}
      {/* <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure><VerifiedBadge /><img alt="" src="images/resources/user5.jpg" /></figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Andrew Jhon</a> Shared Link</ins>
              <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
            </div>
            <div className="post-meta">
              <em><a href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538" target="_blank" rel="noreferrer">https://themeforest.net/item/winku...</a></em>
              <figure><span>fetched-image</span><img src="images/resources/laptop.png" alt="" /></figure>
              <a href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538" className="post-title" target="_blank" rel="noreferrer">Winku Social Network with Company Pages Theme</a>
              <p>"Winku" is a social community mobile app kit with features for sharing blog, posts, timeline, groups, and much more.</p>
              <PostStats /><PostActions />
            </div>
          </div>
        </div>
      </div> */}


      {/* Andrew Jhon Shared Link Post with comments */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure><VerifiedBadge /><img alt="" src="images/resources/user5.jpg" /></figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Andrew Jhon</a> Shared Link</ins>
              <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
            </div>
            <div className="post-meta">
              <em>
                <a href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538" target="_blank" rel="noreferrer">
                  https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538
                </a>
              </em>
              <figure>
                <span>fetched-image</span>
                <img src="images/resources/laptop.png" alt="" />
              </figure>
              <a href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538" className="post-title" target="_blank" rel="noreferrer">
                Winku Social Network with Company Pages Theme
              </a>
              <p>
                &quot;Winku&quot; is a social community mobile app kit with features. user can use this app for sharing blog, posts, timeline, create Group, Create Pages, chat/Messages, Movies sharing, QA, and Much More.
              </p>
              <PostStats />
              {/* PostActions with comments open */}
              <div className="stat-tools">
                <div className="box">
                  <div className="Like">
                    <a className="Like__link"><i className="icofont-like"></i> Like</a>
                    <div className="Emojis">
                      <div className="Emoji Emoji--like"><div className="icon icon--like"></div></div>
                      <div className="Emoji Emoji--love"><div className="icon icon--heart"></div></div>
                      <div className="Emoji Emoji--haha"><div className="icon icon--haha"></div></div>
                      <div className="Emoji Emoji--wow"><div className="icon icon--wow"></div></div>
                      <div className="Emoji Emoji--sad"><div className="icon icon--sad"></div></div>
                      <div className="Emoji Emoji--angry"><div className="icon icon--angry"></div></div>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="Emojis">
                    <div className="Emoji Emoji--like"><div className="icon icon--like"></div></div>
                    <div className="Emoji Emoji--love"><div className="icon icon--heart"></div></div>
                    <div className="Emoji Emoji--haha"><div className="icon icon--haha"></div></div>
                    <div className="Emoji Emoji--wow"><div className="icon icon--wow"></div></div>
                    <div className="Emoji Emoji--sad"><div className="icon icon--sad"></div></div>
                    <div className="Emoji Emoji--angry"><div className="icon icon--angry"></div></div>
                  </div>
                </div>
                <a href="#" className="comment-to"><i className="icofont-comment"></i> Comment</a>
                <a href="#" className="share-to"><i className="icofont-share-alt"></i> Share</a>
                <div className="emoji-state">
                  {[
                    { img: "thumb.png", label: "Likes", names: ["Jhon Doe", "Amara Sin", "Sarah K."], more: "20+" },
                    { img: "heart.png", label: "Love", names: ["Amara Sin", "Jhon Doe"], more: "10+" },
                    { img: "smile.png", label: "Happy", names: ["Sarah K.", "Jhon Doe", "Amara Sin"], more: "100+" },
                    { img: "weep.png", label: "Dislike", names: ["Danial Carbal", "Amara Sin", "Sarah K."], more: "15+" },
                  ].map((e, i) => (
                    <div className="popover_wrapper" key={i}>
                      <a className="popover_title" href="#"><img alt="" src={`images/smiles/${e.img}`} /></a>
                      <div className="popover_content">
                        <span><img alt="" src={`images/smiles/${e.img}`} /> {e.label}</span>
                        <ul className="namelist">
                          {e.names.map((n, j) => <li key={j}>{n}</li>)}
                          <li><span>{e.more} more</span></li>
                        </ul>
                      </div>
                    </div>
                  ))}
                  <p>10+</p>
                </div>

                {/* Comments section — open by default (display: block) */}
                <div className="new-comment" style={{ display: "block" }}>
                  <form method="post">
                    <input type="text" placeholder="write comment" />
                    <button type="submit"><i className="icofont-paper-plane"></i></button>
                  </form>
                  <div className="comments-area">
                    <ul>
                      <li>
                        <figure><img alt="" src="images/resources/user1.jpg" /></figure>
                        <div className="commenter">
                          <h5><a href="#">Jack Carter</a></h5>
                          <span>2 hours ago</span>
                          <p>i think that some how, we learn who we really are and then live with that decision, great post!</p>
                          <span>you can view the more detail via link</span>
                          <a href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                        </div>
                        <a title="Like" href="#"><i className="icofont-heart"></i></a>
                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply"></i></a>
                      </li>
                      <li>
                        <figure><img alt="" src="images/resources/user2.jpg" /></figure>
                        <div className="commenter">
                          <h5><a href="#">Ching xang</a></h5>
                          <span>2 hours ago</span>
                          <p>i think that some how, we learn who we really are and then live with that decision, great post!</p>
                        </div>
                        <a title="Like" href="#"><i className="icofont-heart"></i></a>
                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Embed Post */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure><VerifiedBadge /><img alt="" src="images/resources/user2.jpg" /></figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Maria k.</a> Shared Link</ins>
              <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
            </div>
            <div className="post-meta">
              <em>
                <a href="https://www.youtube.com/embed/zdow47FQRfQ" target="_blank" rel="noreferrer">
                  https://www.youtube.com/embed/zdow47FQRfQ
                </a>
              </em>
              <iframe
                height="285"
                src="https://www.youtube.com/embed/zdow47FQRfQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="zdow47FQRfQ"
                style={{ width: "100%", border: "none" }}
              ></iframe>
              <p>
                Cookie? Biscuit? Bikkie? They all mean the same thing! Our lovely English teachers will quickly show you some pronunciation and vocabulary differences from Australia, America, and England!
              </p>
              <PostStats /><PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* GIF Post */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure><VerifiedBadge /><img alt="" src="images/resources/user2.jpg" /></figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Maria k.</a> Shared Link</ins>
              <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
            </div>
            <div className="post-meta">
              <img
                className="gif"
                src="images/giphy.png"
                data-gif="images/giphy-sample.gif"
                alt="gif"
              />
              <PostStats /><PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* Sponsored */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure><img alt="" src="images/resources/sponsor.png" /></figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Sponsors Ads</a></ins>
              <span><i className="icofont-globe"></i> Sponsor</span>
            </div>
            <SponsorsAds />
            {/* <div className="post-meta">
              <ul className="sponsored-caro">
                {[
                  { img: "sponsor-prod1.jpg", name: "Aloevera Juice 1 liter", price: "$24" },
                  { img: "sponsor-prod5.jpg", name: "Beauty Cosmetics", price: "$24" },
                  { img: "sponsor-prod4.jpg", name: "Overtime For Men", price: "$24" },
                  { img: "sponsor-prod3.jpg", name: "Redish Baby Items", price: "$24" },
                  { img: "sponsor-prod2.jpg", name: "Potato Baby Fider", price: "$24" },
                ].map((prod, i) => (
                  <li key={i}>
                    <figure><img src={`images/resources/${prod.img}`} alt="" /></figure>
                    <div className="sponsor-prod-name"><a href="#">{prod.name}</a><span>{prod.price}</span></div>
                    <a href="#" className="shop-btn">Shop Now</a>
                    <div className="share-info"><span>50 shares</span><span>20k Likes</span></div>
                    <div className="stat-tools">
                      <div className="box">
                        <div className="Like">
                          <a className="Like__link"><i className="icofont-like"></i> Like</a>
                          <div className="Emojis">
                            <div className="Emoji Emoji--like"><div className="icon icon--like"></div></div>
                            <div className="Emoji Emoji--love"><div className="icon icon--heart"></div></div>
                          </div>
                        </div>
                      </div>
                      <a href="#" className="share-to"><i className="icofont-share-alt"></i> Share</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      {/* Load More */}
      <div className="loadmore">
        <div className="sp sp-bars"></div>
        <a href="#" data-ripple="">Load More..</a>
      </div>

    </div>
  );
};

export default MainFeed;