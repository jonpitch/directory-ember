import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class CompanyProfileRoute extends Route {
  async model(params) {
    const response = await fetch('/companies.json');
    const companies = await response.json();
    const company = companies.filter(c => {
      return c.slug === params.slug;
    });

    return company[0];
  }
}
