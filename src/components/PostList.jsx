import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = () => {
    return (
        <>
        <NewPost/>
        <ul className={classes.posts}>
            <Post author='Bhanu Pratap' text='React Js is awesome'/>
            <Post author='Bhanu Miyan' text='React Js is awesome!!!!!'/>
        </ul>
        </>
    )

};
export default PostList;
