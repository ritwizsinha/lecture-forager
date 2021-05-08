import * as express from 'express';
import { PORT } from './constants/config';
import { Request, Response } from 'express';
import { handleUploadMiddleware } from './middleware/upload';

const app = express();
app.use(express.json());

app.post('/upload', handleUploadMiddleware.single('file'), (req: Request, res: Response) => {
  console.log(req.body);
  console.log(req.file);
  res.send({ message: 'Hello video found' });
});

app.listen(PORT, () => {
  console.log('server started at http://localhost:'+PORT);
});