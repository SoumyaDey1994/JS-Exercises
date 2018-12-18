const mongoose= require('mongoose');    //Import mongoose

mongoose.connect('mongodb://localhost:27017/mongo-excercises')  //connect to mongoDB on localhost
        .then(()=>console.log(`Successfully Connected to MongoDB on localhost`))
        .catch((error)=>console.log(`Error Connecting to MongoDB: ${error}`))

//Define course schema
const courseSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    isPublished:{
        type: Boolean,
        required: true
    },
    price:{
        type: Number,
        min: 10,
        max: 100
    },
    tags:{
        type: [String],
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
});
//Create a model class on top of schema
const CourseModel= mongoose.model('Course', courseSchema);

//Solution 1

//get required course details from mongoDB
async function getCourseDetails(){
    try{
        const courseDetails= await CourseModel.find({isPublished: true, tags:{$in:['backend']}})
                                        .sort({name: 1})
                                        .select({name: 1, author: 1})

        return courseDetails;
    }catch(err){
        console.log(`Error in getting course details: ${err}`)
    }

}
// display required course details
async function displayCourses(){
    try{
        const coorses= await getCourseDetails();
        console.log(`Details of Required Courses:\n${coorses}`);
    }catch(err){
        console.log(`Error in displaying course details: ${err}`)
    }
}
//call displayCourse method
// displayCourses();

//Solution 2
//get published frontend+backend courses
async function getRequiredFrontEndAndBackendCourses(){
    try{
        const courses= await CourseModel.find({isPublished: true, tags:{$in:['frontend','backend']}})
                                    .sort({price: -1})
                                    .select('name author')
        return courses;
    }catch(err){
        console.log(`Error in getting course details: ${err}`)
    }
}
//dispaly published frontend+backend courses
async function displayRequiredFrontEndAndBackendCourses(){
    try{
        const courses= await getRequiredFrontEndAndBackendCourses();
        console.log(`Details of Specified Courses:\n${courses}`);
    }catch(err){
        console.log(`Error in displaying course details: ${err}`)
    }
}

//call displayRequiredFrontEndAndBackendCourses method
// displayRequiredFrontEndAndBackendCourses();

//Solution 3

async function getCoursesHavingPriceMoreThan15OrHavingWordByInTitle(){
    try{
        const courses= await CourseModel.find({isPublished: true})
                                    .or([{ price:{$gte: 15} },{name: /.*by.*/gim}])
                                    .select('name author price')
        return courses;
    }catch(err){
        console.log(`Error in getting course details: ${err}`)
    }
}

async function displayCoursesHavingPriceMoreThan15OrHavingWordByInTitle(){
    try{
        const courses=await getCoursesHavingPriceMoreThan15OrHavingWordByInTitle();
        console.log(`Details of Specified Courses:\n${courses}`);
    }catch(err){
        console.log(`Error in displaying course details: ${err}`)
    }
}

displayCoursesHavingPriceMoreThan15OrHavingWordByInTitle();