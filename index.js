const express = require('express');
var cors = require('cors');
const { listen } = require('express/lib/application');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hellow new world there');
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0838883' },
    { id: 2, name: 'Shabnur', email: 'shabnur@gmail.com', phone: '0838883' },
    { id: 3, name: 'Sabina', email: 'sabina@gmail.com', phone: '0838883' },
    { id: 4, name: 'Tina', email: 'tina@gmail.com', phone: '0838883' },
    { id: 5, name: 'jeba', email: 'jeba@gmail.com', phone: '0838883' },
    { id: 6, name: 'Ritu', email: 'ritu@gmail.com', phone: '0838883' },
    { id: 7, name: 'Tia', email: 'tia@gmail.com', phone: '0838883' },
];

app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    } else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sour fazle flavor');
});

app.post('/user', (req, res) => {
    console.log('req', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    console.log(user);
    res.send(user);
});

app.listen(port, () => {
    console.log('listening to port', port);
})

