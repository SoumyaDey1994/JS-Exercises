const mongoose = require("mongoose");
const express = require("express");
mongoose.connect('mongodb://localhost/mongo-exercises', { useNewUrlParser: true })
        .then(()=>console.log(`Successfully connected to DB`))
        .catch(()=>console.log(`Error in connecting to DB: ${err}`))

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 50
    },
    tags : {
        type : [String],
        required : true
    },
    author: {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
        min : 1
    },
    isPublished : {
        type : Boolean,
        required : true
    },
    dateOfPublish : {
        type: Date,
        default : Date.now()
    }
})

const Course = mongoose.model('Course', schema);

async function getCourses1(){
    const courses = await Course.find({isPublished : true, tags : 'backend'})
                          .sort({name : 1})
                          .select({name : 1, author: 1})
    console.log(`Desired Courses : \n${courses}`);
}
// getCourses1();

async function getCourses2(){
    const courses = await Course.find()
                                .and([{isPublished: true},{tags: {$in : ['frontend','backend']}}])
                                .sort({price : -1})
                                .select('name author price');
    console.log(`Desired Courses :\n${courses}`);
}

getCourses2();

async function getCourses3(){
    const courses = await Course.find({isPublished: true})
                                .or([{name: /.*by.*/i},{price: { $gte: 15}}])
                                .select('name price')
    console.log(`Desired Courses :\n${courses}`);                  
}

// getCourses3();

const app = express();
const port = 1111 || process.env.PORT;
app.listen(port, ()=>console.log(`Web server listening to port ${port}`));