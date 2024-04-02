const express= require('express');
const studentRoutes =require('./src/students/routes');



const Utilities =require('./Utilities')
const pool = require('./db')
const app= express();
app.use(express.json());

const port = 3001;



app.get('/',(req,res)=>{
    res.sendFile('D:/restAPI/src/students/responce.html')
})

//  app.use('/api/v1/students',studentRoutes)

app.get('/getStudents' , (req,res)=>{
    
    pool.query("SELECT * FROM students",(error,results)=>{

        console.log('getting data')
             if(error)throw error;
            //  res.status(200).json(results.rows);
             const htmlTable = Utilities.rowsToHTMLTable(results.rows);
            //  document.getElementById('divforget').innerHTML=htmlTable;
             console.log(htmlTable);
             console.log(results.rows)
            res.send(htmlTable);
            // res.sendFile(document.getElementById('divforget').innerHTML=htmlTable)
             
         })
})


app.post('/insertdata',(req,res)=>{

const { name,email,age,dob }=req.body;

try{
    pool.query(`INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)`, [name, email,age,dob],(err)=>{
        if(err)throw err;
    })
    res.json({ message: 'Item inserted successfully' })
    console.log("data inserted");
    res.send(result.rows)
}catch(err){
console.log('data not inserted ',err);
}

})

app.delete('/deletebyid/:id',(req,res)=>{

    const { id }=req.params;
    try{
    pool.query(`DELETE FROM students WHERE id = $1`, [id]);
    res.json({ message: 'Item deleted successfully' })
    }catch(err){
        console.log('data not deleted',err);
    }
})
app.get('/test',(req,res)=>{

    res.render('responce.ejs')
})

app.get('/getByName' , (req,res)=>{
    const {username,password} = req.body
    pool.query("SELECT count(*)FROM users WHERE username=$1 AND password=$2",[username,password],(error,results)=>{

        console.log('getting data')
             if(error)throw error;
             res.status(200).json(results.rows);
            //  res.status(200).json(results.rows);
            //  const htmlTable = rowsToHTML.rowsToHTMLTable(results.rows);
            // //  document.getElementById('divforget').innerHTML=htmlTable;
            //  console.log(htmlTable);
            //  console.log(results.rows)
            // res.send(htmlTable);
            // res.sendFile(document.getElementById('divforget').innerHTML=htmlTable)
             
         })
})



app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
});