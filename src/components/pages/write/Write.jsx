import "./write.css"

export const Write = () => {
  return (
    <div className="write">
        <img
            className="writeImg"
            src="https://shotkit.com/wp-content/uploads/2020/08/night-landscape-photography-featured.jpg"
            alt=""
        />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea
                    placeholder="Tell me  your story"
                    type="text"
                    className="writeInput writeText"
                ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
