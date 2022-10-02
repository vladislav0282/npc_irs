import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {
  
  let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
  let messagesElements = props.messages.map( m => <Message message={m.message}/>)
  
  let newMessagesElements = React.createRef();
  
  let addMessage = () => {
    let text = newMessagesElements.current.value;
    props.addMessage(text);
    newMessagesElements.current.value = ''
  }

  return (
    <div>
      <div>
      <img src="https://avatars.mds.yandex.net/i?id=3396af8138b8edf5e4a8b6afe91409cc-4316581-images-thumbs&n=13"
          alt="img"/>
      </div>
      <h3>Сообщения</h3>
      <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messagesElements }
      </div>
      <div>
        <textarea ref={newMessagesElements}></textarea>
      </div>
      <div>
        <button onClick={ addMessage }>Добавить сообщение</button>
      </div>
    </div>

    </div>
    

    
  )
};

export {Dialogs};
