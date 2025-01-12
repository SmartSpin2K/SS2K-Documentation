# Create a Jekyl container from s zRuby Alpine Image

FROM ruby:3.0-alpine3.16

#add jekyll dependencies to Alpine

RUN apk update
RUN apk add --no-cache build-base gcc cmake git

#update the Ruby Bundler

RUN gem update bundler && gem install bundler jekyll
