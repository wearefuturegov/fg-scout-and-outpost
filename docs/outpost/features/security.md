# Security

- Users have their own logins
- Outpost is written using [Ruby on Rails](https://rubyonrails.org/) a popular and widely used framework.

We currently only offer username and password for admin and service owners in Outpost. We have included password-less login on our roadmap and are open to suggestions for other implementation ideas as well.

The Outpost API and its database currently sit separately from Outpost. Outpost populates the API database with only public information. This means Outpost could be located behind a firewall or on an internal network while the API sits outside. Since the API database contains no sensitive data this makes it much more secure.
