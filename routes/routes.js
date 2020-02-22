const router = require("express").Router();
const mongojs = require("mongojs");
const path = require("path");

//import models
const db = require("../models");
const Workout = require("../models/workout");

//html route

router.get('/exercise', function (req, res) {
    res.sendfile(path.join(__dirname, '../public/exercise.html'))
});

router.get('/stats', function(req,res) {
    res.sendfile(path.join(__dirname,'../public/stats.html'))
});

//POST

router.post("/api/workouts", ({ body }, res) => {
    console.log("post successful")
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

//UPDATE

router.put("/api/workouts/:id", (req, res) => {
    console.log("POST all data SUCCESSFUL")
    let body = req.body;
    console.log(body);
    Workout.update(
        { _id: mongojs.ObjectID(req.params.id) },
        {
            $push: {
                exercises: {
                    type: body.type,
                    name: body.name,
                    duration: body.duration,
                    weight: body.weight,
                    reps: body.reps,
                    sets: body.sets,
                    distance: body.distance,

                }
            }
        })
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        });

});

    //GET

    router.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbCardio => {
            res.json(dbCardio)
        }).catch(err => {
            res.json(err)
        });
    });

       //GET

       router.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).limit(7).then(dbWorkout => {
            res.json(dbWorkout)
        }).catch(err => {
            res.json(err)
        });
    });

    module.exports = router





