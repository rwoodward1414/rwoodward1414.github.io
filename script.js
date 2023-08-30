fetch("events.json")
    .then(response => response.json())
    .then(data => displayEvents(data))
    .catch(error => console.error("Couldn't display events:", error));

function displayEvents(events) {
    let eventContainer = document.getElementById("event-container");
    eventContainer.innerHTML = "";

    let eventArr = Array.from(events);

    eventArr.forEach(event => {
        let eventLink = document.createElement("a");
        let eventImg = document.createElement("img")
        eventImg.src = event.photo;
        eventImg.alt = event.name;
        eventLink.appendChild(eventImg);
        eventLink.href = "https://www.facebook.com/" + event.id;

        eventContainer.appendChild(eventLink);
    });
}