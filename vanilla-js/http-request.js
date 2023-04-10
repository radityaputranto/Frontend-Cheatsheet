fetch('https://jsonplaceholder.typicode.com/todos', { method: 'GET' })
    .then(response => response.json()) //data need to be converted to json
    .then(parsedData => console.log(parsedData));


const resource = 'https://jsonplaceholder.typicode.com/todos'
const option = {
    method: 'POST',
    body: JSON.stringify({
        title: 'test post',
        completed: false,
        userId: 10
    })
};
fetch(resource, option)
    .then(data => data.json())
    .then(parsedData => console.log(parsedData))
    .catch(error => console.log('error : ' + error));


async function getListTodo() {
    try {
        const response = await fetch(resource, { method: 'GET' });
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log('error: ' + error);
    }
}
getListTodo();