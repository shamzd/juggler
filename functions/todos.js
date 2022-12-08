/* 
    Return the list of All the ToDo's items

    {
        statusCode: 200,
                {name:"todo List"}
        body: JSON.stringfy(data)
        body: {"name":"todo List"}
    }

    server use Server Code NODE.js js....
    fs i/0*/

import path from 'path'
import {fs} from 'fs/promises'


export async function handler(event, context){
    const filePath = path.resolve('./db/todos.json')
    
    const data = await fs.readFile(filePath, "utf-8")
    
    return {
        statusCode: 200,
        body: data
    }
}