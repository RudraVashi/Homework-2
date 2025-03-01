// Ingredient facts dictionary
const ingredientFacts = {
    "Salt": "Salt also had military significance. For instance, it is recorded that thousands of Napoleon's troops died during his retreat from Moscow because their wounds would not heal due to the lack of salt. In 1777, the British Lord Howe was jubilant when he succeeded in capturing General Washington's salt supply.",
    "Pepper": "Pepper is native to India and grows as a tall vine with the peppercorns as flowering drupes.",
    "Garlic": "The psychological term for fear of garlic is alliumphobia.",
    "Onion": "The official state vegetable of Texas is the Texas Sweet onion",
    "Mushrooms": "Fungi Are Genetically Closer to Humans Than Plants",
    "Beef": "The first beef cattle arrived in the United States via Mexico in the 1500s.",
    "Sour Cream": "Origins can be traced back to the Mongols, who first fermented mare's milk to create a slightly alcoholic drink called koumis.",
    "Breadcrumbs": "In the fairy tale Hansel and Gretel, breadcrumbs are used by Hansel and Gretel to track their footpath",
    "Parmesan": "Parmesan can be aged for as many as 90 months or more",
    "Marinara Sauce": "Master courses in Italy are taught about marinara sauce",
    "Chicken": "Chickens are descendants of dinosaurs",
    "Milk": "The average cow produces 90 glasses of milk each day, or about 200,000 glasses of milk during its lifetime.",
    "Virgin Oil": "The word virgin means that the olives were pressed for oil without heat or chemicals.",
    "Eggs":"The word “yolk” derives from an Old English word for “yellow”.",
    "Tofu": "Tofu originated in China over 2,000 years ago. It was discovered during the Han Dynasty."

};

document.addEventListener("DOMContentLoaded", function () {
    const ingredientList = document.getElementById("ingredient-list");
    if (!ingredientList) return; // If we're not on the recipe page, do nothing

    // We'll listen for mouseenter/mouseleave on .ingredient-item
    ingredientList.addEventListener("mouseenter", function (e) {
        if (e.target.classList.contains("ingredient-item")) {
            showTooltip(e.target, e);
        }
    }, true);

    ingredientList.addEventListener("mouseleave", function (e) {
        if (e.target.classList.contains("ingredient-item")) {
            hideTooltip(e.target);
        }
    }, true);
});

function showTooltip(liElement, event) {
    const ingredient = liElement.textContent.trim();
    const fact = ingredientFacts[ingredient];
    if (!fact) return;

    const tooltip = document.createElement("span");
    tooltip.classList.add("tooltip-text");
    tooltip.textContent = fact;
    document.body.appendChild(tooltip);

    const rect = liElement.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.bottom + window.scrollY}px`;

    liElement._tooltip = tooltip;
}

function hideTooltip(liElement) {
    const tooltip = liElement._tooltip;
    if (tooltip) {
        document.body.removeChild(tooltip);
        delete liElement._tooltip;
    }
}

/* Recieved Help From CoPilot For This Section of Code */