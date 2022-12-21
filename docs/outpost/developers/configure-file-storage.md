# Configure file storage

Currently we are only using GCP for ActiveStorage, we would like this to be interchangeable. [[Milestones]]

You will need to follow the below for each bucket, **dev, staging and prod!**

1. Google cloud storage > create a bucket

- `outpost_dev`
  - location type: region - `europe-west2` (london)
  - storage classe: `standard`
  - access to objects - "Enforce public access prevention on this bucket" unchecked, access control is uniform
  - protect object data: none

2. Create credentials in APIs and services > + create credentials > service account

- `outpost-dev`
  - description: `Service account for access to activestorage bucket on development account`
- Grant this service account access to the project
  - skip
- Grant users access to this service account
  - skip

3. Download credentials

- Go into IAM and admin > Service Accounts and find the one you just created, select `keys` at the top
- Click Add Key > key type JSON
- Add them to the project and store them somewhere safe and encrypted. You will need the .json file to deploy.

4. add service account to bucket

- go to your bucket
- permissions > + add enter email address of service account
- Grant service account access to the project:
  - Cloud Storage > Storage Admin role
