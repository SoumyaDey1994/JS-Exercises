const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dataRelationship')
  .then(() => console.log('Connected to MongoDB on Mlab...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const Author = mongoose.model('Author', new mongoose.Schema({
  name: String,
  bio: String,
  website: String
}));

const Course = mongoose.model('MyCourse', new mongoose.Schema({
  name: String,
  author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  }
}));

async function createAuthor(name, bio, website) { 
  const author = new Author({
    name, 
    bio, 
    website 
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course
    .find()
    .populate('author','name -_id')
    .select({name: 1, author:1});
  console.log(courses);
}

// createAuthor('Mosh', 'My bio', 'My Website');

// createCourse('Angular Course', '5b0d6a9cab17a032dca00ce6')

listCourses();