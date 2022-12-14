# Strapi plugin strapi-plugin-sso

## Dependency updates

```command
./update-package-lock
```

## Example Configuration

```
GOOGLE_OAUTH_CLIENT_ID="[Client ID created in GCP]"
GOOGLE_OAUTH_CLIENT_SECRET="[Client Secret created in GCP]"
GOOGLE_OAUTH_REDIRECT_URI="http://localhost:1337/strapi-plugin-sso/google/callback"
GOOGLE_ALIAS="" // Gmail Aliases
GOOGLE_GSUITE_HD="" // G Suite Primary Domain
LOGIN_REDIRECT_URL="/admin"
```
