const app = require("./src/app");
const { conn } = require("./src/db/index.js");

conn.sync({ force: false }).then(()=>{
    app.listen(3001, () => console.log('%listening on port 3001!, is localhost'));
})


