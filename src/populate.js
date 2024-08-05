const mongoose = require('mongoose');
const User = require('./models');

mongoose.connect('mongodb://localhost:27017/social_profile_viewer', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const users = [
];

User.insertMany(users)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error('Error inserting data: ', error);
        mongoose.connection.close();
    });
