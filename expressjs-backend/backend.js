const users = { 
    users_list :
    [
       { 
          id : 'xyz789',
          name : 'Charlie',
          job: 'Janitor',
       },
       {
          id : 'abc123', 
          name: 'Mac',
          job: 'Bouncer',
       },
       {
          id : 'ppp222', 
          name: 'Mac',
          job: 'Professor',
       }, 
       {
          id: 'yat999', 
          name: 'Dee',
          job: 'Aspring actress',
       },
       {
          id: 'zap555', 
          name: 'Dennis',
          job: 'Bartender',
       }
    ]
 }

const cors = require('cors');
const express = require('express');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    const name = req.query.name;
    const job = req.query.job;

    if (name != undefined) {
        let result_name = findUserByName(name);

        if (job != undefined) {
            let result_name_job = findUserByJob(result_name, job);
            result_name_job = {users_list: result_name_job}
            res.send(result_name_job)
        }
        else {
            result_name = {users_list: result_name}
            res.send(result_name);
        }
    }
    else {
        res.send(users);
    }
});

app.delete('/users/:id', (req, res) => {
    const id = req.params['id']; 
    let user = findUserById(id);
    if (user === undefined || user.length == 0)
        res.status(404).send('Resource not found.');
    else {
        users['users_list'] = users['users_list'].filter(function(a) { return a !== user })
        res.status(204).end();
    }
});

app.get('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        result = {users_list: result};
        res.send(result);
    }
});

app.post('/users', (req, res) => {
    const userToAdd = req.body;

    let rand_id = (Math.random() + 1).toString(36).substring(7);
    userToAdd['id'] = rand_id;
    
    addUser(userToAdd);
    res.status(201).send(userToAdd).end();
});

function addUser(user) {
    users['users_list'].push(user);
}

function findUserById(id) {
    return users['users_list'].find( (user) => user['id'] === id); // or line below
    //return users['users_list'].filter( (user) => user['id'] === id);
}

const findUserByName = (name) => { 
    return users['users_list'].filter( (user) => user['name'] === name); 
}

const findUserByJob = (names_json, job) => { 
    return names_json.filter( (user) => user['job'] === job); 
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});      