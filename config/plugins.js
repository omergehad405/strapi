module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "mailjet",
      providerOptions: {
        publicApiKey: env("d04aa3e8ec106cb7974566d565400676"), // Your Mailjet public API key
        secretApiKey: env("0ec60dcbfca47250e924d524664e0f90"), // Your Mailjet secret API key
      },
      settings: {
        defaultFrom: "Majdahsamir@gmail.com", // Replace with your default sender email
        defaultReplyTo: "Majdahsamir@gmail.com", // Replace with your default reply-to email
      },
    },
  },
});
