
  // Function to display the stored job applications in a table
  function loadApplications() {
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    const tableBody = document.getElementById('applicationTableBody');
    
    // Clear any existing rows
    tableBody.innerHTML = '';

    // Populate the table with data from localStorage
    applications.forEach(app => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="px-4 py-2 border">${app.fullname}</td>
        <td class="px-4 py-2 border">${app.email}</td>
        <td class="px-4 py-2 border">${app.phone}</td>
        <td class="px-4 py-2 border">${app.position}</td>
        <td class="px-4 py-2 border">${app.county}</td>
        <td class="px-4 py-2 border"><a href="${app.resume}" target="_blank" class="text-blue-600">View Resume</a></td>
        <td class="px-4 py-2 border">${app.coverletter}</td>
      `;
      tableBody.appendChild(row);
    });
}