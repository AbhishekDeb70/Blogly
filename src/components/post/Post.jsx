import "./post.css"

export const Post = () => {
  return (
    <div className="post">
        <img
        className="postImg"
        src="https://wallpaperaccess.com/full/3292878.jpg"
        alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Heloo snc xnshbxhbshxjnjksn please developer gvvv</span>
            <br />
            <span className="postDate">1hr ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti quo quibusdam cum quas quam, molestiae, ab repudiandae amet, placeat vel possimus. Aliquam quod quae repudiandae inventore id nostrum voluptatibus!
        </p>
    </div>
  )
}
