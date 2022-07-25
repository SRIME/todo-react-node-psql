# A simple Guide to Backend development #

<details>
   <summary>File Meanings:</summary>
   <p>db.js contains the main connectivity to PostgreSQL</p>
   <p>index.js contains CRUD operation functions and establishes the connection on specified port</p>
   <p>database.sql contains some RAW SQL queries for reference</p>
</details>

STEP 1 :point_right: ``` npm init ``` To create a `package.json` file
                    You can Skip and create all the keys empty for `package.json`

STEP 2 :point_right: ```npm i express pg cors``` To install `express` (a nodejs framework), `pg` (a postgres driver), `cors` (for frontend can run in     different port and backend can run in different port and can interact)

Step 3 :point_right: We can use ```node index``` to run index.js, but there will be no automatic reload on file changes 
                      
Alternatively we can use ```nodemon index``` to run index.js and automatically reload on the file changes


# Each File Contents #
#### db.js ####
for connection pool use: ```const Pool = require("pg").Pool```

To establish connection using local variables: 

```node
const pool = new Pool({
    user:"username",
    password:"your_password",
    host:"localhost",
    port:5432,
    database:"database_name"
}) 
```

export the pool connection to use it in `index.js`: ```module.exports = pool;```

All together db.js looks like this:

```node
const Pool = require("pg").Pool

const pool = new Pool({
    user:"postgres",
    password:"2fb4cac9",
    host:"localhost",
    port:5432,
    database:"efarm"
})

module.exports = pool;
```
































----
#### index.js ####

heloo
