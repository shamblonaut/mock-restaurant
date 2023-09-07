import managerImage from "../assets/manager.jpg";
import chefImage from "../assets/chef.jpg";
import ownerImage from "../assets/owner.jpg";

export default function loadContactSection() {
    const main = document.createElement("div");
    main.classList.add("main", "contact");

    const message = document.createElement("div");
    message.classList.add("message");

    const messageTitle = document.createElement("div");
    messageTitle.classList.add("title");
    messageTitle.textContent = "Send us your feedback!";
    message.appendChild(messageTitle);

    const thoughts = document.createElement("textarea");
    thoughts.name = "thoughts";
    thoughts.id = "thoughts";
    thoughts.placeholder = "Write down your thoughts about us";
    message.appendChild(thoughts);

    const sendButton = document.createElement("button");
    sendButton.classList.add("send");
    sendButton.textContent = "Send";
    message.appendChild(sendButton);

    main.appendChild(message);

    const call = document.createElement("div");
    call.classList.add("call");

    const callTitle = document.createElement("div");
    callTitle.classList.add("title");
    callTitle.textContent = "Wanna speak to us?";
    call.appendChild(callTitle);

    const contacts = document.createElement("div");
    contacts.classList.add("contacts");

    const managerCard = document.createElement("div");
    managerCard.classList.add("card");

    const managerInfo = document.createElement("div");
    managerInfo.classList.add("info");

    const managerName = document.createElement("div");
    managerName.classList.add("name", "person");
    managerName.textContent = "Mr. Harthfield";
    managerInfo.appendChild(managerName);

    const managerPosition = document.createElement("div");
    managerPosition.classList.add("position");
    managerPosition.textContent = "Manager";
    managerInfo.appendChild(managerPosition);

    const managerPicture = new Image();
    managerPicture.src = managerImage;
    managerPicture.alt = "Manager";
    managerPicture.classList.add("picture", "person");
    managerInfo.appendChild(managerPicture);

    managerCard.appendChild(managerInfo);

    const managerPhone = document.createElement("div");
    managerPhone.classList.add("phone");
    managerPhone.textContent = "+18394084500";
    managerCard.appendChild(managerPhone);

    contacts.appendChild(managerCard);

    const chefCard = document.createElement("div");
    chefCard.classList.add("card");

    const chefInfo = document.createElement("div");
    chefInfo.classList.add("info");

    const chefName = document.createElement("div");
    chefName.classList.add("name", "person");
    chefName.textContent = "Chef Temellin";
    chefInfo.appendChild(chefName);

    const chefPosition = document.createElement("div");
    chefPosition.classList.add("position");
    chefPosition.textContent = "Head Chef";
    chefInfo.appendChild(chefPosition);

    const chefPicture = new Image();
    chefPicture.src = chefImage;
    chefPicture.alt = "Head Chef";
    chefPicture.classList.add("picture", "person");
    chefInfo.appendChild(chefPicture);

    chefCard.appendChild(chefInfo);

    const chefPhone = document.createElement("div");
    chefPhone.classList.add("phone");
    chefPhone.textContent = "+15165763746";
    chefCard.appendChild(chefPhone);

    contacts.appendChild(chefCard);

    const ownerCard = document.createElement("div");
    ownerCard.classList.add("card");

    const ownerInfo = document.createElement("div");
    ownerInfo.classList.add("info");

    const ownerName = document.createElement("div");
    ownerName.classList.add("name", "person");
    ownerName.textContent = "Mr. Moksim";
    ownerInfo.appendChild(ownerName);

    const ownerPosition = document.createElement("div");
    ownerPosition.classList.add("position");
    ownerPosition.textContent = "Owner";
    ownerInfo.appendChild(ownerPosition);

    const ownerPicture = new Image();
    ownerPicture.src = ownerImage;
    ownerPicture.alt = "Owner";
    ownerPicture.classList.add("picture", "person");
    ownerInfo.appendChild(ownerPicture);

    ownerCard.appendChild(ownerInfo);

    const ownerPhone = document.createElement("div");
    ownerPhone.classList.add("phone");
    ownerPhone.textContent = "+18436652427";
    ownerCard.appendChild(ownerPhone);

    contacts.appendChild(ownerCard);

    call.appendChild(contacts);

    main.appendChild(call);

    return main;
}