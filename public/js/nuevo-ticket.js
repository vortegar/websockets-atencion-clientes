// const { socketController } = require("../../sockets/controller");

// Referencias HTML
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnCrear = document.querySelector('button');



const socket = io();


socket.on('connect', () => {
    btnCrear.disabled = false;
});

socket.on('disconnect', () => {
    btnCrear.disabled = true;
});

socket.on('enviar-mensaje', (payload) => {
    console.log( payload )
});

socket.on('ultimo-ticket', (ticket) => {
    lblNuevoTicket.innerText = `Ticket ${ ticket }`;
});


btnCrear.addEventListener( 'click', () => {

    
    socket.emit( 'siguiente-ticket', null, ( ticket ) => {
        lblNuevoTicket.innerText = ticket;
    });

});