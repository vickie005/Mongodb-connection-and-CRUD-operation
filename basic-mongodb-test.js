const { mongoClient } = require("mongodb");

const uri =  "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
    try{
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("testDB");
        const collection = db.collection("users");

            const newUser = { name: "Victory", age: 19, role: "Developer" };
            const result = await collection.insertOne(newUser);
            console.log("Inserted:", result.insertedId);

            const users = await collection.find().toArray();
            console.log("All Users:", users);

            await collection.updateOne({ name: "Victory" }, { $set: { age: 20 } });
            console.log("Updated Victory's age.");

            await collection.deleteOne({ name: "Victory"});
            console.log("Deleted Victory's record.");
        } catch (error){
            console.error("Error:", err);
        }finally{
            await client.close();
        }
    }
run();