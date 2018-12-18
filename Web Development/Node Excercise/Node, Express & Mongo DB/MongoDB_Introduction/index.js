const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/myPlayGround')
        .then(()=> console.log("Scccessfully Connected to Local MongoDB Server..."))
        .catch((error)=> console.log("Cannot connect to MongoDB Server...", error));

// mongoose.connect(`mongodb://admin:${encodeURIComponent('super@admin')}@ds014578.mlab.com:14578/voyage_report`)
//         .then(()=> console.log("Scccessfully Connected to MongoDB Server of MLAB..."))
//         .catch((error)=> console.log("Cannot connect to MongoDB Server of MLAB...", error));

const courseSchema={
    courseName: String,
    author: String,
    isPublished: Boolean,
    dateOfPublish: {
            type: Date, 
            default: Date.now
        },
    keyWords: [String]
}

const Course= mongoose.model('Course', courseSchema);

//Create a new Course
async function createCourse(){
    const courseObj= new Course({
        courseName: "TypeScript Tutorial for Beginners",
        author: "Koushik Kothagal",
        isPublished: false,
        keyWords: ["TypeScruipt", "Fundamentals", "ES6"],
    })

    const resultantObject= await courseObj.save();
    console.log(`Result:\n ${resultantObject}`);
}
// createCourse();  //call method to create and save a course to MongoDB

//Fetch Courses from MongoDB
async function getCourse(){
    let courses= await Course.find({author: 'Mosh hamedani', isPublished: true})
                             .limit(3)
                             .sort({courseName: 1})
                             .select({courseName: 1, keywords: 1})
    console.log(`Desired Courses:\n ${courses}`);

}

// getCourse();    //call method to fetch desired courses from MongoDB

//query and course and then update the properties
async function queryAndUpdateCourse(courseId){
    const course= await Course.findById(courseId)
    if(!course) return;
    
    course.set({
        author: "Soumya Dey",
        keyWords: ["Angular", "SPA", "Front End", "Client-Side Framweork", "JavaScript"]
    })

    let result= await course.save();
    console.log(`Updated Course:\n${result}`)
}

// queryAndUpdateCourse("5ae05cc15cb57633541f1efd");   //call method to get specific course and then update properties
//method to update a course directly
async function updateCourseDirectly(courseId){
    const course= await Course.findByIdAndUpdate(   //corresponding method is Course.update
                {_id: courseId}, 
                {
                    $set:{
                        author: "Mr. Mosh hamedani",
                        courseName: "A complete guide to Angular Developers",
                        isPublished: false
                    }
                },
                {
                    new: true
                }
    );

    console.log(`Course updated: \n${course}`)
}
// updateCourseDirectly("5ae05cc15cb57633541f1efd");   //call metthod to update course object directly

//method to delete a document from MongoDB Collection
async function deleteCourse(courseId){
    let deletedCourse= await Course.findByIdAndRemove(courseId);
    console.log(`Course Deleted:\n ${deleteCourse}`)
}

deleteCourse('5ae0b3bd9a1aa713b8fa88a5');   //call method to remove elemet from database