import { Component } from "react";
import classes from './Posts.module.css';

const Posts = (props) => {
    return(
        <li  className={classes.post}>
            <p className={classes.author}>{props.Name}</p>
            <p className={classes.text}> {props.tweet}</p>
        </li>
    )
}
export default Posts;