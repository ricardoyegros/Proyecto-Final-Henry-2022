const server = require('./app');
const { conn } = require('./database/db');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log(`%s 🚀 listening at 3001 🚀`); // eslint-disable-line no-console
  });
});
