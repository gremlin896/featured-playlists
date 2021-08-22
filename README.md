# FeaturedPlaylists

Built in 2-3 hours for a technical task.

Notes:

- `featured-playlists` is a pretty horrible name for the monorepo, this would probably be the org name instead
- e2e was not considered due to time constraints, and the default scaffolded e2e application will fail
- Minimal unit tests were added, due to time constraints. A working set of units tests can be found in playlists.component.spec.ts, I have left notes in the other spec files showing how I would approach these cases
- For a simple application like this, the NgRx and routing implementations, as well as the use of Nx Monorepo are probably over complex, but would be appropriate if the app was expected to grow to a much larger scale.
- The brief quotes the entity name as `Playslists`, I assumed this was a typo for `Playlists` and wasn't required to be like that in the app.
