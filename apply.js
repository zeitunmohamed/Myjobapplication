// Function to handle form submission and store the data in localStorage
function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting the usual way
  
    // Get form data
    const form = event.target;
    const formData = {
      fullname: form.fullname.value,
      email: form.email.value,
      county: form.county.value,
      phone: form.phone.value,
      position: form.position.value,
      coverletter: form.coverletter.value,
      resume: form.cv.files[0]?.name // Only store the file name for the resume
    };
  
    // Get existing applications from localStorage, or start with an empty array
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    
    // Add the new application to the array
    applications.push(formData);
    
    // Save the updated array back to localStorage
    localStorage.setItem('applications', JSON.stringify(applications));
  
    // Show success popup
    showSuccessPopup();
  }
  
  // Show success popup after form submission
  function showSuccessPopup() {
    document.getElementById('successPopup').style.display = 'block';
  }
  
  // Add event listener for form submission
  document.querySelector('form').addEventListener('submit', handleSubmit);
  




    const jobId = new URLSearchParams(window.location.search).get('jobId');

    async function fetchJobDetails() {
      const res = await fetch(`http://localhost:3000/jobs/${jobId}`);
      const job = await res.json();
      displayJobDetails(job);
    }

    function displayJobDetails(job) {
      const jobDetails = document.getElementById('job-details');
      jobDetails.innerHTML = `
        <h2>${job.title} - ${job.company}</h2>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Deadline:</strong> ${job.deadline}</p>
        <p>${job.description}</p>
        <h3>Apply Now</h3>
        <form>
          <!-- Add your form fields for the application here -->
          <label for="applicant-name">Name:</label><br>
          <input type="text" id="applicant-name" required><br>
          
          <label for="applicant-email">Email:</label><br>
          <input type="email" id="applicant-email" required><br>
          
          <button type="submit">Submit Application</button>
        </form>
      `;
    }

    // Fetch and display the job details
    fetchJobDetails();
  