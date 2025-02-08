const clothingSuggestions = {
    "Paris": {
        "spring": "Light jacket, jeans, comfortable shoes, sunglasses.",
        "summer": "Light dress or shorts, T-shirt, sunscreen, comfortable shoes.",
        "autumn": "Layered clothing, sweater, scarf, comfortable shoes.",
        "winter": "Warm coat, boots, gloves, scarf."
    },
    "New York": {
        "spring": "Light jacket, T-shirt, jeans, comfortable shoes.",
        "summer": "Shorts, tank top, sunscreen, comfortable shoes.",
        "autumn": "Sweater, jeans, light jacket, scarf.",
        "winter": "Heavy coat, gloves, boots, scarf."
    },
    "Tokyo": {
        "spring": "Light jacket, T-shirt, jeans, comfortable shoes.",
        "summer": "Shorts, tank top, sunscreen, comfortable shoes.",
        "autumn": "Layered clothing, sweater, scarf.",
        "winter": "Warm coat, boots, gloves, scarf."
    },
    "London": {
        "spring": "Light jacket, scarf, comfortable shoes.",
        "summer": "T-shirt, shorts, comfortable shoes, umbrella.",
        "autumn": "Layered clothing, sweater, scarf.",
        "winter": "Heavy coat, gloves, boots."
    },
    "Rome": {
        "spring": "Light jacket, T-shirt, jeans, comfortable shoes.",
        "summer": "Light dress, shorts, sunscreen, comfortable shoes.",
        "autumn": "Sweater, scarf, light jacket.",
        "winter": "Warm coat, gloves, boots."
    },
    "Sydney": {
        "spring": "Light jacket, T-shirt, jeans, comfortable shoes.",
        "summer": "Shorts, tank top, sunscreen, comfortable shoes.",
        "autumn": "Layered clothing, sweater, scarf.",
        "winter": "Warm coat, gloves, boots."
    },
    "Dubai": {
        "spring": "Light dress or shirt, shorts, sunglasses, sunscreen.",
        "summer": "Sunscreen, light dress, shorts, comfortable shoes.",
        "autumn": "Layered clothing, T-shirt, comfortable shoes.",
        "winter": "Light jacket, scarf, comfortable shoes."
    }
};

function setMinEndDate() {
    const startDate = document.getElementById('start-date').value;
    document.getElementById('end-date').min = startDate;
}

function generateItinerary() {
    const destinationSelect = document.getElementById('destination');
    const selectedDestination = destinationSelect.value;
    const budget = parseFloat(document.getElementById('budget').value);
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const loadingText = document.getElementById('loading-text');
    const itineraryView = document.getElementById('itinerary-view');
    const clothingSuggestionView = document.getElementById('clothing-suggestion');

    if (!selectedDestination || isNaN(budget) || budget <= 0 || !startDate || !endDate) {
        alert("Please enter valid details.");
        return;
    }

    loadingText.style.display = "block";

    setTimeout(() => {
        loadingText.style.display = "none";
        itineraryView.style.display = "block";

        // Calculate the number of days
        const days = Math.floor((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)) + 1; // Including both start and end dates
        
        // Generate the itinerary content
        const itinerarySummary = `
            <h3>Destination: ${selectedDestination}</h3>
            <h4>Dates: ${startDate} to ${endDate} (Total Days: ${days})</h4>
            <h4>Suggested Itinerary:</h4>
            <ul>
                <li>Day 1: Arrive and check into your accommodation</li>
                ${Array.from({ length: days - 1 }, (_, index) => {
                    return `<li>Day ${index + 2}: Explore ${selectedDestination} - Activity/Attraction</li>`;
                }).join('')}
            </ul>
        `;

        // Show clothing suggestions based on the selected destination and season
        const clothingSuggestion = clothingSuggestions[selectedDestination]["winter"]; // Default to winter
        clothingSuggestionView.innerHTML = `<p>For your trip to ${selectedDestination} in winter, we suggest: ${clothingSuggestion}</p>`;

        document.getElementById('itinerary-summary').innerHTML = itinerarySummary;
    }, 1500);
}




function exportItinerary() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get only the content we need from the itinerary summary and clothing suggestion
    const itineraryContent = document.getElementById('itinerary-summary').innerText;
    const clothingContent = document.getElementById('clothing-suggestion').innerText;

    // Set title for the PDF
    doc.setFont("helvetica", "bold");
    doc.text("Travel Itinerary", 10, 10);

    // Add itinerary content with some space after it
    doc.setFont("helvetica", "normal");
    const itineraryYPosition = 20;
    doc.text(itineraryContent, 10, itineraryYPosition);

    // Add space between itinerary and clothing suggestions
    const spaceBetween = 60; // Adjust as needed
    const clothingYPosition = itineraryYPosition + spaceBetween;

    // Add clothing suggestions after the itinerary with enough space
    doc.text(clothingContent, 10, clothingYPosition);

    // Save the PDF
    doc.save('itinerary.pdf');
}

