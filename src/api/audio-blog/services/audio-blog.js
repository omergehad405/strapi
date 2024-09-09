'use strict';

/**
 * audio-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::audio-blog.audio-blog');
