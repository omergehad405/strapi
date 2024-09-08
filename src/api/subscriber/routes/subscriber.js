// path: /src/api/subscribers/routes/subscriber.js

module.exports = {
  routes: [
    {
      method: "POST", // This must be 'POST' to allow POST requests
      path: "/subscribe", // This should match the endpoint you're trying to access
      handler: "subscriber.subscribe", // Should match the controller method
      config: {
        auth: false, // Set to true if authentication is required
        policies: [],
        middlewares: [],
      },
    },
  ],
};
