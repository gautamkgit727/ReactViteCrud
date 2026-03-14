const PostMenu = () => (
  <div className="more">
    <div className="more-post-optns">
      <i>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      </i>
      <ul>
        <li><i className="icofont-pen-alt-1"></i>Edit Post<span>Edit This Post within a Hour</span></li>
        <li><i className="icofont-ban"></i>Hide Post<span>Hide This Post</span></li>
        <li><i className="icofont-ui-delete"></i>Delete Post<span>If inappropriate Post By Mistake</span></li>
        <li><i className="icofont-flag"></i>Report<span>Inappropriate content</span></li>
      </ul>
    </div>
  </div>
);

export default PostMenu;
