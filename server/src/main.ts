import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';
import { PORT } from './constants/config';
import { router } from './routes/video';
import { bullRouter } from './queues/bullboard';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/static', express.static(path.join(__dirname, '../thumbnails')));
app.use(express.urlencoded({
  extended: true
}));
// const sentence = `PostgreSQL, often simply "Postgres", is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards-compliance. As a database server, its primary function is to store data, securely and supporting best practices, and retrieve it later, as requested by other software applications, be it those on the same computer or those running on another computer across a network (including the Internet). It can handle workloads ranging from small single-machine applications to large Internet-facing applications with many concurrent users. Recent versions also provide replication of the database itself for security and scalability.
// PostgreSQL implements the majority of the SQL:2011 standard, is ACID-compliant and transactional (including most DDL statements) avoiding locking issues using multiversion concurrency control (MVCC), provides immunity to dirty reads and full serializability; handles complex SQL queries using many indexing methods that are not available in other databases; has updateable views and materialized views, triggers, foreign keys; supports functions and stored procedures, and other expandability, and has a large number of extensions written by third parties. In addition to the possibility of working with the major proprietary and open source databases, PostgreSQL supports migration from them, by its extensive standard SQL support and available migration tools. And if proprietary extensions had been used, by its extensibility that can emulate many through some built-in and third-party open source compatibility extensions, such as for Oracle.`;
// console.log(npmConvertTranscriptToKeywords(sentence));
// const fillDBWithRandomData = () => {
//   let times = 0;
//   const stream = fs.createReadStream('/home/ritwiz/Desktop/movies.csv')
//   stream.pipe(csv())
//     .on('data', async (row) => {
//       times++;
//       if (times == 1000) stream.destroy();
//       const title = row['Cast'];
//       const description = row['Release Year'] + ' ' + row['Title'] + ' ' + row['Origin/Ethnicity'] + ' ' + row['Director']
//       const content = row['Plot'];
//       const keywords = npmConvertTranscriptToKeywords(content).join(',');
//       return VideoDB.mockInsert({
//         title,
//         description,
//         fileName: description,
//         keywords,
//       })
//     })
// }
// fillDBWithRandomData();

app.use(router);
app.use('/admin/queues', bullRouter);
app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT);
});