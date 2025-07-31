/// <reference path="./global.d.ts" />
// @ts-check

export function createVisitor(name, age, ticketId) {
  return { name: name, age: age, ticketId: ticketId };
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
  if (ticketId in tickets) {
    if (tickets[ticketId] === null) {
      return "not sold";
    } else {
      return `sold to ${tickets[ticketId]}`;
    }
  } else return "unknown ticket id";
}

export function simpleTicketStatus(tickets, ticketId) {
  switch (tickets[ticketId]) {
    case undefined:
    case null:
      return "invalid ticket !!!";
    default:
      return tickets[ticketId];
  }
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  return visitor?.gtc?.version;
}
