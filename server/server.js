import express from "express"
import axios from "axios"
import pg from "pg"
import cors from "cors";
import bodyParser from "body-parser";



const app = express();
const port = 4000;
const link = `http://localhost:${port}/home`

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "practiceProjects",
    password: "Mkhits4times",
    port: 5432,
})
db.connect();

app.get("/home", async (req, res) => {
    try{
        const result = await db.query("SELECT * FROM todonotes ORDER BY id ASC");
        const titles = result.rows.map(row => row.title);
        res.json(titles);
    }catch (err) {
        console.log(err)
    }
});

app.post("/home", async (req, res) => {
    console.log("POST-HOME")
    const title = req.body.title;
    try { 
        const result = await db.query("INSERT INTO todonotes (title) VALUES ($1)", [title]);
        console.log(title);
        res.status(201).send("Item added successfully");
    } catch (err) {
        console.error("Error handling POST /home:", err);
        res.status(500).send(err);
    }
});

app.delete("/home", async (req, res) => {
console.log("Del-HOME")
const del_title = req.body.del_title;
try {
    const result = await db.query("DELETE FROM todonotes WHERE title = $1", [del_title]);
    console.log(del_title);
    res.status(201).send("Item Removed successfully");
} catch(err) {
    console.error("Error handling POST /home:", err);
    res.status(500).send(err);
}
})



app.listen(port, () => {
    console.log(`App is running on ${link}`)
})