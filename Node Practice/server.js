const express = require('express')
const app = express()
const db = require('./db');

// const Person = require('./models/person');
// const MenuItem = require('./models/Menu');
//Body parser retreive data from http client request and convert it into suitable form and store in req.body(and it can read any type of data which client gives)
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Welcome Habibi')
})
// app.get('/Paneer',function(req,res){
//   res.send("Paneer is available in my Hotel");
// })
// app.post('/Person', async (req, res)=>{
//  try{
//   const data = req.body
//  //create new person doc using the mongoose model
// //  1 option --
//   // const newPerson = new Person();
//   // newPerson.name = data.name;
//   // newPerson.age = data.age;
// //  The above method to store data 
// // 2 option-- All data copied from req.body
// const newPerson = new Person(data);
// // Save the new person to the database
// const response = await newPerson.save();
//   console.log('data saved');
//   res.status(200).json(response);
//  }
//  catch(err){
//   console.log(err);
//   res.status(500).json({error: 'Internal Server Error'});
//   }
// }) 
// app.get('/person',async(req, res)=>{
//   try{
//    const data = await Person.find();
//    console.log('data fetched');
//    res.status(200).json(data);
//   }catch(err){
//     console.log(err);
//   res.status(500).json({error: 'Internal Server Error'});
//   }
// })
// app.get('/person/:workType', async(req, res)=>{
//   try{
//     const workType = req.params.workType; // // Extract the work type from the URL parameter if (workType == 'chef' || workType == 'manager' || workType = 'waiter' ){
//   if(workType == 'chef' || workType == 'manager' || workType == 'waiter' ){
//   const response = await Person.find({work: workType});
//   console.log('response fetched');
//   res.status(200).json(response);
//   }else{
//   res.status(404).json({error: 'Invalid work type'});
//   }
//   }catch(err) {
//   console.log(err); 
//   res.status(500).json({error: 'Internal Server Error'});
//   }
// })
// app.get('/menu',async(req, res)=>{
//   try{
//    const data = await MenuItem.find();
//    console.log('data fetched');
//    res.status(200).json(data);
//   }catch(err){
//     console.log(err);
//   res.status(500).json({error: 'Internal Server Error'});
//   }
// })
// app.post('/menu', async (req, res)=>{
//   try{
//    const data = req.body
//  const newMenu = new MenuItem(data);
//  const response = await newMenu.save();
//    console.log('data saved');
//    res.status(200).json(response);
//   }
//   catch(err){
//    console.log(err);
//    res.status(500).json({error: 'Internal Server Error'});
//    }
//  }) 

// For Person -- >>> 
//Import the route files
const personRoutes = require('./routes/personRoutes');
//Use the router
app.use('/person',personRoutes);
  // for Menu ---  >>>
  //Import the route files
const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes);

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})