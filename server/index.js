// npm init  -> to initialize npm in server folder

// npm i express pg cors  -> installs express(framework), pg(psql driver), 
// cors(frontend can run in different port and backend can run in different port and can 
// interact)

// to run -> node index
// automatically reload on changes -> nodemon index
const express = require("express")
const app = express();
const cors = require("cors")
const pool = require("./db")


// middleware
app.use(cors())
app.use(express.json()) //used to access req.body

// Routes 

// create a todo
app.post("/todos", async(req,res)=>{
    try {
        console.log(req.body)
        const {descript} = req.body;
        const newTodo = await pool.query("INSERT INTO todo(descript) values ($1)", [descript]) 
    } catch (err) {
        console.error(err.message);
    }
    // res.json(newTodo.rows[0])
})


// get all todo
app.get("/todos", async(req, res)=>{
    try {
        const printTodos = await pool.query("SELECT *FROM todo")
        res.json(printTodos.rows)
    } catch (err) {
        console.error(err);
    }
})
// get a todo
app.get("/todo/:id", async(req,res)=>{
    try {
        const {id} = req.params
        const printodo = await pool.query("SELECT *FROM todo WHERE id=$1", [id])
        res.json(printodo.rows)
    } catch (err) {
        console.error(err.message);
    }
})
// update a todo
app.put("/todo/:id", async(req, res)=>{
    const {id} = req.params
    const {descript} = req.body
    try {
        await pool.query("UPDATE todo SET descript=$1 WHERE id=$2", [descript, id])
        res.json("Successfully Updated")
    } catch (err) {
        console.error(err.message);
    }
})
// delete a todo
app.delete("/todo/:id", async(req, res)=>{
    const {id} = req.params;
    try {
         await pool.query("DELETE FROM todo WHERE id = $1", [id])
        res.json("Successfully Deleted")
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(4000, ()=>{
    console.log("server started at port 4000");

})