// path: /src/api/subscribers/controllers/subscriber.js

"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::subscriber.subscriber",
  ({ strapi }) => ({
    async subscribe(ctx) {
      // Method name must be 'subscribe' as defined in the route
      try {
        const { email } = ctx.request.body;

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return ctx.badRequest("Invalid email format");
        }

        // Check for existing subscriber
        const existingSubscriber = await strapi.db
          .query("api::subscriber.subscriber")
          .findOne({
            where: { email },
          });

        if (existingSubscriber) {
          return ctx.conflict("This email is already subscribed");
        }

        // Save the new subscriber
        const newSubscriber = await strapi.db
          .query("api::subscriber.subscriber")
          .create({
            data: { email },
          });

        return ctx.send({
          message: "Subscription successful",
          data: newSubscriber,
        });
      } catch (error) {
        ctx.internalServerError("An error occurred while subscribing");
      }
    },
  })
);
