import * as express from 'express';
import { PORT } from './constants/config';
import { Request, Response } from 'express';
const app = express();

app.get('/hello', (req: Request, res: Response) => {
  res.send({
    message: 'hello world',
  });
});
app.listen(PORT, () => {
  console.log('server started at http://localhost:'+PORT);
});