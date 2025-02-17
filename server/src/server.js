import app from './app.js';
import { connectToDb, env } from './config/index.js';

connectToDb();

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
