/* 
    Make a connection between client ---- server (cloud function)

    Path to all of your functions
    docs for anu service tell how to access tjr fintion cloud function
    from the client(web browser) (firebase IOS/Android/Web/Unity)
    /.netlify/functions/fn(name)
    /.netlify/functions/todos path    route function     todos.js
*/


async function getToDos(){
    const url = '/.netlify/functions/todos'
    const res = await fetch(url)
    console.log(res)

    const data = await res.json()
    console.log(data)
    // document.querySelector('p').textContent = data.name
    
}

getToDos()
