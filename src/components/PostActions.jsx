const PostActions = () => (
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
        { img: "thumb.png", label: "Likes", names: ["Jhon Doe","Amara Sin","Sarah K."], more: "20+" },
        { img: "heart.png", label: "Love", names: ["Amara Sin","Jhon Doe"], more: "10+" },
        { img: "smile.png", label: "Happy", names: ["Sarah K.","Jhon Doe","Amara Sin"], more: "100+" },
        { img: "weep.png", label: "Dislike", names: ["Danial Carbal","Amara Sin","Sarah K."], more: "15+" },
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
    <div className="new-comment" style={{ display: "none" }}>
      <form method="post">
        <input type="text" placeholder="write comment" />
        <button type="submit"><i className="icofont-paper-plane"></i></button>
      </form>
      <div className="comments-area">
        <ul>
          {[
            { img: "user1.jpg", name: "Jack Carter", comment: "i think that some how, we learn who we really are and then live with that decision, great post!", link: true },
            { img: "user2.jpg", name: "Ching xang", comment: "i think that some how, we learn who we really are and then live with that decision, great post!" },
          ].map((c, i) => (
            <li key={i}>
              <figure><img alt="" src={`images/resources/${c.img}`} /></figure>
              <div className="commenter">
                <h5><a href="#">{c.name}</a></h5>
                <span>2 hours ago</span>
                <p>{c.comment}</p>
                {c.link && <><span>you can view the more detail via link</span><a href="https://www.youtube.com/watch?v=HpZgwHU1GcI" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=HpZgwHU1GcI</a></>}
              </div>
              <a title="Like" href="#"><i className="icofont-heart"></i></a>
              <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply"></i></a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default PostActions;
