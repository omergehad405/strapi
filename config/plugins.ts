module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("dbfty465x"),
        api_key: env("481788693473777"),
        api_secret: env("NEvFpvnakHGbGNw9m9o1mSyFXpo"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
