const mongoose = require('mongoose');
const app = require('./app');

const DB_HOST =
  'mongodb+srv://apinchuk:QsTKCaveXuHFVdOy@cluster0.7f87jul.mongodb.net/db_contacts?retryWrites=true&w=majority';

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running. Use our API on port: 3000');
    });
    console.log('Database connection successful');
  })
  .catch(er => {
    console.log(er.message);
    process.exit(1);
  });
