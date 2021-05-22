import * as express from 'express';
import { PORT } from './constants/config';
import { router } from './routes/video';
import { bullRouter } from './queues/bullboard';
const app = express();
app.use(express.json());

app.use(router);
app.use('/admin/queues', bullRouter);
app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT);
});