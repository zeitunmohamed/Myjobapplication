function applyNow(jobTitle) {
    document.getElementById('jobTitle').value = jobTitle;
    document.getElementById('name').focus();
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
        toggle.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent immediate closure
            
            const dropdownId = this.getAttribute("data-target");
            const dropdown = document.getElementById(dropdownId);

            // Hide other dropdowns when opening one
            document.querySelectorAll(".dropdown-content").forEach(menu => {
                if (menu !== dropdown) {
                    menu.style.display = "none";
                }
            });

            // Toggle selected dropdown
            dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".filter-item")) {
            document.querySelectorAll(".dropdown-content").forEach(drop => {
                drop.style.display = "none";
            });
        }
    });
});

function loadJob(job) {
    let card = document.createElement("div");
    card.classList.add("card", "col-3",);

    card.innerHTML = `
       <div class="card">
           <img src="${job.image}" class="card-img-top" alt="${job.title}">
           <div>
               <h5 class="card-title">${job.title}</h5>
               <p class="card-text">${job.company}</p>
                <p class="card-text">${job.location}</p>
                 <p class="card-text">${job.deadline}</p>
                 <p class="card-text">${job.contract_type}</p>
                 <a href="apply.html" class="btn btn-primary">Apply Now!</a>
           </div>
       </div>
    `;

    document.getElementById("job-container").appendChild(card);
}

function getJobs() {
    fetch("http://localhost:3000/jobs")
        .then((res) => res.json())
        .then((jobs) => { jobs.forEach(job=> loadJob(job))
})}

document.addEventListener("DOMContentLoaded", function() {
    getJobs();
});

function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}



  function showSuccessPopup() {
    const popup = document.getElementById("successPopup");
    popup.style.display = "block";

    // Optional: hide the popup after 4 seconds
    setTimeout(() => {
      popup.style.display = "none";
    }, 4000);
  }






  document.addEventListener("DOMContentLoaded", function() {
    const jobContainer = document.getElementById("job-container");

    // Load jobs from localStorage
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    // Display jobs
    function displayJobs() {
        jobContainer.innerHTML = '';
        jobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.classList.add('col-md-4', 'mb-4');
            jobCard.innerHTML = `
                <div class="card">
                    <img src="${job.image}" class="card-img-top" alt="${job.title}">
                    <div class="card-body">
                        <h5 class="card-title">${job.title}</h5>
                        <p class="card-text">${job.company}</p>
                        <p class="card-text">${job.description}</p>
                    </div>
                </div>
            `;
            jobContainer.appendChild(jobCard);
        });
    }

    // Display jobs when the page loads
    displayJobs();
});


