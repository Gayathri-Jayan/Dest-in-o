const API_KEY = "your_openweathermap_api_key"; // Replace with a real API key

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("destination").addEventListener("change", updateTheme);
});

// Theme & Backgrounds Based on Destination
function updateTheme() {
    const city = document.getElementById("destination").value;
    const body = document.body;
    const header = document.querySelector("header");

    const cityThemes = {
        "Paris": {
            background: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8fDA%3D')",
            color: "#rgb(255 182 193 / 58%)"
        },
        "New York": {
            background: "url('https://fullsuitcase.com/wp-content/uploads/2022/05/One-day-in-New-York-USA-NYC-day-trip-itinerary.jpg')",
            color: "#rgb(16 29 31 / 59%)"
        },
        "Tokyo": {
            background: "url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW98ZW58MHx8MHx8fDA%3D')",
            color: "#rgb(4 15 62 / 71%)"
        },
        "London": {
            background: "url('https://www.lifeyet.com/wp-content/uploads/2023/01/Things-to-do-in-London.jpg')",
            color: "#rgb(68 176 173 / 37%)"
        },
        "Rome": {
            background: "url('https://images.unsplash.com/photo-1531572753322-ad063cecc140?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9tZXxlbnwwfHwwfHx8MA%3D%3D')",
            color: "#9b6024b3"
        },
        "Sydney": {
            background: "url('https://www.pelago.com/img/destinations/sydney/hero-image.jpg')",
            color: "#rgb(0 191 255 / 31%)"
        },
        "Dubai": {
            background: "url('https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/shutterstock_2414539851_ss_non-editorial_dcx0bm?_a=BAVARSAP0')",
            color: "#rgb(218 83 32 / 17%)"
        }
    };

    if (cityThemes[city]) {
        body.style.backgroundImage = cityThemes[city].background;
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
        body.style.backgroundAttachment = "fixed";
        header.style.backgroundColor = cityThemes[city].color;
    }
}

const destinationData = {
    "Paris": {
        activities: [
            { name: "Eiffel Tower Visit", cost: 30 },
            { name: "Louvre Museum", cost: 20 },
            { name: "Seine River Cruise", cost: 50 }
        ],
        accommodations: [
            { name: "Budget Hotel", costPerNight: 100 },
            { name: "Mid-range Hotel", costPerNight: 200 },
            { name: "Luxury Hotel", costPerNight: 400 }
        ],
        food: ["Croissants 🥐", "Escargots", "Coq au Vin"],
        outfitSuggestions: "Chic & casual - Stylish coat, boots, scarf, and neutral colors."
    },
    "New York": {
        activities: [
            { name: "Statue of Liberty", cost: 25 },
            { name: "Central Park", cost: 0 },
            { name: "Broadway Show", cost: 100 }
        ],
        accommodations: [
            { name: "Budget Hostel", costPerNight: 50 },
            { name: "Mid-range Hotel", costPerNight: 150 },
            { name: "Luxury Hotel", costPerNight: 350 }
        ],
        food: ["Bagels 🥯", "Cheesecake 🍰", "Hot Dogs 🌭"],
        outfitSuggestions: "Layered outfits - Sneakers, a stylish jacket, and comfortable jeans."
    },
    "Tokyo": {
        activities: [
            { name: "Shibuya Crossing", cost: 0 },
            { name: "Tokyo Tower", cost: 20 },
            { name: "Sensoji Temple", cost: 0 }
        ],
        accommodations: [
            { name: "Budget Capsule Hotel", costPerNight: 60 },
            { name: "Mid-range Hotel", costPerNight: 150 },
            { name: "Luxury Hotel", costPerNight: 400 }
        ],
        food: ["Sushi 🍣", "Ramen 🍜", "Takoyaki 🐙"],
        outfitSuggestions: "Trendy & comfy - Sneakers, oversized sweater, stylish tote bag."
    },
    "London": {
        activities: [
            { name: "Big Ben", cost: 0 },
            { name: "London Eye", cost: 35 },
            { name: "British Museum", cost: 0 }
        ],
        accommodations: [
            { name: "Budget Inn", costPerNight: 80 },
            { name: "Mid-range Hotel", costPerNight: 180 },
            { name: "Luxury Hotel", costPerNight: 400 }
        ],
        food: ["Fish & Chips 🐟🍟", "Full English Breakfast 🍳", "Afternoon Tea ☕"],
        outfitSuggestions: "Smart casual - Trench coat, boots, umbrella for rainy weather."
    },
    "Rome": {
        activities: [
            { name: "Colosseum Tour", cost: 25 },
            { name: "Vatican Museums", cost: 30 },
            { name: "Trevi Fountain", cost: 0 }
        ],
        accommodations: [
            { name: "Budget Hostel", costPerNight: 70 },
            { name: "Mid-range Hotel", costPerNight: 170 },
            { name: "Luxury Hotel", costPerNight: 350 }
        ],
        food: ["Pasta 🍝", "Pizza 🍕", "Gelato 🍦"],
        outfitSuggestions: "Elegant & airy - Light dress, sunglasses, comfy sandals."
    },
    "Sydney": {
        activities: [
            { name: "Sydney Opera House", cost: 40 },
            { name: "Bondi Beach", cost: 0 },
            { name: "Blue Mountains Tour", cost: 60 }
        ],
        accommodations: [
            { name: "Backpacker Hostel", costPerNight: 50 },
            { name: "Mid-range Hotel", costPerNight: 180 },
            { name: "Luxury Hotel", costPerNight: 400 }
        ],
        food: ["Vegemite Toast 🥪", "Seafood Platter 🦐", "Tim Tams 🍫"],
        outfitSuggestions: "Beachy vibes - Shorts, tank tops, sunglasses, flip-flops."
    },
    "Dubai": {
        activities: [
            { name: "Burj Khalifa Visit", cost: 40 },
            { name: "Desert Safari", cost: 70 },
            { name: "Dubai Mall", cost: 0 }
        ],
        accommodations: [
            { name: "Budget Apartment", costPerNight: 90 },
            { name: "Mid-range Hotel", costPerNight: 200 },
            { name: "Luxury Hotel", costPerNight: 500 }
        ],
        food: ["Shawarma 🌯", "Luqaimat 🍯", "Arabic Coffee ☕"],
        outfitSuggestions: "Modest yet stylish - Light fabrics, long dresses, sunglasses."
    }
};

