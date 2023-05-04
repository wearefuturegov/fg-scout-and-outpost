# Costs

The Outpost Platform is an open source product there are still costs involved in setting it up and running it. One of our goals is to make it easy for people to use by removing the need for technical knowledge, but you'll still need to pay for hosting. The amount you pay depends on what you need. We suggest using multiple databases for reliability and performance.

Some of the applications in the platform such as Scout can be run in a static environment or can be adapted to build on the server to increase performance, some may even be free to run on some platforms.

## Ways to setup the Outpost Platform

### Setup the Outpost Platform in a small (mostly free) hosting environment

Outpost, Outpost API and Scout can be setup in environments such as Heroku, Fly.io, Netlify and Vercel.

These types of platforms offer 1-click installs for applications and offer a generous free tier with some limitations.

This is a cost effective way to get your data into an Open referral UK API format. The downside being that the environment will not be production ready straight away.

### Setup just Outpost + Scout alongside a development partner like TPXimpact 👋 or your internal development team

The Outpost Platform was created by TPXimpact (formerly FutureGov) however the product is open source and is well documented so anyone with the technical ability should be able to get set up with the project and deploy the application to production.

We have a discussion board available alongside each product for developers to raise issues and get help form the community. We would also welcome any code contributions back into the main application as well.

### Setup Outpost + Scout as part of a wider piece of work

This is the most common option currently chosen by those who are using or are interested in using the Outpost Platform. TPXimpact are a digital transformation company and we aim to support organisations to build a better future for people, places and the planet.

Alongside setting up the platform we can offer a wide range of services from user research to organisation and service design, design, development outside of the Outpost Platform, bespoke features built around the Outpost Platform and support and maintenance of your environments.

We prefer this approach as the problem isn't always solved by setting up a service directory. Sometimes a service directory isn't even needed and there are other areas in which the service information can be used first.

This option also helps to grow the community. Each project we take on funds features that others can benefit from, think of it as the robin hood approach. Benefiting from and giving back to the community is a big part of choosing to use Outpost, it's not for everyone though.

## What does a project look like?

A typical project which includes Outpost, Outpost API and Scout will include:

- Research around yours and your users needs
- Analysis and export of the existing data
- Customisation of the platform to your needs, custom fields and taxonomies and any filters you require if setting up Scout
- Branding and themeing of Outpost and Scout
- Review of current advice and guidance content - to inform the best strategy for migration and opportunities for improvement
- Setup of web analytics on Scout as per your preference and a review of reporting requirements and available tooling in your organisation to inform the best data reporting & insights strategy
- Setup of Outpost, and the Outpost API
- Setup of Scout(s)
- Integration with the Ofsted feed (if required)
- Data migration - from existing databases into Outpost Open Referral format
- Testing with user to gather and action any feedback
- Creation of a launch and transition plan for the new service directory

## Our setup recommendations

We recommend additional databases in production for resilience. It's also a good idea to have more than one database available for reliability and scalability. Multiple databases distribute the load of data storage and retrieval across several machines, it reduces the risk of data loss and increases performance. Having multiple databases also allows for more flexibility in scaling the application in case user demand increases. It's also a good idea to have some form of caching on the frontend as well as on the API.
