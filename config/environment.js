/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
<<<<<<< HEAD
    modulePrefix: 'message-board',
=======
    modulePrefix: 'message',
>>>>>>> origin/master
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
<<<<<<< HEAD
	  firebase: {
      apiKey: "AIzaSyDQP92iHOx3qV9MoPisk0wuEG6fJminD-c",
      authDomain: "message-board-67d70.firebaseapp.com",
      databaseURL: "https://message-board-67d70.firebaseio.com",
      storageBucket: "message-board-67d70.appspot.com",
    },


=======
>>>>>>> origin/master
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

<<<<<<< HEAD
=======
    firebase: {
       apiKey: "AIzaSyDQP92iHOx3qV9MoPisk0wuEG6fJminD-c",
    authDomain: "message-board-67d70.firebaseapp.com",
    databaseURL: "https://message-board-67d70.firebaseio.com",
    projectId: "message-board-67d70",
    storageBucket: "message-board-67d70.appspot.com",
    messagingSenderId: "103822028119"


     },


>>>>>>> origin/master
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
