const axios = require("axios");

module.exports = {
  init(config) {
    const { apiKey } = config;

    return {
      upload(file) {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("key", apiKey);
          formData.append("image", file.buffer.toString("base64"));

          axios
            .post("https://api.imgbb.com/1/upload", formData, {
              headers: formData.getHeaders(),
            })
            .then((response) => {
              if (response.data && response.data.data) {
                file.url = response.data.data.url;
                resolve();
              } else {
                reject(new Error("ImgBB upload failed"));
              }
            })
            .catch((error) => {
              reject(error);
            });
        });
      },

      delete(file) {
        // ImgBB API does not support deleting images via API in the free tier.
        return Promise.resolve();
      },
    };
  },
};
