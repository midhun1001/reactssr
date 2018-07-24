import app from './server';

const port = process.env.PORT || 3000;

app.listen(port);
console.log('App is running at port 3000');
