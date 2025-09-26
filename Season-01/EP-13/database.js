import {MongoClient} from "mongodb";

const url = "mongodb+srv://root:root@namastenode.5efn8i0.mongodb.net/";
const client = new MongoClient(url);

async function connect() {
    try {
        // Use the connect method of the client to connect to the server
        await client.connect();
        console.log("Connected successfully to server");
        
        const db = client.db("HelloWorld");
        
        // To list all the collections in a database. Return a cursor and to iterate over a cursor you have to use the for await ... of loop
        const names =  db.listCollections({}, { nameOnly: true })
        for await (const doc of names) {
            console.log(doc);
        }

        // Get a single document. Return a cursor and to iterate over a cursor you have to use the for await ... of loop
        const User = db.collection("User");
        const userQuery = {firstName: "Ashmit"};
        // find({}) returns all the documents
        const getUser = User.find({});
        for await (const u of getUser) {
            console.log(u);
        }

        // Find one
        const options = {
            // projection: {firstName: 0} // 0 = exclude, 1 = include
            // The above case will return all other fields except firstName

            // The case below will only return firstName. _id is something if you don't want to return you will specify 0 otherwise not including it in the projection defaults it to be 1
            projection: {
                _id: 0,
                firstName: 1
            }
        }
        const user1 = await User.findOne(userQuery, options);
        console.log(user1);

        /////// Insert data in the User collection /////// 
        const newUser = {firstName: "Yuvraj", lastName: "Pathak", city: "Banaras", phoneNumber: "1234567890"}

        const isUserPresent = await User.findOne(newUser);
        if (!isUserPresent) {
            const insertResult = await User.insertOne(newUser);
            console.log(insertResult);
        }
        
        

        // Update data in the User collection
        const updateResult = await User.updateOne(userQuery, {$set: {city: "New York"}});
        console.log(updateResult);

        // Upsert a data: Adds a document in case it is not present while updating

        const query2 = {firstName: "Anamika", lastName: "Pathak", phoneNumber: "+918294953660"};

        const optionsForUpsert = {upsert: true};
        const updateResult2 = await User.updateOne(query2, {$set: {city: "Begusarai"}},optionsForUpsert);
        console.log(updateResult2);




    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

connect().catch(console.dir);


/* 
    1) Go to the Mongodb website
    2) Create a free M0 cluster
    3) Create a user
    4) Get the connection string
    5) Install Mongo DB Compass

*/