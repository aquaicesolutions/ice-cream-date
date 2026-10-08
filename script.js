const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");

const dateSection = document.getElementById("dateSection");
const datePicker = document.getElementById("datePicker");
const confirmDate = document.getElementById("confirmDate");

// Don't allow dates in the past
const today = new Date().toISOString().split("T")[0];
datePicker.min = today;


// YES button
yesBtn.addEventListener("click", function () {

    heading.textContent = "YAY! 🍦❤️";

    paragraph.textContent =
        "I can't wait to take you out for ice cream!";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Show date selection
    dateSection.style.display = "block";
});


// NO button runs away
noBtn.addEventListener("mouseover", function () {

    const x = Math.random() *
        (window.innerWidth - noBtn.offsetWidth);

    const y = Math.random() *
        (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});


// Confirm date
confirmDate.addEventListener("click", function () {

    if (datePicker.value === "") {

        alert("Please choose a date first! 🍦💕");
        return;
    }

    const chosenDate = new Date(datePicker.value);

    const formattedDate = chosenDate.toLocaleDateString(
        "en-ZA",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

    // Final celebration screen
    // Your WhatsApp number
    // Use country code WITHOUT the + sign
    const yourWhatsAppNumber = "270783200328";


        // Final celebration screen
    dateSection.innerHTML = `

        <div class="celebration">

            <div class="celebration-emojis">
            🍦 💕 🍨 💗 🍧
            </div>

            <h2>🎉 IT'S A DATE! 🎉</h2>

            <p class="date-message">
                You just made me very happy! ❤️
            </p>

            <div class="date-card">

                <p>🍦 Our Ice-Cream Date 🍦</p>

                <h3>📅 ${formattedDate}</h3>

                <p>Get ready for something sweet! 🥰</p>

            </div>

            <div class="hearts">
            ❤️ 💕 ❤️ 💕 ❤️
            </div>

            <button id="sendWhatsApp">
                💬 Send my answer ❤️
            </button>

            <p class="final-message">
                I can't wait to see you! 🍦🥰❤️
            </p>

        </div>
    `;
   
    const sendWhatsApp = document.getElementById("sendWhatsApp");

    sendWhatsApp.addEventListener("click", function () {

        const whatsappMessage =
            `🍦❤️ It's a date!\n\n` +
            `I chose ${formattedDate} for our ice-cream date. 🥰🍨\n\n` +
            `I can't wait! ❤️`;

        const whatsappURL =
            `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.location.href = whatsappURL;
    });
});
