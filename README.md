# Strapi plugin strapi-plugin-sso

## Dependency updates

```command
./update-package-lock
```

## Example Configuration

```javascript
// config/plugins.js
module.exports = ({ env }) => ({
  "strapi-plugin-sso": {
    enabled: true,
    config: {
      GOOGLE_OAUTH_CLIENT_ID: "[Client ID created in GCP]",
      GOOGLE_OAUTH_CLIENT_SECRET: "[Client Secret created in GCP]",
      GOOGLE_OAUTH_REDIRECT_URI:
        "http://localhost:1337/strapi-plugin-sso/google/callback", // URI after successful login
      GOOGLE_ALIAS: "", // Gmail Aliases
      GOOGLE_GSUITE_HD: "", // G Suite Primary Domain
    },
  },
});
```
