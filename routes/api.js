const admin = require('../controllers/admin')
const auth = require('../controllers/auth')
const { Client } = require('pg');
module.exports = (app) => {

app.post("/api/auth",async (req, res)=>{
    try{
    let password = req.body.password;
    let username =req.body.username;

    let authd= await auth.verify(password,username);
    if(authd){
        res.send(authd)
    }
    }catch(e){
        console.log("ii"+"error")
        res.send(e)
    }

    
})

    
app.post("/api/upload_data",async (req,res)=>{

    try{

    let type = req.body.type;
    let description = req.body.description;
    let productname=req.body.productname

    let location=req.body.location;
    let cost=req.body.cost
    let seller=req.body.seller

   
        const stored = await admin.addData(type,productname,description,location,cost,seller);

        if(stored){
            res.send("data added")
        
        



    }else{
        res.send("credentials missmatch");
    }
}catch(err){
    res.send(err)
}

})

app.post("/api/update",async (req,res)=>{
    try{

        let type = req.body.type;
        let description = req.body.description;
        let productname=req.body.productname
    
        let location=req.body.location;
        let cost=req.body.cost
        let seller=req.body.seller
    
       
            const stored = await admin.update(type,productname,description,location,cost,seller);
    
            if(stored){
                res.send("update successfuly")
            
            
    
    
    
        }else{
            res.send(" can't find a product ");
        }
    }catch(err){
        res.send(err)
    }
    
    
})

app.post("/api/delete",async (req,res)=>{

    try{

    let type = req.body.type;

    let productname=req.body.productname

   
        const stored = await admin.delete(type,productname);

        if(stored){
            res.send("data deleted")
        
        



    }else{
        res.send("no data available for delete");
    }
}catch(err){
    res.send(err)
}

})

}