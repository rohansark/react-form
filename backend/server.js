const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = express.Router();
const PORT = 4000;

//user schema
let UserSchema = require('./user.model');

app.use(cors());
app.use(bodyParser.json());

//database connection

mongoose.connect('mongodb+srv://souvik:souvik@userslist.75y1r.mongodb.net/userslist?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//caling APIs

userRoutes.route('/').get(function(req, res) {
    UserSchema.find(function(err, userslist) {
        if (err) {
            console.log(err);
        } else {
            res.json(userslist);
        }
        return 1;
    });
});


userRoutes.route('/add').post(function(req, res) {
    let user = new UserSchema(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});


app.use('/users',userRoutes);



app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});