const express = require('express')
const app = express();

app.use(express.json());
app.get('/users', (req, res) => {
    res.status(200).send([
        { name: "Joseph", Id: 1 },
        {name: "Otieno", Id: 2}
    ])
})

app.post('/user/3', (req, res) => {
    const { name } = req.body
    if (!name)
    {
        res.status(400).send({message: "please addd the name of the user"})
    }
    res.send({name:name, Id: 3})
})

app.listen(3000, ()=> console.log('App is running at port 3000'))