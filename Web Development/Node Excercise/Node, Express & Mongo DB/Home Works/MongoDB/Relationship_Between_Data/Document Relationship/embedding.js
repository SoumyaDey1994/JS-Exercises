const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dataRelationship')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('MyCourse', new mongoose.Schema({
  name: String,
  authors: [authorSchema]
    // authorSchema
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId){
  const course= await Course.findById(courseId);
  course.author.name='Mosh hamedani';
  const result=await course.save();
  console.log(result);
}

async function updateAuthorDirectly(courseId){
  const result= await Course.update({_id: courseId},{
    $set:{
      'author.name':"Soumya Kanta Dey"
    }
    },{
      new: true
    }
  )

  console.log(result);
}

async function addNewAuthor(courseId, authorObj){
  const course= await Course.findById(courseId);
  course.authors.push(authorObj);
  const result= await course.save();
  console.log(result);
}

async function removeAuthor(courseId, authorId){
  const course= await Course.findById(courseId);
  const targetAuthor= course.authors.id(authorId);
  targetAuthor.remove();
  const result= await course.save();
  console.log(result);
}

async function removeCourse(courseId){
  const result= await Course.findByIdAndRemove(courseId);
  console.log(result);
}
// updateAuthor('5b0d7020e37e762e10bb7196');

// updateAuthorDirectly('5b0d7285afa4ec218423288c');

// addNewAuthor('5b0d78c5b93ba53428c41061', 
//   new Author({
//     name: 'Soumya Dey'
//   })
// );

// removeAuthor('5b0d78c5b93ba53428c41061', '5b0d793ee82f5c03c48427fe');

// removeCourse("5b0d7610c91d6b3320b43bc6");

// createCourse('.Net MVC Course', [
//   new Author({ name: 'Mosh Hamedani' }),
//   new Author({ name: 'C Balaguruswami' })
// ]);

