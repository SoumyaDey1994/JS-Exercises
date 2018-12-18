const Joi = require("joi");
const express= require("express");
const router = express.Router();

//Course list
const courses = [
    {
        id : 1,
        name : "The Complete React Masterclass"
    },
    {
        id : 2,
        name : "Angular - Beginner to Pro"
    },
    {
        id : 3,
        name : "Node.js Ultimate Guide"
    }
]
//Course Routes
router.get('/', (req, res)=>{
    res.status(200).send(courses);
})


router.get('/:id', (req, res)=>{
    const course = findCourse(req.params.id);
    if(!course)
        return res.status(404).send({error:`Course having id ${req.params.id} not found.`});
    return res.status(200).send(course);
})

router.post('/', (req, res)=>{
    const {error} = validateCourse(req.body);
    if(error)
        return res.status(400).send({error : error.details[0].message});

    const newCourseId = parseInt(courses[courses.length-1].id) + 1;
    const newCourse = {
        id : newCourseId,
        name : req.body.name
    }
    courses.push(newCourse);
    return res.status(201).send(newCourse);
})

router.put('/:id', (req, res) => {
    // Look for the course
    // If noot fount then Send 404 - Not Found
    const course = findCourse(req.params.id);
    if(!course)
        return res.status(404).send({error:`Course having id ${req.params.id} not found.`});
    // Look for the request body
    // If invalid, then send 400 - Bad request
    const {error} = validateCourse(req.body);
    if(error)
        return res.status(400).send({error : error.details[0].message});
    //Else update the course
    // Return the updated course 200 - OK
    course.name = req.body.name;
    return res.status(200).send(course);
})

router.delete('/:id', (req, res) => {
    // Look for the course
    // If noot fount then Send 404 - Not Found
    const course = findCourse(req.params.id);
    if(!course)
        return res.status(404).send({error:`Course having id ${req.params.id} not found.`});
    // Else delete the course
    const index = courses.indexOf(course);
    courses.splice(index,1);
    return res.status(200).send(course);
})

//Method to validate the request object
function validateCourse(course){
    const schema = {
        name : Joi.string().min(5).required()
    }
    const validationResult = Joi.validate(course , schema);
    return validationResult;
}
// Method to look for the course
function findCourse(courseId){
    const id = parseInt(courseId);
    const course = courses.find( course => course.id === id);
    return course;
}
//Acess Resouce Parameters and Query Parameters
// app.get('/api/courses/:year/:month', (req,res)=>{
//     // res.send(req.params);
//     res.send(req.query);
// })


module.exports = router;