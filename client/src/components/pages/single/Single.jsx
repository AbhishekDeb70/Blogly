import { SinglePost } from "../../SinglePost/SinglePost"
import { Sidebar } from "../../sidebar/Sidebar"
import "./single.css"

export const Single = () => {
  return (
    <div className="single">
         <SinglePost/>
        <Sidebar/>
    </div>
  )
}
