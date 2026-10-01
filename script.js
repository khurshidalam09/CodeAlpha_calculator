const display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        if (display.value === "") return;

        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}


// ==============================
// KEYBOARD / NUMPAD SUPPORT
// ==============================

document.addEventListener("keydown", function (event) {

    let key = event.key;

    // NumPad numbers
    if (event.code.startsWith("Numpad")) {

        const numpadKey = event.code.replace("Numpad", "");

        if (!isNaN(numpadKey)) {
            appendValue(numpadKey);
            event.preventDefault();
            return;
        }

        // NumPad decimal
        if (numpadKey === "Decimal") {
            appendValue(".");
            event.preventDefault();
            return;
        }

        // NumPad operators
        if (numpadKey === "Add") {
            appendValue("+");
            event.preventDefault();
            return;
        }

        if (numpadKey === "Subtract") {
            appendValue("-");
            event.preventDefault();
            return;
        }

        if (numpadKey === "Multiply") {
            appendValue("*");
            event.preventDefault();
            return;
        }

        if (numpadKey === "Divide") {
            appendValue("/");
            event.preventDefault();
            return;
        }

        // NumPad Enter
        if (numpadKey === "Enter") {
            calculate();
            event.preventDefault();
            return;
        }
    }


    // Normal keyboard numbers
    if (key >= "0" && key <= "9") {
        appendValue(key);
        event.preventDefault();
        return;
    }


    // Normal keyboard operators
    if (key === "+") {
        appendValue("+");
        event.preventDefault();
        return;
    }

    if (key === "-") {
        appendValue("-");
        event.preventDefault();
        return;
    }

    if (key === "*") {
        appendValue("*");
        event.preventDefault();
        return;
    }

    if (key === "/") {
        appendValue("/");
        event.preventDefault();
        return;
    }

    if (key === ".") {
        appendValue(".");
        event.preventDefault();
        return;
    }

    if (key === "%") {
        appendValue("%");
        event.preventDefault();
        return;
    }


    // Enter
    if (key === "Enter") {
        calculate();
        event.preventDefault();
        return;
    }


    // Backspace
    if (key === "Backspace") {
        deleteLast();
        event.preventDefault();
        return;
    }


    // Escape
    if (key === "Escape") {
        clearDisplay();
        event.preventDefault();
        return;
    }

});