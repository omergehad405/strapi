module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        // Optional: Set a specific size limit if needed
        sizeLimit: 1000000000, // Example: 1GB max file size
      },
    },
  },
});
