import React from "react";
import Post from "./Post/Post";
import classes from'./MyPosts.module.css'

const MyPosts = (props) => {
  // let posts = [
  //   {id: 1, message: 'Hi how are you', likesCount: 12},
  //   {id: 2, message: 'It is my first post', likesCount: 11}, 
  //   {id: 3, message: 'Hi how are you', likesCount: 12},
  //   {id: 4, message: 'It is my first post', likesCount: 11}, 
    
  // ]

let postsElements = props.posts.map( p => <Post messages={p.message} likesCount={p.likesCount}/> )

let newPostElement = React.createRef();

let addPost = () => {
  let text = newPostElement.current.value;
  props.addPost(text);
  newPostElement.current.value = '';
  
}

    return (
        <div className={classes.postBlock}>
          <h3>Коментарии</h3>
          <div>
            <div>
              <textarea ref={newPostElement}></textarea>
            </div>
            <div>
              <button onClick={ addPost }>Добавить коментарий</button>
            </div>
          </div>
          <div 
             className={classes.posts}>
               { postsElements }
             
          </div>
        </div>  
    )
}

export default MyPosts;