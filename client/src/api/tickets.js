import { baseApi } from "./base"

export function getTickets(options) {
  return baseApi.get("tickets", options).then(res => res.data)
}

export function getTicket(ticketId, options) {
  return baseApi.get(`tickets/${ticketId}`, options).then(res => res.data)
}

export function createTicket(ticket, options) {
  return baseApi.post("tickets/", ticket, options).then(res => res.data)
}

export function updateTicketStatus(ticketId, newStatus) {
  return baseApi.patch(`tickets/${ticketId}/`, {"status": newStatus}).then(res => res.data)
}

export function updateTicketTitleDescription(ticketId, newTitle, newDescription) {
  return baseApi.patch(`tickets/${ticketId}/`, {"title": newTitle, "description": newDescription}).then(res => res.data)
}

export function deleteTicket(ticketId) {
  return baseApi.delete(`tickets/${ticketId}`).then(res => res.data)
}