module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c5df405137cfa5ad29453f351f10617b'),
  },
});
