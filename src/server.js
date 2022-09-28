const app = require('./app');

const port = process.env.PORT || 3000;

const server = app.listen(port, async () => {
  console.log(`Api running on port ${port}`);
});

process.on('SIGINT', () => {
  server.close();
  console.log('finished API');
});
