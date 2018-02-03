const db = require("../models");

module.exports = {
    logThis: function (req, res) {
        res.json("From controller");
    },
    findOne: function (req, res) {
        db.users
            .find(req.query)
            .then(result => res.json(result))
    }
    create: function (req, res) {

    }
};



