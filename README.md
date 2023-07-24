# ringoldsdev.github.io

Personal website created with NodeJs v18, PNPM, Typescript, Eleventy, Alpine JS, and Tailwind CSS.

Gets build and deployed to Github Pages using Github Actions.

## Errors

### The requested URL returned error: 403

If you get:
```bash
remote: Permission to <username>/<username>.github.io.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/<username>/<username>.github.io.git/': The requested URL returned error: 403
Error: Action failed with "The process '/usr/bin/git' failed with exit code 128"
```

Set `Settings` > `Actions` > `General` > `Workflow permissions` to `Read and write permissions`

## Originally created by 
https://github.com/surjithctly/neat-starter
Surjith S M ( [@surjithctly](https://surjithctly.in/) )
