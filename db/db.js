const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * create and save a new ticket
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} returns a ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * create multiple ticket for a single user
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }

    return result;
  }

  /**
   * return all available tickets
   */
  find() {
    return this.tickets;
  }

  /**
   * find ticket by ticket id
   * @param {string} id
   * @returns {Ticket} returns a ticket
   */
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );

    return ticket;
  }

  /**
   * find all tickets for a given user
   * @param {string} username
   * @returns {Ticket}
   */

  findByUserName(username) {
    const tickets = this.tickets.filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username === username
    );

    return tickets;
  }

  /**
   *
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   * @returns {Ticket}
   */

  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticketBody.username;
    ticket.price = ticketBody.price;
    ticket.upDatedAt = new Date();

    return ticket;
  }
  /**
   *
   * @param {string} userName
   * @param {{username: string, price: number}} ticketBody
   * @return {Ticket}
   */

  updateByUserName(userName, ticketBody) {
    const ticket = this.findByUserName(userName);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price;
    ticket.upDatedAt = new Date();
    return ticket;
  }

  /**
   *
   * @param {string} ticketId
   */

  deleteById(ticketId) {
    const index = this.tickets.findIndex(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );

    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @param {string} userName
   */

  deleteByUserName(userName) {
    const index = this.tickets.findIndex(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username === userName
    );

    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   * find winners
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */

  draw(winnerCount) {
    let winnerIndexes = new Array(winnerCount);

    let index = 0;
    while (index < winnerCount) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);
      if (!winnerIndexes.includes(winnerIndex)) {
        winnerIndexes[index++] = winnerIndex;
        continue;
      }
    }

    const winners = winnerIndexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();

module.exports = myDB;
