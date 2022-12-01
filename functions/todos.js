/* 
    Return the list of All the ToDo's items

    {
        statusCode: 200,
                {name:"todo List"}
        body: JSON.stringfy(data)
        body: {"name":"todo List"}
    }
*/

export async function handler(event, context){

    return {
        statusCode:200,
        body: JSON.stringify({path:"/api/todos"})
    }
}