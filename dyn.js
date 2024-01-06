let quote = document.querySelector(".quote");
let author = document.querySelector(".person");
const quotes = [
    {
        quote:"\"You must be the change you wish to see in the world\"",
        author:"Mahatama Gandhi"
    },
    {
        quote:"\"Do one thing every day that scares you.\"",
        author:"Eleanor Roosevelt"
    },
    {
        quote:"\"Spread love everywhere you go. Let no one ever come to you without leaving happier.\"" ,
        author:"Mother Teresa"
    },
    {
        quote:"\"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.\"",
        author:"Helen Keller"
    },
    {
        quote:"\"Well done is better than well said.\"",
        author:"Benjamin Franklin" 
    },
    {
        quote:"\"It is during our darkest moments that we must focus to see the light.\"",
        author:"Aristotle"
    },
    {
        quote: "\"Do not go where the path may lead, go instead where there is no path and leave a trail.\"",
        author: "Ralph Waldo Emerson" 
    },
    {
        quote: "\"Be yourself; everyone else is already taken.\"" ,
        author: "Oscar Wilde"
    },
    {
        quote: "\"You will face many defeats in life, but never let yourself be defeated.\"" ,
        author:"Maya Angelou"
    }

  ]

document.querySelector(".btn").addEventListener('click',function(){
  const random = Math.floor(Math.random()*quotes.length);
  console.log(random);
  const newQuote = quotes[random];
  quote.innerText = newQuote.quote;
  author.innerText = newQuote.author;
});