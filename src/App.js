import React, {Component} from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import {Header}  from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Info} from "./components/Info/Info";
import {Tasks} from "./components/Tasks/Tasks";
import {Statistics} from "./components/Statistics/Statistics";
import { addPost, addPost2 } from './redax/state';
import { Main } from './components/Main/Main';
import {Plannings} from './components/Plannings/Plannings'





const App = (props) => {


  return (
      
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs" element = {<Dialogs 
                    dialogs={props.state.messagesPage.dialogs} 
                    messages={props.state.messagesPage.messages}
                    addMessage={props.addMessage}/>}/>
                    
                    <Route path="/profile" element={<Profile 
                    posts={props.state.profilePage.posts} 
                    addPost={props.addPost}/>}/>
                    <Route path="/info" element={<Info/>}/>
                    <Route path="/tasks" element={<Tasks/>}/>
                    <Route path="/statistics" element={<Statistics/>}/>
                    <Route path="/main" element={<Main/>}/>
                    <Route path="/plannings" element={<Plannings/>}/>
                </Routes> 
              </div>
          </div>
    
  )
}

export default App;