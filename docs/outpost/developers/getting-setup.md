---
sidebar_position: 1
---

# Getting setup

:::caution
Please be aware this documentation is still under construction so this section may move at some point!
:::

## Developers guide to getting setup with Outpost

Any issues, please see [Troubleshooting](troubleshooting.mdx) or raise a [ticket](https://github.com/wearefuturegov/outpost) or ask in the [discussion board](https://github.com/wearefuturegov/outpost/discussions).

Some of these sections may not be relevent to you, if so please skip past them.

Its helpful but not essential to have [homebrew](https://brew.sh/) installed.

- Ruby on Rails application
- Postgres database
- Uses cron jobs

Heroku

- Papertrail
- Sentry
- Scheduler
- Postgres

GovUK Notify

Google cloud platform

## Installing nodejs

**NB: Don't install from nodejs.org it messes with nvm**

```sh
# install nodejs with homebrew NOT nodejs.org
brew install node

# install node version manager

# install yarn
```

- Install [Node version manager](https://github.com/nvm-sh/nvm)
- [Install yarn](https://yarnpkg.com/getting-started/install)

A useful app to install is `mongodb-compass`. You can install it with

```sh
brew install --cask mongodb-compass
```

## Installing ruby

```sh
# install ruby
brew install ruby

# install rbenv
brew install rbenv

# install the correct ruby version NB it may change!
rbenv install 3.0.3
```

## Installing postgresql

```sh
# install postgresql
brew install posgresql
```

You can use postico to view the database in a gui if you'd like

```sh
brew install --cask postico
```

If your using oh-my-zsh the [postgres plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/postgres) is very handy.

## Create the outpost postgres user and role

```sh
createuser -s outpost
```

## Installing Outpost

```sh
# checkout the repo
git clone git@github.com:wearefuturegov/outpost.git
cd outpost

# Don't forget to setup your .env files

bundle install
yarn
rails db:setup
rails s

# run end-to-end and unit tests
rake
```

You can access the site by going to [http://localhost:3000](http://localhost:3000).

You will also need to [[Configure ActiveStorage]] and [[Maps]].
