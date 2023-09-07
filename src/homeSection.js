import quotesImage from "../assets/quotes.svg";
import pinImage from "../assets/location-pin.svg";

export default function loadHomeSection() {
    const main = document.createElement("div");
    main.classList.add("main", "home");

    const testimonial = document.createElement("div");
    testimonial.classList.add("testimonial");

    const quotes = new Image();
    quotes.src = quotesImage;
    quotes.alt = "Double Quotation marks";
    quotes.classList.add("quotes");
    testimonial.appendChild(quotes);

    const testimonialText = document.createElement("div");
    testimonialText.classList.add("text");
    testimonialText.textContent = "The restaurant has an exquisite collection of delicious dishes. It is a must try for everyone in town!";
    testimonial.appendChild(testimonialText);

    const testimonialAuthor = document.createElement("div");
    testimonialAuthor.classList.add("author");
    testimonialAuthor.textContent = "Alice MacKenzie";
    testimonial.appendChild(testimonialAuthor);

    main.appendChild(testimonial);

    const visit = document.createElement("div");
    visit.classList.add("visit");

    const visitTitle = document.createElement("div");
    visitTitle.classList.add("title");
    visitTitle.textContent = "Fill your tummies with our delicacies!";
    visit.appendChild(visitTitle);

    const location = document.createElement("div");
    location.classList.add("location");

    const locationPin = new Image();
    locationPin.src = pinImage;
    locationPin.alt = "Location pin";
    locationPin.classList.add("pin");
    location.appendChild(locationPin);

    const address = document.createElement("div");
    address.classList.add("address");
    address.textContent = "Mockingjay St., Mockaronie, Frintucky";
    location.appendChild(address);

    visit.appendChild(location);


    const openHours = document.createElement("div");
    openHours.classList.add("hours");
    
    const openHoursTitle = document.createElement("div");
    openHoursTitle.classList.add("title");
    openHoursTitle.textContent = "Open Hours";
    openHours.appendChild(openHoursTitle);

    const openHoursTiming = document.createElement("div");
    openHoursTiming.classList.add("timing");

    const days = document.createElement("div");
    days.classList.add("days");

    const weekdaysTitle = document.createElement("div");
    weekdaysTitle.classList.add("day");
    weekdaysTitle.textContent = "Weekdays: ";
    days.appendChild(weekdaysTitle);

    const weekendTitle = document.createElement("div");
    weekendTitle.classList.add("day");
    weekendTitle.textContent = "Weekend: ";
    days.appendChild(weekendTitle);

    openHoursTiming.appendChild(days);

    const times = document.createElement("div");
    times.classList.add("times");

    const weekdaysTime = document.createElement("div");
    weekdaysTime.classList.add("time");
    weekdaysTime.textContent = "10 AM - 08 PM";
    times.appendChild(weekdaysTime);

    const weekendTime = document.createElement("div");
    weekendTime.classList.add("time");
    weekendTime.textContent = "11 AM - 11 PM";
    times.appendChild(weekendTime);

    openHoursTiming.appendChild(times);

    openHours.appendChild(openHoursTiming);

    visit.appendChild(openHours);

    main.appendChild(visit);

    return main;
}