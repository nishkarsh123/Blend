import Posts from "./Posts";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState, useEffect } from "react";
import Modal from "./Modal";
const PostsList = (props) => {
  const [tweet, setTweet] = useState("");
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([{key: 0, name: "Max", tweet: "Max is in dubai, with his wife"}]);
  useEffect(() => {
    async function fetchPosts() {
        const response = await fetch ('http://localhost:8080/posts')
        const resData= await response.json();
        console.log(resData);
        setPosts(resData.posts);
    }
    fetchPosts();
  }, [])
  
const onSubmitHandler = (event) => {
    event.preventDefault();
    const postData = {
        key : Math.random(),
        name: name,
        tweet: tweet
    };
    fetch('http://localhost:8080/posts',{
        method: 'Post',
        body: JSON.stringify(postData),
        headers: {
            'Content-type': 'application/JSON'
        }
    });
    setPosts((existingPosts)=>[postData, ...existingPosts]);
    
    props.onClose();
}
  return (
    <>
      {props.viewModal && (
        <Modal onClose={props.onClose}>
          <NewPost setTweet={setTweet} setName={setName} onClose={props.onClose} onSubmitHandler={onSubmitHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((temp)=>(
        <Posts key={temp.key} Name={temp.name} tweet={temp.tweet} />
        ))}
      </ul>
    </>
  );
};

export default PostsList;
