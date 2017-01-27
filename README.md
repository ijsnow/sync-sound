# Sync Sound Mobile Application

Built with [React Native v0.40](http://facebook.github.io/react-native/releases/0.40/).

## Prerequisites

1. [node && npm](https://nodejs.org/en/): I recommend using a node verion manager such as
[nvm](https://github.com/creationix/nvm) to make it easy to manage node versions in the future

2. [yarn package manager](https://yarnpkg.com/): A better npm client.

3. [React Native Tools](http://facebook.github.io/react-native/releases/0.40/docs/getting-started.html#content):
Follow the getting started guide.

4. [ESLint](http://eslint.org/docs/user-guide/integrations): A linting tool for JavaScript.
You must set your editor of choice up to support eslint. The configuration is already
included in the project.

5. Have a solid understanding of the git workflow. Its not that bad and proper branching and version control is imperative. Check out these articles.

  - https://www.atlassian.com/git/tutorials/comparing-workflows
  - https://guides.github.com/introduction/flow/

## Getting Started

Download the project and install dependencies

```
$ git clone https://github.com/ijsnow/sync-sound.git
$ cd sync-sound/SyncSound
$ yarn
```

## Development Environments

**MAKE SURE YOU FOLLOW THE PROPER GETTING STARTED GUIDE
[HERE](http://facebook.github.io/react-native/releases/0.40/docs/getting-started.html#content).**

### Running on iOS

```
$ cd ~/path/to/sync-sound/SyncSound
$
$ # Via the command line
$ react-native run-ios
$
$ # Via Xcode(How I do it for objective reasons)
$ yarn run open:ios
$ # Press run in Xcode
```

### Running on Android

```
$ cd ~/path/to/sync-sound/SyncSound
$ react-native run-android
```