function generateItinerary() {
    const selectedDestination = document.getElementById('destination').value;
    const budget = parseFloat(document.getElementById('budget').value);
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    if (!selectedDestination || isNaN(budget) || budget <= 0 || !startDate || !endDate) {
        alert("Please enter all details correctly.");
        return;
    }

    const data = destinationData[selectedDestination];
    if (!data) {
        alert("Sorry, no data for this destination.");
        return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;

    let activities = data.activities.filter(activity => activity.cost <= budget);
    let accommodations = data.accommodations.filter(acc => acc.costPerNight <= budget / 3);
    let foodOptions = data.food || [];
    let outfit = data.outfitSuggestions || "No outfit suggestion available.";

    let itinerarySummary = `
        <h3>Destination: ${selectedDestination}</h3>
        <h4>Dates: ${startDate} to ${endDate} (Total Days: ${days})</h4>
        <h4>Activities:</h4>
        <ul>${activities.map(activity => <li>${activity.name} - $${activity.cost}</li>).join('')}</ul>
        <h4>Accommodation Options:</h4>
        <ul>${accommodations.map(acc => <li>${acc.name} - $${acc.costPerNight} per night</li>).join('')}</ul>
        <h4>Must-Try Foods 🍽:</h4>
        <ul>${foodOptions.map(food => <li>${food}</li>).join('')}</ul>
        <h4>👗 Outfit Suggestions:</h4>
        <p>${outfit}</p>
    `;

    document.getElementById('itinerary-summary').innerHTML = itinerarySummary;

    // Fetch Weather Data
    fetchWeather(selectedDestination);
}




// Fetch Weather and Update UI
function fetchWeather(city) {
    fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric)
        .then(response => response.json())
        .then(data => {
            let weatherSummary = `
                <h4>🌤 Weather Forecast:</h4>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById('itinerary-summary').innerHTML += weatherSummary;
        })
        .catch(error => console.log("Error fetching weather:", error));
}


function exportItinerary() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let itineraryContent = document.getElementById("itinerary-summary").innerHTML;

    if (!itineraryContent.trim()) {
        alert("No itinerary available. Please generate an itinerary first!");
        return;
    }

    // Remove HTML tags and format text
    let formattedText = itineraryContent
        .replace(/<h3>/g, "\n")
        .replace(/<\/h3>/g, "\n")
        .replace(/<h4>/g, "\n")
        .replace(/<\/h4>/g, "\n")
        .replace(/<ul>/g, "")
        .replace(/<\/ul>/g, "")
        .replace(/<li>/g, "- ")
        .replace(/<\/li>/g, "\n")
        .replace(/<\/?[^>]+(>|$)/g, ""); // Remove all remaining HTML tags

    doc.text("AI Travel Itinerary", 10, 10);
    doc.text(formattedText, 10, 20, { maxWidth: 180 });

    doc.save("travel_itinerary.pdf");
}
