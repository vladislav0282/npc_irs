import {rerenderEntireTree} from '../render'
const sequelize = require ('../db')
const {DataTypes} = require ('sequelize')



let state2 = {
    profilePage: {
        posts: [
            // {id: 1, message: 'Hi how are you', likesCount: 12},
            // {id: 2, message: 'It is my first post', likesCount: 11}, 
            // {id: 3, message: 'Hi how are you', likesCount: 12},
            // {id: 4, message: 'It is my first post', likesCount: 11}
        ]
    },
    messagesPage: {
        dialogs: [
            // {id: 1, name: 'Dimych'},
            // {id: 2, name: 'Andrey'},
            // {id: 3, name: 'Sveta'},
            // {id: 4, name: 'Sasha'},
            // {id: 5, name: 'Victor'},
            // {id: 6, name: 'Valera'}
        ],
        messages: [
            // {id: 1, message: 'Hi'},
            // {id: 2, message: 'How is your it-camasutra'},
            // {id: 3, message: 'Yo'},
            // {id: 4, message: 'Yo'},
            // {id: 5, message: 'Yo'},
            // {id: 6, message: 'Yo'}
        ]
    }
}

export let addPost = (postMessage) =>{
    
    let newPost = {
        id: 5, 
        message: postMessage,
        likesCount: 0
    };  

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let addMessage = (messageMessage) =>{
    let newMessage ={
       id: 7, 
       message: messageMessage,
    }
    state.messagesPage.messages.push(newMessage);
    rerenderEntireTree(state);
}

export default state;