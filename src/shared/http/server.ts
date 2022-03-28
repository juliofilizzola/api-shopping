import app from '@shared/http/app/app';

const port = 3333;

app.listen(port, () => console.log('server on port %s', port));
