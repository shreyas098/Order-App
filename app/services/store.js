import Service from "@ember/service";

export default Service.extend({
  getOrderById(id) {
    const orders = this.getOrders();
    return orders.findBy("id", id);
  },

  getOrders() {
    return [
      {
        id: "1",
        name: "Trello"
      },
      {
        id: "2",
        name: "Trello 1"
      }
    ];
  }
});
