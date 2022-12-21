# Deploying Outpost

See [[Environmental variables]]

We deploy using heroku.

```sh
# Set stack
heroku stack:set heroku-20 -a heroku-app-name

# Setup ActiveStorage credentials
heroku config:set -a heroku-app-name \
GCP_BUCKET=bucket_name \
GCP_PROJECT=project_name \
GCP_APPLICATION_CREDENTIALS="$(< config/secrets/correct-keyfile-for-env.json)"

# set the google api keys
heroku config:set -a heroku-app-name \
GOOGLE_API_KEY=xxx \
GOOGLE_CLIENT_KEY=xxx

# set initial admin password
heroku config:set -a heroku-app-name \
INITIAL_ADMIN_PASSWORD=xxx

# set env banner if required
heroku config:set -a heroku-app-name \
SHOW_ENV_BANNER=staging

```

```sh
# Create your first user
User.create!({ first_name: "Example", last_name: "Admin", admin: true, admin_users: true, admin_ofsted: true, email: "email@email", password: ENV["INITIAL_ADMIN_PASSWORD"]})

```
