const Joi= require('joi');
const express= require('express');
const app= express();

app.use(express.json());    //Middleware

const hostName='localhost';
const port= process.env.PORT|| 3000; 
const courseList= [
    {
        "courseId": 1,
        "courseName": "Node Js Complete Guide",
        "author": "Mosh Hamedani"
    },
    {
        "courseId": 2,
        "courseName": "The complete guide for java",
        "author": "Dhiru Munduluru"
    },
    {
        "courseId": 3,
        "courseName": "Full Stack Web Development",
        "author": "Jogesh K Muniappa"
    },
    {
        "courseId": 4,
        "courseName": "Typescript for beginners",
        "author": "KoushikKothagal"
    }
]

//Route for http://localhost:3000
app.get('/', (req, res)=>{
    res.send('Hi Soumya, Welcome to Express Tutorial')
});

//Route for http://localhost:3000/api/courses
app.get('/api/courses', (req, res)=>{
    res.send((courseList))
});

//Route for http://localhost:3000/api/courses/courseId for GET request
app.get('/api/courses/:courseParam', (req, res)=>{
    // res.send(`Id of Requested Course: ${req.params.courseId}`);
    console.log("Requested Parameter: "+req.params.courseParam)
    const course=getCourse(req.params.courseParam);

    console.log("Requested Course: "+course)
    if(!course)
        res.status(404).send(`The requested course ${req.params.courseParam} is not available.`);
    else
        res.status(200).send(course);
});

//Route to Create a course object
app.post('/api/courses', (req, res)=>{
    // if(!req.body.courseName){
    //     res.status(400).send(`courseName is mandetory, please provide a coursename to add`);
    //     return ;
    // }else if(!isNaN(req.body.courseName)){
    //     res.status(400).send(`courseName must be a string`);
    //     return ;
    // }else if(req.body.courseName.length< 6){
    //     res.status(400).send(`Name of the course should be atleast of 6 characters`);
    //     return ;
    // }
    const result= validateCourse(req.body);
    if(result.error)
        return res.status(400).send("Error: "+result.error.details[0].message);
        
    const course= {
        "courseId": courseList.length+ 1,
        "courseName": req.body.courseName,
        "author": req.body.author
    }
    //push the new course to course list
    courseList.push(course);
    res.send(course);
})
//update a course object
app.put('/api/courses/:courseParam', (req, res)=>{
    //Look up the course
    const course=getCourse(req.params.courseParam);
    //Return error message is mentioned course is not available
    if(!course)
        return res.status(404).send(`The requested course ${req.params.courseParam} is not available.`);
    //validate the course
    const result= validateCourse(req.body);
    //Return appropiate error message if validation failed
    if(result.error)
        return res.status(400).send(result.error.details[0].message);

    //update the course
    course.courseName= req.body.courseName;
    course.author= req.body.author;
    //send the course object to client
    res.send(course);
})
//delete a course object
app.delete('/api/courses/:courseParam', (req, res)=>{
    //Look up the course
    const course=getCourse(req.params.courseParam);
    console.log("Course: "+JSON.stringify(course));
    //Return error message is mentioned course is not available
    if(!course)
        return res.status(404).send(`The requested course ${req.params.courseParam} is not available.`);
    //find the index of the course
    let indexOfCourse= courseList.indexOf(course);
    console.log('Index of Course: '+indexOfCourse);
    //Delete the course from course list
    courseList.splice(indexOfCourse, 1);
    //return the deleted course object
    res.status(200).send(course);
})
//server listens to port
app.listen(port, ()=>console.log(`Server listening to http://${hostName}:${port}`));

//function to look up the specified course
function getCourse(courseParam){
    let course;
    if(isNaN(courseParam))
        course= courseList.find((course)=> course.courseName=== courseParam);
    else 
        course= courseList.find((course)=> course.courseId=== parseInt(courseParam));

    return course;
}

//function to validate the course parameter
function validateCourse(courseObj){
    //specify the schema of request body
    const schema={
        courseName: Joi.string().min(6).required(),
        author: Joi.string().min(5).required()
    }
    
    const result= Joi.validate(courseObj, schema);
    return result;
}

//print request parameters and query parameters
// app.get('/api/posts/:postId/:commentId', (req, res)=>{
//     // res.send(req.params); //print the resoure Id
//     // res.send(req.query);   //print the query parameters
//     res.send(`Id of Requested Post: ${req.params.postId}\n\nId of Requested Comment on Post: ${req.params.commentId}`);
// });