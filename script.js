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

function filterJobs() {
    const input = document.getElementById("jobSearch").value.toLowerCase();
    const jobs = document.querySelectorAll(".job");
    let found = false;

    jobs.forEach(job => {
        const title = job.querySelector("h3").textContent.toLowerCase();
        if (title.includes(input)) {
            job.style.display = "block";
            found = true;
        } else {
            job.style.display = "none";
        }
    });

    document.getElementById("noResultsMessage").style.display = found ? "none" : "block";
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
    event.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const resume = document.getElementById('resume').files[0];
    const coverLetter = document.getElementById('coverLetter').value;
    
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you, ${name}! Your application has been submitted successfully.`;
    responseMessage.style.color = 'green'; 


    document.getElementById('applicationForm').reset();
});
