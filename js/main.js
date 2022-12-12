function DisplayQoute() {
  var qoutes = [
    {
      qoute: "Be yourself; everyone else is already taken.",
      auther: "Oscar Wilde",
    },
    {
      qoute:
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      auther: " Marilyn Monroe",
    },
    {
      qoute:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      auther: " Albert Einstein",
    },
    {
      qoute: "So many books, so little time.",
      auther: "Frank Zappa",
    },
    {
      qoute: "A room without books is like a body without a soul.",
      auther: " Marcus Tullius Cicero",
    },
    {
      qoute:
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      auther: "Bernard M. Baruch",
    },
  ];
  var randomnuber = Math.floor(Math.random() * qoutes.length);
  var html = "";
  html += `
        <q>${qoutes[randomnuber].qoute}</q>
        <address>${qoutes[randomnuber].auther}</address>`;
  document.getElementById("qoutbox").innerHTML = html;
  document.querySelector('q').style.color="white";
  document.querySelector('address').style.color="#5E6B50";
  document.querySelector('q').style.fontSize="35px";
  document.querySelector('address').style.fontSize="30px";
}
