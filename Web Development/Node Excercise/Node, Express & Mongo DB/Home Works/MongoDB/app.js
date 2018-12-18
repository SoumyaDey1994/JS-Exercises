const mongoose= require('mongoose');

mongoose.connect('mongodb://myDB:Soumya1234@ds131384.mlab.com:31384/mongocrud')
        .then(()=>console.log(`Connected to MLAB MongoDB Successfully`))
        .catch((err)=> console.log(`Failed to Connect MLAB MongoDB Server: ${err}`));

const course={
    courseName: 'C++ Complete Guide',   //a Full Stack Java Developer
    author: 'Balaguruswami',
    keywords: ['Fundamentals', 'OOP Principles'],
    category: 'Backend',
    isPublished: true,
    price: 15,
    currency: '$'
}

const invalidCourseId='5ae45b827c8d9d03b4b56cbf';
const courseSchema= new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 100,
        // match: /abc/gim
    },
    author: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50
    },
    keywords: {
        type: Array,
        validate: {
            // isAsync: true,
            // validator: function(kArray, callback){
            //     setTimeout(()=>{
            //         let result= kArray && kArray.length > 0;
            //         callback(result);
            //     }, 5000) 
            // },
            validator: function(kArray){
                return kArray && kArray.length > 0;
            },
            message: 'A course should have at least one Keyword'
        }
    },
    category:{
        type: String,
        required: true,
        enum: ['Web', 'Mobile', 'Database', 'Backend', 'Front End', 'Web Services']
    },
    date: {type: Date, default: Date.now},
    isPublished: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: function(){
            return this.isPublished;
        },
        min: 10,
        max: 120
    },
    currency: {
        type: String,
        required: true
    }
})
//Model class of course
const CourseModel= mongoose.model('Course', courseSchema);

//Function definition to save course on DB
async function createCourse(){
    const courseObj= new CourseModel(course);

    try{
    const resultOfSaving= await courseObj.save();
    console.log(`Stored Course on DB:\n${resultOfSaving}`);
    }catch(exception){
        // console.log(`Exception Occurs: ${error}`)
        let allExceptions= exception.errors;
        for(field in allExceptions){
            console.log(`Error: ${allExceptions[field]}`)
        }
    }
}

createCourse(); //call function to save course on DB

//Function to Query All Courses
async function getCourses(){
    let allCourses= await CourseModel.find();
    console.log("All Courses:\n");
    allCourses.forEach((course)=>console.log(`${JSON.stringify(course)}`));
}

// getCourses();   //call function to query all courses

//Function to Query courses by condition
async function getCoursesByProperty(){
    let courses= await CourseModel.find({author: "Mosh Hamedani", isPublished: true})
                                    .limit(2)
                                    .sort({courseName: -1})
                                    .select({courseName: 1, keywords: 1});
    console.log("Desired Courses:\n");
    courses.forEach((course)=>console.log(`${JSON.stringify(course)}`));    
}

// getCoursesByProperty(); //call function to fetch course after applying filter conditions

//Function to query courses using comparison operator
async function getCoursesByComparisonQueryOperators(){
    // $lt, $gt, $lte, $gte, 
    // $in, $nin, $eq, $ne
    let courses= await CourseModel.find({keywords: {$in: ['client Side Framework', 'JavaScript']}})
                                  .select({courseName: 1, keywords: 1, author: 1})
                                  .sort({author: 1})
                                    
    console.log("Desired Courses:\n");
    courses.forEach((course)=>console.log(`${JSON.stringify(course)}`));    
}

// getCoursesByComparisonQueryOperators();   //call function to fetch course after applying comparison operator

//Function to query courses using logical operators
async function getCoursesByLogicalQueryOperators(){
    // or & and
    let courses= await CourseModel.find()
                                  .and([{author: 'Mosh Hamedani'},{isPublished: true}])
                                  .select({courseName: 1, author: 1})
                                  .sort({author: 1})
                                    
    console.log("Desired Courses:\n");
    courses.forEach((course)=>console.log(`${JSON.stringify(course)}`));    
}

// getCoursesByLogicalQueryOperators();   //call function to fetch course after applying logical operators

//Function to query courses using regular expression
async function getCoursesByRegularExpressions(){
    let courses= await CourseModel.find({author:/.*kotha.*/gim})
                                  .select({courseName: 1, author: 1})
                                  .sort({author: 1})
                                    
    console.log("Desired Courses:\n");
    courses.forEach((course)=>console.log(`${JSON.stringify(course)}`));    
}

// getCoursesByRegularExpressions();   //call function to fetch course after applying regular expression

//Function to query courses using count method
async function getNoOfCourses(){
    let courseNo= await CourseModel.find({author:/^soumya/gim})
                                  .sort({author: 1})
                                  .count()
                                    
    console.log("No of Courses: "+courseNo);
}

// getNoOfCourses();   //call function to fetch course after applying count method

//Function to query courses in a specific page
async function getDocumentsInParticularPage(pageNo){
    let pageSize=3;
    let courses= await CourseModel.find()
                                   .skip((pageNo-1)*pageSize)
                                   .limit(pageSize)
                                  .sort({author: 1})
                                  .select({courseName:1, author:1})
                                    
    console.log(`Documents in Page ${pageNo} are:\n ${courses}`);
}

// getDocumentsInParticularPage(1); //call function to fetch courses from a specific page(page 1)
// getDocumentsInParticularPage(3); //call function to fetch courses from a specific page(page 3)

//Function to get the course first and then update
async function updateDocumentByQueryFirst(courseId){
    // get a course by id
    // change desired properties
    // save the course object

    const course= await CourseModel.findById(courseId);
    if(!course)
        return;

    course.set({
        isPublished: false,
        author: 'Soumya Kanta Dey',
        courseName: 'Beginner to PRO in React Js'
    });

    let result= await course.save();
    console.log(`Updated Doument: ${result}`)
}

// updateDocumentByQueryFirst('5ae45dbf46072a0d6cb50e1a')   call function to update a course by query first approach

//Function to update a course on DB directly
async function updateDocumentDirectly(courseId){
    // identify the course by Id
    // update the properties
    // optional: get the updated object

    const course= await CourseModel.findByIdAndUpdate(courseId,
                    {
                        $set: {
                            isPublished: true,
                            author: 'Soumya Kanta Dey',
                            courseName: 'Basics to Advance in C Programming',
                            keywords: ['C Fundamentals', 'Array', 'Pointer', 'Structure', 'Graphics Programming']
                        }
                    },
                    {
                        new: true
                    }
    );
    
    console.log(`Updated Course:\n ${course}`)
}
// 
// updateDocumentDirectly(invalidCourseId);    //call method to update course directly

//Function to remove a document from DB
async function removeDocument(courseId){
    let deletedCourse= await CourseModel.findByIdAndRemove(courseId)
    console.log(`Removed Course:\n ${deletedCourse}`);
}

// removeDocument(invalidCourseId)    //call function to delete a course