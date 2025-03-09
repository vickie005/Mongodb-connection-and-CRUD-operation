require("dotenv").config();
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";

app.use(express.json());
app.use(cors());

const client = new MongoClient(MONGO_URI);
let usersCollection;

async function connectDB(){
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db("testDB");
        usersCollection = db.collection("users");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

connectDB();

app.post("/users", async (req, res) => {
    try{
        const user = req.body;
        const result = await usersCollection.insertOne(user);
        res.status(201).json({message: "User added", userId: result.insertedId});
    }catch (error) {
        res.status(500).json({ error: "Failed to add user"});
    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await usersCollection.find().toArray();
        res.json(users);
    }catch (error){
        res.sendStatus(500).json({ error: "Failed to fetch users"});
    }
});

app.get("/users/:id", async (req,res) => {
    try{
        const user = await usersCollection.findOne({_id: new ObjectId(req.params.id) });
        if (!user) {
             return res.status(404).json({ error: "User not found" });
         }
          res.json(user);
    } catch (error){
        res.status(500).json({ error: "Failed to fetch user", details: error.message });
    }
});

app.get("/", (req, res) => {
    res.send("Welcome to the MongoDB CRUD API!");
});

app.put("/users/:id", async (req,res) => {
    try{
        const updateData = req.body;
        const result = await usersCollection.updateOne(
            { _id: new ObjectId(req.params.id)},
            {$set: updateData}
        );
        if (result.matchedCount === 0) return res.status(404).json({ error: "User not found"});
        res.json({message: "User updated"});
    } catch (error){
        res.status(500).json({ error: "Failed to update user"});
    }
});

app.delete("/users/:id", async (req,res) => {
    try{
        const result = await usersCollection.deleteOne({_id: new ObjectId(req.params.id)});
        if (result.deletedCount === 0) return res.status(404).json({ error: "User not found"});
        res.json({ message: "User deleted"});
    } catch (error) {
        res.status(500).json({ error: "Failed to delete user"});
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
