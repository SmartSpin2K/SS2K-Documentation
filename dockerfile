# Jekyll build and serve container. Matches CI (Ruby 3.3). See README for usage.
FROM ruby:3.3
RUN gem update bundler && gem install bundler jekyll
WORKDIR /site
EXPOSE 4000
