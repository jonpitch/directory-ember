import EmberRouter from '@ember/routing/router';
import config from 'directory-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('company', function() {
    this.route('profile', { path: '/:slug' });
  });
});
