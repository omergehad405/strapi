"use strict";

const sendEmailToSubscribers = async (blogPost) => {
  const subscribers = await strapi.services.subscriber.find({
    subscribed: true,
  });
  const emailList = subscribers.map((subscriber) => subscriber.email);

  for (const email of emailList) {
    await strapi.plugins["email"].services.email.send({
      to: email,
      subject: `تم نشر مقالة جديدة بعنوان : ${blogPost.title}`,
      text: `اقرأ احدث المقالات: ${blogPost.title}. Read more at: <link>`,
      html: `<p>اقرأ احدث مقالاتنا: <strong>${blogPost.title}</strong>.</p><p>Read more at: <a href="<link>">${blogPost.title}</a></p>`,
    });
  }
};

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    await sendEmailToSubscribers(result);
  },
};
