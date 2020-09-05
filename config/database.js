const mongoose = require('mongoose');

mongoose.connect(
   // 'mongodb://localhost:27017/flights',
    'mongodb+srv://testuser:testuser@cluster0-jomtw.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
);

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
