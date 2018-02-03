
const express = require('express');
const fs = require('fs');
const db = require('./models');
const app = express();
// const sequelize = require('sequelize');
const PORT = process.env.PORT || 8080;//
const path = require('path');
const bodyParser = require("body-parser");
// const bcrypt = require("bcrypt");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(methodOverride());

app.use(express.static("client/build"));

app.get("/", function (req, res) {
    // res.send("hello");
    console.log("hello")
});

// app.use(routes);
// app.use(express.static('build'));
app.use(express.static(path.join(__dirname, 'client', 'build')));

// require("./routes/api/api-routes")(app);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
});

// db.sequelize.sync();

    app.listen(PORT, function() {
        console.log('Server running on ', PORT);
        // console.log('DB INfo: ' , db.users.findAll({}) );
    });

// RDSDB_URL=mysql://testingUserName:testingPass@testing-db-mysql2.ccibkyyji0rd.us-east-2.rds.amazonaws.com:3306/testing-db-mysql2

