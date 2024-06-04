import express from "express"
import axios from "axios"
import pg from "pg"
import cors from "cors";



const app = express();
const port = 4000;
const link = `http://localhost:${port}/home`

app.use(cors())

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "practiceProjects",
    password: "Mkhits4times",
    port: 5432,
})
db.connect();

app.get("/home", async (req, res) => {
    console.log("RAME")
    try{
        const result = await db.query("SELECT * FROM todonotes ORDER BY id ASC");
        const titles = result.rows.map(row => row.title);
        console.log(titles)
        res.json(titles);
    }catch (err) {
        console.log(err)
    }
});

app.listen(port, () => {
    console.log(`App is running on ${link}`)
})