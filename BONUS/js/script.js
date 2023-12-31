const { createApp } = Vue;

createApp({
  data() {
  return {
    chats: [
          {
            name: 'Michele',
            avatar: './img/avatar_1.jpg',
            visible: true,
            time: new Date().toLocaleTimeString(),
            messages: [
                {
                    date: '10/1/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/1/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/1/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: './img/avatar_2.jpg',
            visible: true,
            time: new Date().toLocaleTimeString(),
            messages: [
                {
                    date: '20/3/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/3/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/3/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: './img/avatar_3.jpg',
            visible: true,
            time: new Date().toLocaleTimeString(),
            messages: [
                {
                    date: '28/3/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/3/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/3/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro B.',
            avatar: './img/avatar_4.jpg',
            visible: true,
            time: new Date().toLocaleTimeString(),
            messages: [
                {
                    date: '10/1/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/1/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro L.',
            avatar: './img/avatar_5.jpg',
            visible: true,
            time: new Date().toLocaleTimeString(),
            messages: [
                {
                    date: '10/1/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/1/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Claudia',
            avatar: './img/avatar_5.jpg',
            visible: true,
            time: new Date().toLocaleTimeString(),
            messages: [
                {
                    date: '10/1/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/1/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/1/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Federico',
            avatar: './img/avatar_7.jpg',
            visible: true,
            time: new Date().toLocaleTimeString(),
            messages: [
                {
                    date: '10/1/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/1/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Davide',
            avatar: './img/avatar_8.jpg',
            time: new Date().toLocaleTimeString(),
            visible: true,
            messages: [
                {
                    date: '10/1/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/1/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/1/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
        }
  ],
  selectedChat: null,
  newMessage: '',
  searchText: ''
  };
},
methods: {
    selectChat(chat) {
      this.selectedChat = chat;
    },
    // Con questa funzione implemento l'inserimento di un messaggio da input bar
    sendMessage() {
        //questo if permette di non inviare messaggi vuoti
      if (this.newMessage.trim() !== '') {
        this.selectedChat.messages.push({
          date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
          message: this.newMessage,
          status: 'sent'
        });
        this.newMessage = '';
  
        // Funzione per creare una risposta automatica dopo 1 secondo
        setTimeout(() => {
           this.selectedChat.messages.push({                       
              date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
              message: 'ok',
              status: 'received'
            });
        }, 1000);
      }
    },
    //funzioone di ricerca della seacrh bar
    Search(){
        let nameSearched = this.searchText.toLowerCase();

        this.chats.forEach((chats) => {
            let contactName = chats.name.toLowerCase();
            chats.visible = contactName.includes(nameSearched);
        });
    },

    //Funzione che al click del menu elimina messaggio cancella l'ultimo
    deleteMessage(index) {
        this.selectedChat.messages.splice(index, 1);
    },

    //funzione per visualizzare nella lista l'ultimo messaggio della chat
    getLastMessage(chat) {
        const messages = chat.messages;
        if (messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            return lastMessage.message;
        }
        return '';
    },
    //funzione per aggiornare la data in base all'invio dei messaggi
    updateData(chat){
        const messages = chat.messages;
        if (messages.length > 0) {
            const lastData = messages[messages.length - 1];
            return lastData.date.slice(0, 9);
        }

        return '';
    }
}
}).mount('#app');