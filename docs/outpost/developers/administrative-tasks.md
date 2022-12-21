# Administrative tasks

Outpost depends on on several important [`rake`](https://guides.rubyonrails.org/v3.2/command_line.html) tasks.

Some of these can be run manually, and some are best scheduled using [Heroku Scheduler](https://devcenter.heroku.com/articles/scheduler) or similar.

See [[Crons]]

| Task                          | Description                                                                                                                                                  | Suggested schedule |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `open_objects:import`         | Run the bespoke import job from Open Objects. For this to succeed, you need several source CSV data files in the `/lib/seeds` folder. Will take a long time. | One\-off           |
| `build_public_index`          | Build the initial public index for the API service to use\.                                                                                                  | One\-off           |
| `process_permanent_deletions` | Permanently delete any services and users that have been "discarded" for more than 30 days\.                                                                 | Weekly             |
| `ofsted:create_initial_items` | Build the initial Ofsted items table                                                                                                                         | One\-off           |
| `ofsted:update_items`         | Check for any changes to Ofsted items against the Ofsted API                                                                                                 | Daily, overnight   |
| `update_counters:all`         | Update the counter caches to keep them in sync                                                                                                               | Daily, overnight   |
