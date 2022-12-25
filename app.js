//Require section - npm modules, db collections and etc.
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// our Nodejs app will be of express type
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://benhazoom:56872130@blog1.mozomcf.mongodb.net/blog1?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine as ejs
app.set('view engine', 'ejs');

// middleware & static files of morgan type clging us status of each request
app.use(express.static('public'));//accesing css styles from public dir
app.use(express.urlencoded({extended: true}));//parsses url to data object to use put 
app.use(morgan('dev'));           //using morgen dev way




// <--------------------------------------------REQUESTS-------------------------------------------------->
// mongoose & mongo requests
app.get('/add-blog', (req, res) => {
  //creating a new instance of blog
    const blog = new Blog({
      title: 'newBlog2',
      snippet:'1',
      body:'body'
    });
  //saving it to the DB with async method
  blog.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

//get all
app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

//get by id
app.get('/first-blog', (req, res) => {
  Blog.findById('63a856d960c05406649858ec')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

//redirecting to /blogs
app.get('/', (req, res) => {
  res.redirect('/blogs');
});


//Post method - creates a new blog and redirecting to home page uppon success
app.post('/blogs',(req,res) =>{
  const nblog = Blog (req.body);//passing the data from the middleware express.urlencoded to make new blog instance
  nblog.save()
  .then((result)=>{
    res.redirect('/blogs');
  })
  .catch((err)=>{
  console.log(err);
  });
});



//<-------------------------------------------------Renders-------------------------------------------------->
//rendering about.ejs
app.get('/about', (req, res) => {
  //render accepts ejs file as 1st param and object to use its data for 2nd param
  res.render('about', { title: 'About' });
});

//rendering create.ejs
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

//at blogs page render all blogs from DB
app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 }) //sorting from newest to oldest using timestamps
    .then(result => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});
//getting specific blog
app.get('/blogs/:id',(req,res) =>{
  Blog.findById(req.params.id)
  .then(result => {
    res.render('details',{blog: result,title: 'Blog Details'});
  })
  .catch(err => {
    console.log(err);
  });
});

//deletting specific blog
app.delete('/blogs/:id',(req,res) =>{
  Blog.findByIdAndDelete(req.params.id)
  .then(result => {
    res.json({redirect: '/blogs'});
  })
  .catch(err => {
    console.log(err);
  });
});

//rendering 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});