var arrayOfQuotes = [
    {'author': '--Jim Rohn--', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': '--Epictetus--', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': '--Frank Sinatra--', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': '--Wayne Gretzy--', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': '--Nelson Mandela--', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': '--Elbert Hubbard--', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

var num = -1;

function generateQuote(array = arrayOfQuotes) {
    var random;
    do {
        random = Math.floor(Math.random() * array.length);
    } while (random === num);

    num = random;

    var lorem = '';
  lorem += `<div class="text-center">
    <p>${array[random].quote}</p>
    <h3>${array[random].author}</h3>
</div>`;

    document.getElementById("quou").innerHTML = lorem;
}