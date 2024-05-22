import express from "express";
import http from "http";
import cors from "cors";
import mysql from "mysql2";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mysqlUrl = `mysql://root:LReXakBPjJUiTPhNEFnNZsMQtgLRFWGD@roundhouse.proxy.rlwy.net:50967/railway`;

// const db = mysql.createConnection({
// 	host: "roundhouse.proxy.rlwy.net",
// 	user: "root",
// 	password: "LReXakBPjJUiTPhNEFnNZsMQtgLRFWGD",
// 	database: "railway",
// 	port: 50967,
// });

const db = mysql.createConnection(mysqlUrl);

const server = http.createServer(app);

app.get("/", (req, res) => {
	res.send("hello world");
});

app.get("/getUser", (req, res) => {
	db.query("Select * from Infor", (err, result) => {
		if (result) {
			res.send(result);
		}
	});
});

server.listen(4555, () => {
	console.log("Server is running on port");
});
