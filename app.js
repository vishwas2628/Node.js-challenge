import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import { MongoClient, ObjectId } from 'mongodb';
import path from "path";
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';

const url = process.env.DB_URL;
const client = new MongoClient(url);
const dbName = 'myProject';
let Events;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride("_method"));

//connect the mongo db server
async function connect() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    Events = db.collection('Events');
    return db;
}
// call connect
connect();

//  root 
app.get("/api/v3/app",async(req,res)=>{
    const allEvents = await Events.find({}).toArray();
    res.render("index.ejs" ,{allEvents});
});

// render create form 
app.get("/api/v3/app/events/new", (req,res)=>{
    res.render("create.ejs");
});

// post new data
app.post("/api/v3/app/events",async (req,res)=>{
    const newEvents = req.body;
    await Events.insertOne(newEvents);
    res.redirect("/api/v3/app");
});

// render view single event
app.get("/api/v3/app/events/:id",async (req,res)=>{
    const {id} = req.params;
    // const evants =await Events.find(id);
    const event = await Events.findOne({_id: new ObjectId(id)});
    res.render("view.ejs",{event});
});

// modify data
app.put("/api/v3/app/events/:id", async(req,res)=>{
    const {id}=req.params;
    await Events.updateOne({_id: new ObjectId(id)});
    res.redirect("/api/v3/app");
});

// // delete event data
app.delete("/api/v3/app/events/:id", async (req,res)=>{
    const {id}=req.params;
    await Events.deleteOne({_id: new ObjectId(id)});
    res.redirect("/api/v3/app");
});

app.listen("8080" ,()=>{
    console.log("Server is listning");
});