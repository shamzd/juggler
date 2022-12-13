/* 
    Make a connection between client ---- server (cloud function)

    Path to all of your functions
    docs for anu service tell how to access tjr fintion cloud function
    from the client(web browser) (firebase IOS/Android/Web/Unity)
    /.netlify/functions/fn(name)
    /.netlify/functions/todos path    route function     todos.js
*/

import {categoryTemplates} from './templates/categories'
console.log(categoryTemplates)

/* async function getToDos(){
    const url = '/.netlify/functions/todos'
    const res = await fetch(url)
    console.log(res)

    const data = await res.json()
    console.log(data)
    document.querySelector('p').textContent = data.name
    
}

getToDos() */

async function appInIt(){
    const res = await fetch('.netlify/functions/todos')
    const todos = await res.json()
    const containerElement = document.createElement('div')
    let markup = ``
    todos.forEach(todo =>{
        const template = categoryTemplates[todo.category](todo)
        markup += template
    })

    containerElement.innerHTML = markup
    document.querySelector('main').append(containerElement)
}

appInIt()


