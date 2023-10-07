# Lottery API

- sell lottery ticket
- update lottery ticket
- delete lottery ticket
- get all tickets
- get ticket by id
- bulk buy ( user can buy multiple ticket at a time )
- raffle draw

---

Ticket:

- number (must be unique)
- username
- price
- timestamp

---

Routes:

- /tickets/t/:ticketId -> GET -> find single ticket by ticketId
- /tickets/t/:ticketId -> PATCH -> update single ticket by ticketId
- /tickets/t/:ticketId -> DELETE -> delete single ticket by ticketId
- /tickets/u/:username -> GET -> find single ticket by username
- /tickets/u/:username -> PATCH -> update single ticket by username
- /tickets/u/:username -> DELETE -> delete single ticket by username
- /tickets/sell -> create lottery
- /tickets/bulk -> bulk sell tickets
- /tickets/draw -> draw lottery
- /tickets -> find all lottery
