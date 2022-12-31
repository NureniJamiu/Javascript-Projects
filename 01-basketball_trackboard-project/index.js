let initialHomeCount = 0
let initialGuestCount = 0
let homeScreenCount = document.getElementById("homeScreen")
let guestScreenCount = document.getElementById("guestScreen")

function addHome1() {
    homeScreenCount.textContent = initialHomeCount = initialHomeCount + 1
}

function addHome2() {
    homeScreenCount.textContent = initialHomeCount = initialHomeCount + 2
}

function addHome3() {
    homeScreenCount.textContent = initialHomeCount = initialHomeCount + 3
}
//--------------------------------------------------------

function addGuest1() {
    guestScreenCount.textContent = initialGuestCount = initialGuestCount + 1
}

function addGuest2() {
    guestScreenCount.textContent = initialGuestCount = initialGuestCount + 2
}

function addGuest3() {
    guestScreenCount.textContent = initialGuestCount = initialGuestCount + 3
}

function resetHome() {
    homeScreenCount.textContent = initialHomeCount = 0
}

function resetGuest() {
    guestScreenCount.textContent = initialGuestCount = 0
}

function reset() {
    homeScreenCount.textContent = initialHomeCount = 0
    guestScreenCount.textContent = initialGuestCount = 0
}
