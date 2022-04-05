console.log(process.env.SECRET_TOKEN);

export default {
  jwt: {
    secret: process.env.SECRET_TOKEN || '',
    expiresIn: '1d',
  },
};
