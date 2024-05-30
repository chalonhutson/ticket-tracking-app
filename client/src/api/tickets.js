import { baseApi } from "./base"

export function getTickets(options) {
  return baseApi.get("tickets", options).then(res => res.data)
}

export function getTicket(ticketId, options) {
  return baseApi.get(`tickets/${ticketId}`, options).then(res => res.data)
}