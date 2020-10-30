#FROM jekyll/jekyll:minimal AS base
#WORKDIR /app
#EXPOSE 4000

FROM ruby:alpine AS base

LABEL maintainer "twsl <45483159+twsl@users.noreply.github.com>"

FROM base AS build

# https://stackoverflow.com/a/49119046
RUN apk add --no-cache \
  bash \
  git \
  build-base \
  libxml2-dev \
  libxslt-dev \
  nodejs \
  && rm -rf /var/lib/apt/lists/* \
  && gem install bundler jekyll \
  && gem cleanup

#RUN apk add --update ruby
# RUN apk add --update ruby \
#   && apk add build-dependencies build-base ruby-dev libffi-dev \
#   && gem install bundler --no-ri --no-rdoc \
#   && bundle install --without development test \
#   && gem cleanup \
#   && apk del build-dependencies

# Install jekyll
#RUN gem install jekyll bundler

#-----

#FROM jekyll/jekyll:builder AS build
#WORKDIR /app

#COPY . .

#FROM build as unittest
#FROM build as functionaltest

#FROM build AS publish

#FROM base AS final
#WORKDIR /app
#COPY --from=publish /src .
#ENTRYPOINT ["jekyll"]

#CMD [ "bash" ]