const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

const quotes = [
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { quote: "If you want to achieve greatness stop asking for permission.", author: "Anonymous" },
  { quote: "Dream bigger. Do bigger.", author: "Anonymous" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteText.innerText = `"${randomQuote.quote}"`;
  authorText.innerText = `- ${randomQuote.author}`;
}

newQuoteBtn.addEventListener("click", generateQuote);
