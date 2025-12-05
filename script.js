const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
} )

const activePage = () => {
    const header = document.querySelector('header');

    header.classList.remove('active');
    setTimeout(() => {
    header.classList.add('active');
   }, 500);

    navLinks.forEach(link => {
       link.classList.remove('active');
   });





    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if(!link.classList.contains('active')) {
            activePage();
            
            link.classList.add('active');
        }
    });
});

logoLink.addEventListener('click',() => {
    if(!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

     
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
        btn.classList.remove('active');
        });
        btn.classList.add('active');

         resumeDetails.forEach(detail => {
        detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 7) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 8;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});

window.addEventListener("DOMContentLoaded", () => {
  navLinks[0].classList.add("active");
  sections[0].classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle-input");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    const newTheme = toggle.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});

  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Step 2: Setup custom cursor movement
  document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.transform = `translate3d(${e.clientX - 15}px, ${e.clientY - 15}px, 0)`;
    });
  });



  function toggleChat() {
  const box = document.getElementById("chatbot");
  box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}


function handleChat() {
  const inputField = document.getElementById("user-input");
  const chatWindow = document.getElementById("chat-window");
  const input = inputField.value.toLowerCase().trim();

const responses = [
  { tags: ["name", "who are you", "yourself","kya name h aapka", "kuch bta bhai", "tu kon h"], reply: "I'm Subhash Vishwakarma, 20 years old, currently I am pursuing BCA." },
  { tags: ["skills", "technologies", "tools", "tech","languages"], reply: "I work with HTML, CSS, JS, I also use figma tools to design interactive projects" },
  { tags: ["experience", "background"], reply: " I am fresher and available to work with you. You are ready to contact with me?" },
  { tags: ["projects", "portfolio", "work", "samples"], reply: "Check out the Projects section — live previews and code snippets are waiting for you!" },
  { tags: ["style", "design", "ui", "look"], reply: "Clean, futuristic, responsive — I love gradients, glassy blur, and premium aesthetics." },
  { tags: ["voice", "qr", "feature", "input", "generator"], reply: "Yes! My portfolio includes dynamic features like voice input and live QR code generation." },
  { tags: ["contact", "email", "connect"], reply: " Phone: 9152045479 Email: subh05072004@gmail.com also You can reach me via the Contact section — or drop an email directly!" },
  { tags: ["resume", "cv", "download"], reply: "My resume is downloadable from the ‘About’ sectiaon — take a look!" },
  { tags: ["location", "based", "from", "city"], reply: " City: Thane , Maharashtra I’m based in India 🇮🇳 — but I work with people across the world." },
  { tags: ["hobby", "interest", "free time"], reply: " My intrest in DEveloping everytime new ideas with my Technology knowledges I enjoy exploring creative UI ideas and building elegant web interactions." },
  { tags: ["hire"], reply: "You should definitely hire me. I have been proven to be successful throughout my education, and this position requires someone who is capable of solving problems quickly and adding value to the job, which best describes me."},
  { tags: ["hii", "hello", "namste","hey","hi","hiii"], reply: " Hello Sir/Mam welcome to my portfolio ,you can explore about me by chat." }
];

function handleInput() {
  const input = document.getElementById("user-input").value.toLowerCase();
  const chatWindow = document.getElementById("chat-window");
  chatWindow.innerHTML += `<div class="user">👤 ${input}</div>`;

  let reply = "Sorry, I didn't catch that — try asking about skills, projects or contact info.";
  for (let entry of responses) {
    if (entry.tags.some(tag => input.includes(tag))) {
      reply = entry.reply;
      break;
    }
  }

  chatWindow.innerHTML += `<div class="bot">🤖 ${reply}</div>`;
  document.getElementById("user-input").value = "";
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

  let reply = "Sorry, I didn't catch that. Try asking about my skills, projects, or contact.";

  for (let r of responses) {
    if (r.tags.some(tag => input.includes(tag))) {
      reply = r.reply;
      break;
    }
  }

  chatWindow.innerHTML += `<div><strong>You:</strong> ${input}</div>`;
  chatWindow.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
  inputField.value = "";
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
document.getElementById("user-input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleChat();
  }
});


  emailjs.init("tRPozroIG_WAktgiq");

  
  document.querySelector("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const templateParams = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      phone: document.querySelector("#phone").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };

    emailjs
      .send("service_za0du2j", "template_pjaa2zd", templateParams)
      .then(() => alert("✅ Email sent successfully!"))
      .catch(() => alert("❌ Failed to send email. Check the console for errors."));
  });
