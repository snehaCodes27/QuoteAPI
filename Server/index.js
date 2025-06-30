const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());



app.get("/",(req,res)=>{

	const url = "mongodb+srv://snehamatkar3:nO0qwZlDMfKHkUQJ@cluster0.ystdhkg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

	const con = new MongoClient(url);

	const db = con.db("Quote_30june25");
	const coll = db.collection("Quote");

	coll.find().toArray()
		.then(response => {
			const r = parseInt(Math.random() * response.length);
			const { _id, ...quoteWithoutId } = response[r];
			res.send(quoteWithoutId);
		})
		.catch(err => {
			res.send(err);
		});
});

app.listen(9000, () => {
	console.log("server @9000 ready to serve");
});

