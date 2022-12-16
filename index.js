// let emailCollectorForm = document.getElementById("Email-Collector");
// emailCollectorForm.addEventListener("submit", event => {
//     event.preventDefault();
    
//     let ourFormData = new FormData(event.target);

//     let userName = ourFormData.get("userName");

//     let updatedHtmlContent = `
//     <h2>Congratulations ${userName}!</h2>
//         <p>Your are one step closer to become a BBQ master!</p>

//         <p class="fine-print">We'll never share your information
//             without your permission</p>
//     `

//     let ourMainContent = document.getElementById("Main-Content");
//     ourMainContent.innerHTML = updatedHtmlContent;
// })


let emailCollectorForm = document.getElementById("Email-Collector");
emailCollectorForm.addEventListener('submit', event => {
    event.preventDefault();

    let ourFormData = new FormData(event.target);

    let userName = ourFormData.get('userName');

    let updatedHtmlContent = `
    <h2>Congratulations ${userName}</h2>
        <p>You are one steop closer to become a BBQ master!</p>
        <p class="fine-print">We'll never share your information
            without your permission</p>
    `
    let ourNewContent = document.getElementById("Main-Content");
    ourNewContent.innerHTML = updatedHtmlContent;

})