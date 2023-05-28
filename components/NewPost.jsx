import classes from "./NewPost.module.css";

function NewPost(props) {
  const changeBodyHandler = (event) => {
    props.setTweet(event.target.value);
  };
  const changeNameHandler = (event) => {
    props.setName(event.target.value);
  };
  return (
    <form className={classes.form} onSubmit={props.onSubmitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeNameHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          cancel
        </button>
        <button type="submit">submit</button>
      </p>
    </form>
  );
}

export default NewPost;
