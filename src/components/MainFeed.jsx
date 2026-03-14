import PostActions from './PostActions';
import PostStats from './PostStats';
import PostMenu from './PostMenu';

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

  const chatRooms = [
    { img: "user2.jpg", name: "Sara's Room", status: "online" },
    { img: "user3.jpg", name: "jawad's Room", status: "offline" },
    { img: "user4.jpg", name: "Jack's Room", status: "away" },
    { img: "user5.jpg", name: "jobidn's Room", status: "online" },
    { img: "user6.jpg", name: "Emily's Room", status: "offline" },
  ];

  const suggestedPeople = [
    { img: "speak-1.jpg", name: "Amy Watson" },
    { img: "speak-2.jpg", name: "Muhammad Khan" },
    { img: "speak-3.jpg", name: "Sadia Gill" },
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
            <li>
              <a href="#">
                <i><img src="images/image.png" alt="" /></i>
                <span>Photo/Video</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i><img src="images/activity.png" alt="" /></i>
                <span>Feeling/Activity</span>
              </a>
            </li>
            <li>
              <a href="live-stream.html">
                <i><img src="images/live-stream.png" alt="" /></i>
                <span>Live Stream</span>
              </a>
            </li>
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
        {stories.map((s, i) => (
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
          {chatRooms.map((room, i) => (
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
              {suggestedPeople.map((p, i) => (
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

      {/* Audio Post */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure>
              <VerifiedBadge />
              <img alt="" src="images/resources/user7.jpg" />
            </figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Andrew</a> Post Audio</ins>
              <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
            </div>
            <div className="post-meta">
              <p>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
              <div className="aud-vid">
                <audio id="plyr-audio-player" className="audio-player" controls>
                  <source src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3" type="audio/mp3" />
                  <source src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg" type="audio/ogg" />
                </audio>
              </div>
              <PostStats />
              <PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* Video Post */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure>
              <VerifiedBadge />
              <img alt="" src="images/resources/user6.jpg" />
            </figure>
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
                  <iframe
                    src="https://www.youtube.com/embed/RBfJR4oRC0k?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
                    allowFullScreen
                    allow="autoplay"
                    title="video"
                  ></iframe>
                </div>
              </div>
              <PostStats />
              <PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* Text Post */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure>
              <VerifiedBadge />
              <img alt="" src="images/resources/user1.jpg" />
            </figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Jack Carter</a> Share Post</ins>
              <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
            </div>
            <div className="post-meta">
              <a href="post-detail.html" className="post-title">Supervision as a Personnel Development Device</a>
              <p>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
              <PostStats />
              <PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* Book/Premium Post */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure>
              <VerifiedBadge color="#82828e" />
              <img alt="" src="images/resources/user2.jpg" />
            </figure>
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
              <PostStats />
              <PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* Videos Playlist */}
      <div className="main-wraper">
        <div className="wraper-title">
          <span><i className="icofont-video-alt"></i> Videos Play List</span>
          <a href="videos.html">See all Videos</a>
        </div>
        <div className="videos-caro">
          {[
            { href: "https://www.youtube.com/watch?v=8iZTb9NWbz8", user: "user4.jpg", name: "Frank J.", time: "1 year ago", views: "3.1k" },
            { href: "https://www.youtube.com/watch?v=8itUNRIWVIs", user: "user2.jpg", name: "Maria K.", time: "2 weeks ago", views: "1.1k" },
            { href: "https://www.youtube.com/watch?v=JpxsRwnRwCQ", user: "user1.jpg", name: "Jack Carter", time: "4 weeks ago", views: "20k" },
            { href: "https://www.youtube.com/watch?v=WNeLUngb-Xg", user: "user3.jpg", name: "Fawad Jan", time: "1 Month ago", views: "8k" },
          ].map((v, i) => (
            <div className="item-video" data-merge="2" key={i}>
              <a className="owl-video" href={v.href}></a>
              <div className="posted-user">
                <img src={`images/resources/${v.user}`} alt="" />
                <span>{v.name}</span>
              </div>
              <div className="vid-info">
                <span>{v.time}</span>
                <span><i className="icofont-eye-open"></i> {v.views}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Post */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure>
              <VerifiedBadge />
              <img alt="" src="images/resources/user3.jpg" />
            </figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Turgut Alp</a> Create Post</ins>
              <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
            </div>
            <div className="post-meta">
              <figure>
                <a data-toggle="modal" data-target="#img-comt" href="images/resources/album1.jpg">
                  <img src="images/resources/study.jpg" alt="" />
                </a>
              </figure>
              <a href="post-detail.html" className="post-title">Supervision as a Personnel Development Device</a>
              <p>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
              <PostStats />
              <PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* Image Album Post */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure>
              <VerifiedBadge color="#82828e" />
              <img alt="" src="images/resources/user4.jpg" />
            </figure>
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
                      <figure>
                        <a data-toggle="modal" data-target="#img-comt" href="images/resources/album1.jpg">
                          <img src="images/resources/album1.jpg" alt="" />
                        </a>
                      </figure>
                      <figure>
                        <a data-toggle="modal" data-target="#img-comt" href="images/resources/album2.jpg">
                          <img src="images/resources/album2.jpg" alt="" />
                        </a>
                      </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <figure>
                        <a data-toggle="modal" data-target="#img-comt" href="images/resources/album6.jpg">
                          <img src="images/resources/album6.jpg" alt="" />
                        </a>
                      </figure>
                      <figure>
                        <a data-toggle="modal" data-target="#img-comt" href="images/resources/album5.jpg">
                          <img src="images/resources/album5.jpg" alt="" />
                        </a>
                      </figure>
                      <figure>
                        <a data-toggle="modal" data-target="#img-comt" href="images/resources/album4.jpg">
                          <img src="images/resources/album4.jpg" alt="" />
                        </a>
                        <div className="more-photos"><span>+15</span></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </figure>
              <a href="post-detail.html" className="post-title">Supervision as a Personnel Development Device</a>
              <p>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
              <PostStats />
              <PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* Shared Link Post */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure>
              <VerifiedBadge />
              <img alt="" src="images/resources/user5.jpg" />
            </figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Andrew Jhon</a> Shared Link</ins>
              <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
            </div>
            <div className="post-meta">
              <em><a href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538" target="_blank" rel="noreferrer">https://themeforest.net/item/winku-social-network-toolkit...</a></em>
              <figure>
                <span>fetched-image</span>
                <img src="images/resources/laptop.png" alt="" />
              </figure>
              <a href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538" className="post-title" target="_blank" rel="noreferrer">Winku Social Network with Company Pages Theme</a>
              <p>"Winku" is a social community mobile app kit with features for sharing blog, posts, timeline, groups, and much more.</p>
              <PostStats />
              <PostActions />
            </div>
          </div>
        </div>
      </div>

      {/* Sponsored Carousel */}
      <div className="main-wraper">
        <div className="user-post">
          <div className="friend-info">
            <figure><img alt="" src="images/resources/sponsor.png" /></figure>
            <div className="friend-name">
              <PostMenu />
              <ins><a href="time-line.html">Sponsors Ads</a></ins>
              <span><i className="icofont-globe"></i> Sponsor</span>
            </div>
            <div className="post-meta">
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
                    <div className="sponsor-prod-name">
                      <a href="#">{prod.name}</a>
                      <span>{prod.price}</span>
                    </div>
                    <a href="#" className="shop-btn">Shop Now</a>
                    <div className="share-info">
                      <span>50 shares</span>
                      <span>20k Likes</span>
                    </div>
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
            </div>
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
