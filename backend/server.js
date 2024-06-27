const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { connectToDb, getDb } = require('./db')
// const { ObjectId } = require('mongodb')

// const objectId = new ObjectId("5ca4bbc7a2dd94ee5816238c");

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Set the allowed origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Set the allowed HTTP methods
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Set the allowed headers
    next();
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
let db
//db connection

connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log("server is listening ");
        });
        db = getDb();
    }

})


console.log()


// app.send("/" ,() => {
//     <h1>hi </h1>
// })

// app.get("/", (req,res) => {


//     db.collection('registered_users')
//     .find()
//     .forEach(book => books.push(book))
//     .then( () =>{
//         res.status(200).json(books)
//         // console.log(books);
//     })
//     .catch(()=>{
//         res.status(500).json({error :'could not'})
//     })

//     // db.collection('accounts')
//     // .findOne({limit : 10000})
//     // .then( (doc) =>{
//     //     res.status(200).json(doc)
//     //     console.log(doc);
//     // })
//     // .catch(()=>{
//     //     res.status(500).json({error :'could not'})
//     // })

//     // res.
//     // console.log(req);
//     // res.sendFile(__dirname + '/index.html');
// })

let obj = {
    data: 1
}
app.post("/", (req, res) => {
    // res.
    console.log(req.body.id);
    console.log(req.body.who);
    // res.send("hi")
    let value = req.body.id;
    console.log(typeof value)

    // var n1 = Number(req.body.n1);
    // var n2 = Number(req.body.n2);
    let ans;
    if (req.body.who == 1) {
        let registered_users = [];
        db.collection('registered_users')
            .find()
            .forEach(user => registered_users.push(user.id))
            .then(() => {
                // res.status(200).json(books)
                // console.log(books);
                ;

                // cosole.log(value);
                console.log(registered_users);
                console.log(typeof registered_users[0]);
                let member;
                if (registered_users.includes(value)) {
                    console.log(`${value} is present in the array.`);
                    ans = true;

                } else {
                    console.log(`${value} is not present in the array.`);
                    ans = false;
                }
                res.status(200).json(ans);

            })
            .catch(() => {
                // res.status(500).json({error :'could not'})
                console.log("error")
            })

    }
    else {
        let registered_hospitals = [];
        db.collection('registered_hospitals')
            .find()
            .forEach(user => registered_hospitals.push(user._id))
            .then(() => {
                // res.status(200).json(books)
                // console.log(books);
                ;

                // cosole.log(value);
                console.log(registered_hospitals);
                console.log(typeof registered_hospitals[0]);
                let member;
                if (registered_hospitals.includes(value)) {
                    console.log(`${value} is present in the array.`);
                    ans = true;

                } else {
                    console.log(`${value} is not present in the array.`);
                    ans = false;
                }
                res.status(200).json(ans);

            })
            .catch(() => {
                // res.status(500).json({error :'could not'})
                console.log("error")
            })
    }

    // res.json(obj );
})
// db.collection('document_col1').insertOne({documentId : id , data : defaultValue})
app.post("/register", (req, res) => {
    // res.
    let a = req.body.id.toString();
    console.log(a.toLowerCase());
    let b = a.toLowerCase();
    db.collection('registered_users').insertOne({id : b})
    .then(()=>{
        res.status(200).json("Registered now");
    }
    )
    .catch(
       (e)=>{ res.status(500).json("error:", e);}
    )
    
})



app.get("/get_registered_users", (req, res) => {
    let registered_users = [];
    db.collection('registered_users')
        .find()
        .forEach(user => registered_users.push(user.id))
        .then(() => {
            res.status(200).json(registered_users);

        })
        .catch((e) => {
            res.status(500).json("error:", e);
        }

        )

})
// /get_notification

app.post("/get_notification", (req, res) => {

    let a = req.body.id.toString();
    console.log(a.toLowerCase());
    let b = a.toLowerCase();
    // let dummy = "0x12CB2FfF48C573eB77A592714Bd49004e090574F";
    // let dum2 = dummy.toLowerCase();
    db.collection('pending_approvals')
        .findOne({ user_id: b })
        .then((data) => {
            if (!data) res.status(200).json("");
            else res.status(200).json(data.hospital_list);
            console.log(data)
        })
        .catch((e) => {
            res.status(500).json("error:", e);
        })



})    
 
app.post("/delete_notification", (req, res) => {

    let a = req.body.user_id.toString();
    console.log(a.toLowerCase());
    let b = a.toLowerCase();
    let c = req.body.hospital_id.toString();
    let d = c.toLowerCase();
    // let dummy = "0x12CB2FfF48C573eB77A592714Bd49004e090574F";
    // let dum2 = dummy.toLowerCase();
    db.collection('pending_approvals')
    .updateMany(
        { user_id: b },
        { $pull : {hospital_list:d} }
        )
    .then( () =>{
        console.log("del " ,req.body );
        res.status(200).json("success");
    }
    )    
    .catch((e) => {
            res.status(500).json("error:", e);
    }) 
    //db.stores.updateMany(
    // { },
    // { $pull: { fruits: { $in: [ "apples", "oranges" ] }, vegetables: "carrots" } }
// )


})  

app.post("/add_notification", (req, res) => {

    let a = req.body.user_id.toString();
    console.log(a.toLowerCase());
    let b = a.toLowerCase();
    let c = req.body.hospital_id.toString();
    let d = c.toLowerCase();
    // let dummy = "0x12CB2FfF48C573eB77A592714Bd49004e090574F";
    // let dum2 = dummy.toLowerCase();
    db.collection('pending_approvals')
    .updateMany(
        { user_id: b },
        {$push:{hospital_list:d}}
        )
    .catch((e) => {
            res.status(500).json("error:", e);
    })        
        // .findOne({ user_id: b })
        // .then((data) => {
        //     if(!data)  res.status(200).json("");
        //     else res.status(200).json(data.hospital_list);
        //     console.log(data)
        // })
        // .catch((e) => {
        //     res.status(500).json("error:", e);
    

    //db.employees.updateMany(
    //{_id:3},
    //{$push:{"skills":"Sports"}})


}) 
