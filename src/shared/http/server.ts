import app from '@shared/http/app/app';

const port = process.env.PORT;

app.listen(port, () => console.log('server on port %s', port));
