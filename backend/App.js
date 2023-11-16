import express, { response } from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';
import student from './model/student.js';
import users from './model/users.js';
import register from './model/register.js';
import nodemailer from 'nodemailer';
import multer from 'multer';

//import multer from multer
//cost cors=required(cors)


//this for connection
//const app=express();
// app.use('/api',(req,res,next)=>{
//     res.send("hellow fsd")
// })
// app.listen(5000)
//backend with portnum/api
//localhost:5000/api


//this for grt formdata in be
const app = express();
//var bodyParser=reguired('body-parser')
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://Gayatri:Fq9t431tQ4ZEbryx@cluster0.fjl371r.mongodb.net/?retryWrites=true&w=majority')
.then(()=>app.listen(5000))
.then(()=>
    console.log("connected to database & listening to localhost 5000")
    )
    .catch((err)=>console.log(err));
    

    app.post('/adddata',async (req,res,next)=>{
        console.log(req.body.Formdata)//formdata from the postman
        const  {name,rollno,college,branch}=req.body.Formdata
        const stud=new student({
            name,rollno,college,branch
        })
        //await stud.save().then(response=>console.log(response)).catch(err=>console.log(err))
        stud.save()
        return res.send({"student":stud})
    })



    //for users
    // app.post('/adduser',async (req,res,next)=>{
    //     console.log(req.body.userdata)
    //     const  {username,password}=req.body.userdata
    //     const use=new users({
    //         username,password
    //     })
        // try{
        //     userdata.save()
        // }catch(err){
        //     console.log(err)
        // }
    //     use.save()
    //     return res.send({"user":use})
    // })
    // //this code for to get enterd data in http://localhost:5000/user localhost that will be shown on another browser i.e http://localhost:5000/getuser
    // app.get('/getuser', async (req, res, next) => {
    //   const data= await users.find()
    //     res.send(data)
    //     console.log(data)
    // })


//for delete and add the data
    app.get('/getstudents',async(req,res,next)=>{
  //res.send('getting data') cheking purpose
        let studentdata
        try{
          studentdata =await student.find()
        }
        catch(err){
          console.log(err)
        }
        if(!studentdata){
          console.log("no students found")
        }
       return res.status(200).json({studentdata})
      
      })    
app.delete('/deletestudents/:id', async (req, res, next)=>{
  const _id = req.params.id
  let users;
  try{
      users = await student.findByIdAndDelete(_id);
  }catch(err){
      return console.log(err)
  }
  if(!users){
      return res.status(400).json({message:"Unable to delete the user."})
  }
  return res.status(200).json({messgae:"Succeesfully deleted."})
})

//for edit/update data
app.get('/getstudentsbyid/:id',async(req,res,next)=>{
  let studentdata
  const _id = req.params.id
  try{
      studentdata = await student.findById(_id)
      console.log(studentdata)
  }
  catch(err){
      console.log(err)
  }
  if(!studentdata){
      console.log("no students found")
  }
      return res.status(200).json({studentdata})
},[])


app.put('/updatestudent/:id',async(req,res,next)=>{
  const _id =req.params.id
  const {name, rollno,college,branch}=req.body
  let studentdata;
   try{
      studentdata = await student.findByIdAndUpdate(_id,{
          name,
          rollno,
          college,
          branch,
      });
  }
  catch(err){
      console.log(err)
  }
  return res.status(200).json({msg:"Successfully Edited","result":studentdata})
},[])




//send msg into the our emailss
//upload file
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/images')
  },
  filename: function (req, file, callback) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    callback(null, Date.now()+"_"+file.originalname)
  }
})

const upload = multer({ storage: storage })


app.post('/addrigister',upload.single("myfile"),async(req,res,next)=>{
     // const name= req.body.name
     console.log(req.body)
     // res.send({rollno:req.body.rollno})
     // res.send("success")
     const profile=(req.file)?req.file.filename:null
     const {name,email,password,phoneno,profile1} = req.body; //frontend  form input field values
     const reg = new register({
      name,
      email,
      password,
      phoneno ,
      profile1
     })
     reg.save()
     //stud.save()//for saving data into database
     try{
          
          var transporter = nodemailer.createTransport({
               service: 'gmail',
               auth: {
                 user: 'velchoorigayathri@gmail.com',
                 pass: 'bufa jyej egra nsrs'
               }
             });
             
             var mailOptions = {
               from: 'velchoorigayathris@gmail.com',
               to: email,
               subject: 'Sending Email using Node.js',
               text: 'Thanks for Registation!'
             };
             
             transporter.sendMail(mailOptions, function(error, info){
               if (error) {
                 console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                  }
                });
        }
        catch(err){
             console.log(err)
        }
        return res.send({msg:"inserted",result:reg})//for displaying message in the
   })
       
  
   
   