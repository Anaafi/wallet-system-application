import compression from 'compression';
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// eslint-disable-next-line no-undef
const { PORT = 3000 } = process.env;

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Compression Middleware.
app.use(compression({ level: 9 }));

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, 'dist/app/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
