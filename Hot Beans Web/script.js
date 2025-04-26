function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

function toggleThoughts(thoughtsId) {
    const thoughtsElement = document.getElementById(thoughtsId);
    if (thoughtsElement.style.display === "none") {
        thoughtsElement.style.display = "block";
    } else {
        thoughtsElement.style.display = "none";
    }
}
  function showJobDetails(jobId) {
      document.getElementById("job-list").style.display = "none";
      document.getElementById("job-details-" + jobId).style.display = "block";
  }
  
  function goBack() {
      document.querySelectorAll(".job-details").forEach(el => el.style.display = "none");
      document.getElementById("job-list").style.display = "block";
  }

  document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can handle the form data as needed
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const resume = document.getElementById('resume').files[0];
    const coverLetter = document.getElementById('coverLetter').value;

    // For demonstration, we'll just show a success message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you, ${name}! Your application has been submitted successfully.`;
    responseMessage.style.color = 'green'; // Change text color to green

    // Optionally, you can reset the form after submission
    document.getElementById('applicationForm').reset();
});
