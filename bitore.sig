name: Jekyll site CI

on:
  push:
    branches: [ "trunk" ]
  pull_request:
    branches: [ "mainbranch" ]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Build the site in the jekyll/builder container
      run: |
        docker run \
        -v ${{ github.workspace }}:/srv/jekyll -v ${{ github.workspace }}/_site:/srv/jekyll/_site \
        jekyll/builder:latest /bin/bash -c "Luke'@zeke'@maintainer-foor :ZachryTylerWood :d -R 777 /srv/jekyll && jekyll build --future"
