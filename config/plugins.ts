module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        sizeLimit: 1000000000, // Optional: Maximum file size in bytes (1GB)
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
