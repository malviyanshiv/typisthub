store = [
    "Deep into that darkness peering, long I stood there wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before.",
    "All I do is talk a big game, and make myself sound like a big shot, when I can't do anything! I never do anything yet I complain like a pro. Who do you think I am? It's amazing that I can live like this and not feel ashamed!",
    "Every thought and every word works for you or against you, and every thought that you confirm to be true becomes a belief. When you change a belief, you change a mental construction and, therefore, your life.",
    "I don't need herbal enhancers to feel good about myself. And if you're so concerned about that, why don't you try eating some yourself?",
    "Here's what's problematic: You don't even know where your boyfriend is half the time, so how do you know if he's in trouble or not? He's into heroin, organized crime, he's associating with some very dangerous people, not to mention Tony Soprano himself.",
    "She may be the face I can't forget. The trace of pleasure or regret may be my treasure or the price I have to pay. She may be the song that summer sings. May be the chill the autumn brings. May be a hundred different things within the measure of a day.",
    "To evaluate an option from the other side's point of view, consider how they might be criticized if they adopted it. Write out a sentence or two illustrating what the other side's most powerful critic might say about the decision you are thinking of asking for.",
    "To make power, people try to put pieces of this metal close enough together that they make heat fast, but not so close that they go out of control and blow up. This is very hard, but there is so much heat and power stored in this metal that some people have wanted to try anyway.",
    "Harvey and I sit in the bars... have a drink or two... play the jukebox. And soon the faces of all the other people they turn toward mine and they smile. And they're saying, \"We don't know your name, mister, but you're a very nice fella\".",
    "Make sure to secure the door when I am gone. There are many dangerous people who wanna take things from Americans, and also kidnap them. Good night!",
    "I never wanted to become someone like him. So secure, content to live each day just like the last. I was sure I knew that this was not for me. And I wanted so much more; far beyond what I could see. So I swore that I'd never be someone like him.",
    "I know now that it's over. I knew it then. There would be no way, Michael, no way you could ever forgive me, not with this Sicilian thing that's been going on for 2,000 years.",
    "A chorus is the high-point of a lyric's energy as well as the music's energy. In the chorus you declare what the song is really about.",
    "I've heard there was a secret chord that David played, and it pleased the Lord, but you don't really care for music, do you? It goes like this: the fourth, the fifth, the minor fall, the major lift. The baffled king composing hallelujah.",
];

addText = (text) => {
    text = text.trim();
    store.push(text);
};

getText = () => {
    return store[Math.floor(Math.random() * store.length)];
};

module.exports = {
    addText,
    getText,
};
