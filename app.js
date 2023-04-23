const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating g-one");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
  

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})
function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }

    if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }

    if(message.includes('what is your name') || message.includes('tell me your name') || message.includes('who are you'))  {
        const finalText = "My name is G-one I'm a virutual assitant";
        speech.text = finalText;
    }
    if(message.includes('who created you') || message.includes('who made you')|| message.includes('who developed you'))  {
        const finalText = "my boss suman created me";
        speech.text = finalText;
    }

    if(message.includes('open google')) {
        window.open("https://www.google.com");
        const finalText = "Opening google";
        speech.text = finalText;    
        
    }

    if(message.includes('open facebook')) {
        window.open("https://www.facebook.com");
        const finalText = "Opening facebook";
        speech.text = finalText;    
        
    }
    
    if(message.includes('open amazon')) {
        window.open("https://www.amazon.in/");
        const finalText = "Opening amazon";
        speech.text = finalText;   
        
    }

    if(message.includes('open flipkart')) {
        window.open("https://www.flipkart.com");
        const finalText = "Opening flipkart";
        speech.text = finalText;   
        
    }

    if(message.includes('open youtube')) {
        window.open("https://www.youtube.com");
        const finalText = "Opening youtube";
        speech.text = finalText;    
        
    }

    if(message.includes('open instagram')) {
        window.open("https://instagram.com");
        const finalText = "Opening instagram";
        speech.text = finalText;
      
    }
    
    if(message.includes('open gmail')) {
        window.open("https://mail.google.com/mail");
        const finalText = "Opening gmail";
        speech.text = finalText;
      
    }
    if(message.includes('open notes')) {
        window.open("https://note-app-livid-eight.vercel.app/");
        const finalText = "Opening notes app";
        speech.text = finalText;
      
    }
    if(message.includes('tell me a quote')) {
        window.open("https://quote-generator-xzwm.vercel.app/");
        const finalText = "here's your qoute boss";
        speech.text = finalText;
      
    }
    if(message.includes('joke')) {
        window.open("https://jokes-three.vercel.app/");
        const finalText = "okay boss click the button and  guess the answer";
        speech.text = finalText;
      
    }
    if(message.includes('stopwatch')) {
        window.open("https://simple-stopwatch-ten.vercel.app/");
        const finalText = "activating stop watch";
        speech.text = finalText;
      
    }
    if(message.includes('i need some love')) {
        window.open("https://heart-cursor.vercel.app/");
        const finalText = "okay boss now move your cursor";
        speech.text = finalText;
      
    }


    if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    if(message.includes('what is the time') || message.includes('time')) {
        window.open('https://digital-clock-navy.vercel.app/')
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }
    if(message.includes('open code editor')) {
        const finalText = "opening code editor for you boss";
        speech.text = finalText;
        window.open('https://www.onlinegdb.com/online_c_compiler')
    }
    if(message.includes('compose')) {
        const finalText = "opening drum kit for you boss play in your style";
        speech.text = finalText;
        window.open('https://drum-kit-eight-psi.vercel.app/')
    }

    if(message.includes('open calculator')) {
        window.open('https://calculator-pi-nine.vercel.app/')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
    if(message.includes('i want to play a game')||message.includes('space invader')||message.includes('open spaceinvader') || message.includes('open space game')) {
        window.open('https://space-invadors.vercel.app/')
        const finalText = "okay boss lets play this game";
        speech.text = finalText;
    }
    if(message.includes('open chatbot')) {
        window.open('https://chat-bot-eight-orcin.vercel.app/')
        const finalText = "loading your personal chatbot";
        speech.text = finalText;
    }
    if(message.includes('Im bored')||  message.includes('chess')|| message.includes('open chess')) {
        window.open('https://chess-swart-three.vercel.app/')
        const finalText = "okay boss lets play chess";
        speech.text = finalText;
    }
    
    if(message.includes('open chatgpt')) {
        window.open('https://chat.openai.com/')
        const finalText = "loading chatgpt";
        speech.text = finalText;
    }
    if(message.includes('what can you do')|| message.includes('tell me your functionalities')|| message.includes('what is your ability')) {
        window.open('https://functionalities.vercel.app/')
        const finalText = "I can access Google,Gmail,facebook,instagram,flipkart,amazon,wikipedia,etc..  I can search any things for you on internet   I can tell time and date   I have many In-built features for example   I have jokes generator    quote generator    In-built notes application    In-built calculator     Drums player     Stopwatch     I have heart trait cursor More over     I have a In-built chatbot so you can use it to cure boredoms       I can also have access to online code editor        I can aslo have access to search things on you.com which is one of the best platform to search codes      If you want to take a break I have a In-built spaceinvaders game lets play together      Or      If you want to play any interesting game I have In-built chess game lets play together     lastly I can also have access to chatgpt so you can use to find codes";
        speech.text = finalText ;
    }

    if(message.includes('search on google')) {
        window.open(`https://www.google.com/search?q=${message.replace("", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }
    if(message.includes('search on you')) {
        window.open(`https://you.com/search?q=${message.replace("", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on you";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
