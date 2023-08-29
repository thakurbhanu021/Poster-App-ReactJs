import classes from './Post.module.css';

const Post = (props) => {
    return (
        <li className={classes.post}>
            <h1 className={classes.author}>{props.author}</h1>
            <p className={classes.text}>{props.text}</p>
        </li>
    )
}

export default Post;