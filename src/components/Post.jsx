import { Link } from 'react-router-dom';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <li className={classes.post}>
            <Link to={props.id}>
            <h1 className={classes.author}>{props.author}</h1>
            <p className={classes.text}>{props.text}</p>
            </Link>
        </li>
    )
}

export default Post;