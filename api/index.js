var express = require("express");
var app = express();

var mongojs = require("mongojs");
var db = mongojs("todo", ["tasks"]);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var cors = require("cors");
app.use(cors());

app.get('/tasks', function(req, res) {
    db.tasks.find(function(err, data) {
        res.status(200).json(data);
    });
});

app.get('/tasks/:id', function(req, res) {
    db.tasks.find({
        _id: mongojs.ObjectID(req.params.id)
    }, function(err, data) {
        res.status(200).json(data);
    });
});

app.post('/tasks', function(req, res) {
    var subject = req.body.subject;

    if(!subject) res.status(400).json({
        msg: "Missing subject"
    });

    db.tasks.insert({ subject, status: 0 }, function(err, data) {
        res.status(200).json(data);
    });
});

// curl -X DELETE localhost:8000/tasks/5e22c75d5140d702917933c9
app.delete('/tasks/:id', function(req, res) {
    db.tasks.remove({
        _id: mongojs.ObjectID(req.params.id)
    }, function(err, data) {
        res.status(200).json(data);
    });
});

// curl -X DELETE localhost:8000/tasks
app.delete('/tasks', function(req, res) {
    db.tasks.remove({ status: 1 }, function(err, data) {
        res.status(200).json(data);
    });
});

// curl -X PUT localhost:8000/tasks/5e22c6255140d702917933c8
// -d status=1
app.put('/tasks/:id', function(req, res) {
    var status = req.body.status;
    if(status !== 1 && status !== 0) {
        return res.status(400).json({ msg: "Incorrect status" });
    }

    db.tasks.update(
        { _id: mongojs.ObjectID(req.params.id) },
        { $set: { status: status } },
        { multi: false },
        function(err, data) {
            res.status(200).json(data);
        }
    );
});

app.listen(8000, function() {
    console.log('Todo API running at 8000');
});
