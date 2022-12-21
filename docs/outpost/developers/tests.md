# Tests

It has some rspec tests on key functionality. Run them with:

```
bundle exec rspec
```

## Code coverage

SimpleCov and Codecov are set up to track code coverage. To see the code
coverage on a local branch, run the test suite and open `coverage/index.html`:

```
rake
open coverage/index.html
```

The coverage report is sent to Codecov after the tests run in CI. Once you open
a PR, Codecov will post a comment with a handy coverage delta and a link to view
line-by-line coverage for the PR.
