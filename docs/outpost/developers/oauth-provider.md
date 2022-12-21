# oAuth Provider

Outpost can work as an identity provider for other apps. Users with the highest permissions can access the `/oauth/applications` route to create credentials.

Once authenticated, consumer apps can fetch information about the currently logged in user with the `/api/v1/me` endpoint.

[An impementation can be seen here](https://github.com/wearefuturegov/tell-us-who-you-employ)
