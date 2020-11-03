import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('/companies.json');
    const companies = await response.json();
    return companies;
  }
}
