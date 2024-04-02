const pool = require('../../db')

const getstudents=(req,res)=>{
    pool.connect().then(()=>{
        console.log("Databases connected");
        pool.query("select * from students",(error,results)=>{
            console.log('getting data')
                 if(error)throw error;
    
                 res.status(200).json(results.rows)
        })
    }).catch((err)=>{
        console.log("errror", err);
    })
    
}

module.exports={
    getstudents
};