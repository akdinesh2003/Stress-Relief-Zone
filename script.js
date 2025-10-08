const jokes = {
    technology: [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
        "Why did the computer go to the doctor? Because it had a virus! 🦠",
        "What's a computer's favorite snack? Microchips! 🍟",
        "Why was the smartphone wearing glasses? It lost all its contacts! 📱",
        "What do you call a computer that sings? A-Dell! 🎵",
        "Why did the PowerPoint presentation cross the road? To get to the other slide! 📊",
        "What's the object-oriented way to become wealthy? Inheritance! 💰",
        "Why do Java developers wear glasses? Because they don't C#! 👓",
        "How do you comfort a JavaScript bug? You console it! 🤗"
    ],
    coding: [
        "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25! 🎃🎄",
        "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?' 🍺",
        "Why did the developer go broke? Because he used up all his cache! 💸",
        "What's a programmer's favorite hangout place? Foo Bar! 🍻",
        "Why do programmers hate nature? It has too many bugs! 🌳",
        "How do you tell HTML from HTML5? Try it out in Internet Explorer. Did it work? No? It's HTML5! 😅",
        "Why did the programmer quit his job? Because he didn't get arrays! 📊",
        "What do you call 8 hobbits? A hobbyte! 🧙‍♂️",
        "There are 10 types of people in the world: those who understand binary and those who don't! 1️⃣0️⃣",
        "Why did the functions stop calling each other? Because they had constant arguments! 📞"
    ],
    office: [
        "Why did the employee get fired from the calendar factory? He took a day off! 📅",
        "What do you call a person who is happy on Monday? Retired! 😎",
        "Why don't scientists trust atoms in the office? Because they make up everything! ⚛️",
        "What's the best thing about a Boolean? Even if you're wrong, you're only off by a bit! ✅",
        "Why did the scarecrow become a successful manager? He was outstanding in his field! 🌾",
        "How does a computer get drunk? It takes screenshots! 🍷",
        "Why did the employee bring a ladder to work? To reach new heights in their career! 🪜",
        "What do you call a fake noodle at work? An impasta! 🍝",
        "Why don't keyboards ever get tired? They have two shifts! ⌨️",
        "What did the office worker say to the printer? You're not my type! 🖨️"
    ],
    internet: [
        "Why did the web developer walk out of a restaurant in disgust? The seating was laid out in tables! 🍽️",
        "What's the Wi-Fi password? 'It's on the wall.' No, what IS the password? 'It's on the wall!' 📶",
        "Why did the cookie go to the doctor? Because it felt crumbly! 🍪",
        "What do you call a group of killer whales playing instruments? An orca-stra! Wait, wrong domain... 🐋",
        "Why don't websites ever get cold? They have plenty of cache! 🧊",
        "What did the router say to the doctor? It hurts when IP! 🏥",
        "Why was the email always calm? It had great composure! 📧",
        "What do you call a website that helps you lose weight? A site for sore thighs! 🏃",
        "Why did the social media post go to therapy? It had too many issues! 💬",
        "How does the internet stay in shape? It does web-ercise! 💪"
    ],
    ai: [
        "Why did the neural network go to school? To improve its learning rate! 🎓",
        "What's an AI's favorite type of music? Algorithm and blues! 🎵",
        "Why was the machine learning model so confident? It had high self-esteem... I mean, high accuracy! 📈",
        "How do robots pay for things? With cache memory! 💳",
        "Why did the AI break up with its girlfriend? There was no connection! 💔",
        "What do you call an AI that loves to garden? A neural network with deep roots! 🌱",
        "Why don't AI models ever get lost? They always follow the gradient! 🧭",
        "What's a machine learning engineer's favorite exercise? Training! 🏋️",
        "Why was the chatbot so good at parties? It had great conversational skills! 🎉",
        "How do you know if an AI is lying? Check its confidence score! 🤥"
    ]
};

let currentDomain = 'technology';
let jokeCount = 0;
let usedJokes = new Set();

const jokeText = document.getElementById('jokeText');
const getJokeBtn = document.getElementById('getJokeBtn');
const jokeCountDisplay = document.getElementById('jokeCount');
const moodIndicator = document.getElementById('moodIndicator');
const domainButtons = document.querySelectorAll('.domain-btn');

// Domain button click handlers
domainButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        domainButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentDomain = btn.dataset.domain;
        usedJokes.clear();
    });
});

// Get joke button handler
getJokeBtn.addEventListener('click', () => {
    const domainJokes = jokes[currentDomain];
    
    // Reset if all jokes have been used
    if (usedJokes.size === domainJokes.length) {
        usedJokes.clear();
    }
    
    // Get a random unused joke
    let randomJoke;
    do {
        randomJoke = domainJokes[Math.floor(Math.random() * domainJokes.length)];
    } while (usedJokes.has(randomJoke) && usedJokes.size < domainJokes.length);
    
    usedJokes.add(randomJoke);
    
    // Animate joke display
    jokeText.style.opacity = '0';
    setTimeout(() => {
        jokeText.textContent = randomJoke;
        jokeText.style.opacity = '1';
    }, 200);
    
    // Update stats
    jokeCount++;
    jokeCountDisplay.textContent = jokeCount;
    updateMood();
    
    // Button animation
    getJokeBtn.textContent = '😄 Another One!';
    setTimeout(() => {
        getJokeBtn.textContent = 'Get a Joke 🎲';
    }, 1000);
});

function updateMood() {
    const moods = [
        { threshold: 0, text: '😐 Neutral', color: '#999' },
        { threshold: 3, text: '🙂 Smiling', color: '#4CAF50' },
        { threshold: 5, text: '😊 Happy', color: '#8BC34A' },
        { threshold: 8, text: '😄 Joyful', color: '#CDDC39' },
        { threshold: 12, text: '🤣 Laughing Hard', color: '#FFEB3B' },
        { threshold: 15, text: '😂 Can\'t Stop!', color: '#FFC107' }
    ];
    
    const currentMood = moods.reverse().find(mood => jokeCount >= mood.threshold);
    moodIndicator.textContent = currentMood.text;
    moodIndicator.style.color = currentMood.color;
}

// Add transition effect to joke text
jokeText.style.transition = 'opacity 0.3s ease';
