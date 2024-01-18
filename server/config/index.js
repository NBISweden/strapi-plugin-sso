"use strict";

module.exports = {
  default: {
    REMEMBER_ME: false,
    GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    GOOGLE_OAUTH_REDIRECT_URI:
      process.env.GOOGLE_OAUTH_REDIRECT_URI ||
      "http://localhost:1337/strapi-plugin-sso/google/callback",
    GOOGLE_ALIAS: process.env.GOOGLE_ALIAS,
    GOOGLE_GSUITE_HD: process.env.GOOGLE_GSUITE_HD,
  },
  validator() {},
};
