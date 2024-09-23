document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault(); //pprevents form submission 
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage') ;
      const courseNameInput = document.getElementById('courseName'); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // if there's input use the value, Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
    certificateContent.innerHTML = `
            <h2>Certificate of Achievement</h2>
            <p>This is to certify that, <strong>${studentName}</strong></p>
            <p>has completed the <strong>${courseName}</strong>.</p>
            <p> with legendary perserverance and world-class bad-assery for never giving up 🏆 </p>
            <img src="logo.png" style="height:100px; width:400px;"> 
            <p>${personalMessage}</p>
        `;;
    
      //  Display the modal
      modal.style.display = 'block'; //show the modal after putting content it 
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });  
  });
  