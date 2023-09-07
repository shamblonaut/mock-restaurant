import salmonImage from "../assets/grilled-salmon.jpg";
import biriyaniImage from "../assets/hyderabadi-biriyani.jpg";
import burgerImage from "../assets/burger.jpg";
import tunaImage from "../assets/tuna-salad-sandwich.jpg";
import duckImage from "../assets/roasted-duck.jpg";
import steakImage from "../assets/garlic-butter-steak.jpg";
import burritoImage from "../assets/chicken-burrito.jpg";
import tofuImage from "../assets/tofu-noodles.jpg";
import friedriceImage from "../assets/fried-rice.jpg";
import meatballsImage from "../assets/swedish-meatballs.jpg";
import quesadillaImage from "../assets/vegan-quesadilla.jpg";
import ratatouilleImage from "../assets/ratatouille.jpg";

export default function loadMenuSection() {
    const main = document.createElement("div");
    main.classList.add("main", "menu");


    // Grilled Salmon
    const salmonItem = document.createElement("div");
    salmonItem.classList.add("item");

    const salmonPicture = new Image();
    salmonPicture.src = salmonImage;
    salmonPicture.alt = "Grilled Salmon";
    salmonPicture.classList.add("picture", "food");
    salmonItem.appendChild(salmonPicture);

    const salmonDetails = document.createElement("div");
    salmonDetails.classList.add("details");

    const salmonName = document.createElement("div");
    salmonName.classList.add("name", "food");
    salmonName.textContent = "Grilled Salmon";
    salmonDetails.appendChild(salmonName);

    const salmonPrice = document.createElement("div");
    salmonPrice.classList.add("price");
    salmonPrice.textContent = "$14.99";
    salmonDetails.appendChild(salmonPrice);

    salmonItem.appendChild(salmonDetails);

    main.appendChild(salmonItem);

    // Hyderabadi Biriyani
    const biriyaniItem = document.createElement("div");
    biriyaniItem.classList.add("item");

    const biriyaniPicture = new Image();
    biriyaniPicture.src = biriyaniImage;
    biriyaniPicture.alt = "Hyderabadi Biriyani";
    biriyaniPicture.classList.add("picture", "food");
    biriyaniItem.appendChild(biriyaniPicture);

    const biriyaniDetails = document.createElement("div");
    biriyaniDetails.classList.add("details");

    const biriyaniName = document.createElement("div");
    biriyaniName.classList.add("name", "food");
    biriyaniName.textContent = "Hyderabadi Biriyani";
    biriyaniDetails.appendChild(biriyaniName);

    const biriyaniPrice = document.createElement("div");
    biriyaniPrice.classList.add("price");
    biriyaniPrice.textContent = "$16.99";
    biriyaniDetails.appendChild(biriyaniPrice);

    biriyaniItem.appendChild(biriyaniDetails);

    main.appendChild(biriyaniItem);

    // Cheese Steak Burger
    const burgerItem = document.createElement("div");
    burgerItem.classList.add("item");

    const burgerPicture = new Image();
    burgerPicture.src = burgerImage;
    burgerPicture.alt = "Cheese Steak Burger";
    burgerPicture.classList.add("picture", "food");
    burgerItem.appendChild(burgerPicture);

    const burgerDetails = document.createElement("div");
    burgerDetails.classList.add("details");

    const burgerName = document.createElement("div");
    burgerName.classList.add("name", "food");
    burgerName.textContent = "Cheese Steak Burger";
    burgerDetails.appendChild(burgerName);

    const burgerPrice = document.createElement("div");
    burgerPrice.classList.add("price");
    burgerPrice.textContent = "$3.49";
    burgerDetails.appendChild(burgerPrice);

    burgerItem.appendChild(burgerDetails);

    main.appendChild(burgerItem);

    // Tuna Salad Sandwich
    const tunaItem = document.createElement("div");
    tunaItem.classList.add("item");

    const tunaPicture = new Image();
    tunaPicture.src = tunaImage;
    tunaPicture.alt = "Tuna Salad Sandwich";
    tunaPicture.classList.add("picture", "food");
    tunaItem.appendChild(tunaPicture);

    const tunaDetails = document.createElement("div");
    tunaDetails.classList.add("details");

    const tunaName = document.createElement("div");
    tunaName.classList.add("name", "food");
    tunaName.textContent = "Tuna Salad Sandwich";
    tunaDetails.appendChild(tunaName);

    const tunaPrice = document.createElement("div");
    tunaPrice.classList.add("price");
    tunaPrice.textContent = "$14.99";
    tunaDetails.appendChild(tunaPrice);

    tunaItem.appendChild(tunaDetails);

    main.appendChild(tunaItem);

    // Roasted Duck
    const duckItem = document.createElement("div");
    duckItem.classList.add("item");

    const duckPicture = new Image();
    duckPicture.src = duckImage;
    duckPicture.alt = "Roasted Duck";
    duckPicture.classList.add("picture", "food");
    duckItem.appendChild(duckPicture);

    const duckDetails = document.createElement("div");
    duckDetails.classList.add("details");

    const duckName = document.createElement("div");
    duckName.classList.add("name", "food");
    duckName.textContent = "Roasted Duck";
    duckDetails.appendChild(duckName);

    const duckPrice = document.createElement("div");
    duckPrice.classList.add("price");
    duckPrice.textContent = "$29.99";
    duckDetails.appendChild(duckPrice);

    duckItem.appendChild(duckDetails);

    main.appendChild(duckItem);

    // Garlic Butter Steak
    const steakItem = document.createElement("div");
    steakItem.classList.add("item");

    const steakPicture = new Image();
    steakPicture.src = steakImage;
    steakPicture.alt = "Garlic Butter Steak";
    steakPicture.classList.add("picture", "food");
    steakItem.appendChild(steakPicture);

    const steakDetails = document.createElement("div");
    steakDetails.classList.add("details");

    const steakName = document.createElement("div");
    steakName.classList.add("name", "food");
    steakName.textContent = "Garlic Butter Steak";
    steakDetails.appendChild(steakName);

    const steakPrice = document.createElement("div");
    steakPrice.classList.add("price");
    steakPrice.textContent = "$19.99";
    steakDetails.appendChild(steakPrice);

    steakItem.appendChild(steakDetails);

    main.appendChild(steakItem);

    // Chicken Burrito
    const burritoItem = document.createElement("div");
    burritoItem.classList.add("item");

    const burritoPicture = new Image();
    burritoPicture.src = burritoImage;
    burritoPicture.alt = "Chicken Burrito";
    burritoPicture.classList.add("picture", "food");
    burritoItem.appendChild(burritoPicture);

    const burritoDetails = document.createElement("div");
    burritoDetails.classList.add("details");

    const burritoName = document.createElement("div");
    burritoName.classList.add("name", "food");
    burritoName.textContent = "Chicken Burrito";
    burritoDetails.appendChild(burritoName);

    const burritoPrice = document.createElement("div");
    burritoPrice.classList.add("price");
    burritoPrice.textContent = "$7.99";
    burritoDetails.appendChild(burritoPrice);

    burritoItem.appendChild(burritoDetails);

    main.appendChild(burritoItem);

    // Crispy Tofu with Noodles
    const tofuItem = document.createElement("div");
    tofuItem.classList.add("item");

    const tofuPicture = new Image();
    tofuPicture.src = tofuImage;
    tofuPicture.alt = "Crispy Tofu with Noodles";
    tofuPicture.classList.add("picture", "food");
    tofuItem.appendChild(tofuPicture);

    const tofuDetails = document.createElement("div");
    tofuDetails.classList.add("details");

    const tofuName = document.createElement("div");
    tofuName.classList.add("name", "food");
    tofuName.textContent = "Crispy Tofu with Noodles";
    tofuDetails.appendChild(tofuName);

    const tofuPrice = document.createElement("div");
    tofuPrice.classList.add("price");
    tofuPrice.textContent = "$4.99";
    tofuDetails.appendChild(tofuPrice);

    tofuItem.appendChild(tofuDetails);

    main.appendChild(tofuItem);

    // Chicken Fried Rice
    const friedriceItem = document.createElement("div");
    friedriceItem.classList.add("item");

    const friedricePicture = new Image();
    friedricePicture.src = friedriceImage;
    friedricePicture.alt = "Chicken Fried Rice";
    friedricePicture.classList.add("picture", "food");
    friedriceItem.appendChild(friedricePicture);

    const friedriceDetails = document.createElement("div");
    friedriceDetails.classList.add("details");

    const friedriceName = document.createElement("div");
    friedriceName.classList.add("name", "food");
    friedriceName.textContent = "Chicken Fried Rice";
    friedriceDetails.appendChild(friedriceName);

    const friedricePrice = document.createElement("div");
    friedricePrice.classList.add("price");
    friedricePrice.textContent = "$2.49";
    friedriceDetails.appendChild(friedricePrice);

    friedriceItem.appendChild(friedriceDetails);

    main.appendChild(friedriceItem);

    // Swedish Meatballs
    const meatballsItem = document.createElement("div");
    meatballsItem.classList.add("item");

    const meatballsPicture = new Image();
    meatballsPicture.src = meatballsImage;
    meatballsPicture.alt = "Swedish Meatballs";
    meatballsPicture.classList.add("picture", "food");
    meatballsItem.appendChild(meatballsPicture);

    const meatballsDetails = document.createElement("div");
    meatballsDetails.classList.add("details");

    const meatballsName = document.createElement("div");
    meatballsName.classList.add("name", "food");
    meatballsName.textContent = "Swedish Meatballs";
    meatballsDetails.appendChild(meatballsName);

    const meatballsPrice = document.createElement("div");
    meatballsPrice.classList.add("price");
    meatballsPrice.textContent = "$2.99";
    meatballsDetails.appendChild(meatballsPrice);

    meatballsItem.appendChild(meatballsDetails);

    main.appendChild(meatballsItem);
    
    // Vegan Quesadilla
    const quesadillaItem = document.createElement("div");
    quesadillaItem.classList.add("item");

    const quesadillaPicture = new Image();
    quesadillaPicture.src = quesadillaImage;
    quesadillaPicture.alt = "Vegan Quesadilla";
    quesadillaPicture.classList.add("picture", "food");
    quesadillaItem.appendChild(quesadillaPicture);

    const quesadillaDetails = document.createElement("div");
    quesadillaDetails.classList.add("details");

    const quesadillaName = document.createElement("div");
    quesadillaName.classList.add("name", "food");
    quesadillaName.textContent = "Vegan Quesadilla";
    quesadillaDetails.appendChild(quesadillaName);

    const quesadillaPrice = document.createElement("div");
    quesadillaPrice.classList.add("price");
    quesadillaPrice.textContent = "$9.99";
    quesadillaDetails.appendChild(quesadillaPrice);

    quesadillaItem.appendChild(quesadillaDetails);

    main.appendChild(quesadillaItem);

    // Veggie Baked Ratatouille
    const ratatouilleItem = document.createElement("div");
    ratatouilleItem.classList.add("item");

    const ratatouillePicture = new Image();
    ratatouillePicture.src = ratatouilleImage;
    ratatouillePicture.alt = "Veggie Baked Ratatouille";
    ratatouillePicture.classList.add("picture", "food");
    ratatouilleItem.appendChild(ratatouillePicture);

    const ratatouilleDetails = document.createElement("div");
    ratatouilleDetails.classList.add("details");

    const ratatouilleName = document.createElement("div");
    ratatouilleName.classList.add("name", "food");
    ratatouilleName.textContent = "Veggie Baked Ratatouille";
    ratatouilleDetails.appendChild(ratatouilleName);

    const ratatouillePrice = document.createElement("div");
    ratatouillePrice.classList.add("price");
    ratatouillePrice.textContent = "$12.49";
    ratatouilleDetails.appendChild(ratatouillePrice);

    ratatouilleItem.appendChild(ratatouilleDetails);

    main.appendChild(ratatouilleItem);
    
    return main;
}