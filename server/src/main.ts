import * as express from 'express';
import { PORT, PG_HOSTNAME, PG_PASSWORD, PG_PORT, PG_USER, PG_DATABASE } from './constants/config';
import { VideoDB } from './db/video';
import { router } from './routes/video';
import { Pool, Client } from 'pg';

const app = express();
app.use(express.json());

app.use(router);


// (async () => {
//   console.log("THIS CODE RUNS");
//   try {
//     const res = await VideoDB.insert({
//       storage_id: 'abc2.txt',
//       title: 'First TItle',
//       description: 'First Description',
//       filename: 'abc.txt',
//     });
//     console.log(res);
//     const { rows } = await VideoDB.getAll();
//     console.log(rows);
//   } catch (err) {
//     console.log("Erroring out")
//     console.log(err);
//   }
// })();
// console.log("This runs");
app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT);
});