import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';

export default Route.extend({
  store: service('store'),
  model(params) {
    const id = params.order_id;
    const store = this.get('store')
    return store.getOrderById(id)
  },



});
