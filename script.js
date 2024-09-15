var form = document.querySelector('form');
var cvDisplay = document.querySelector('#generatedCv');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var username = document.getElementById('userName').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('address').value;
    var bachelor = document.getElementById('bachelor').value;
    var enter = document.getElementById('enter').value;
    var matric = document.getElementById('matric').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resume = "\n   \n   <h1> Resume</h1>\n   <h2> Personal Information </h2>\n   <p><b> Name </b> ".concat(name, " </p> <br>\n   <p><b> Email </b> ").concat(email, " </p>\n   <p><b> Contact </b> ").concat(contact, " </p>\n   <p><b> Address </b> ").concat(address, " </p>\n\n   <h2> Education </h2>\n   <p><b> Bachelor </b> ").concat(bachelor, " </p> <br>\n   <p><b> Intermediate </b> ").concat(enter, " </p> <br>\n   <p><b> Matric </b> ").concat(matric, " </p> <br>\n\n   <h2> experience </h2>\n   <p><b> Experience </b> ").concat(experience, " </p> <br>   \n\n\n   <h2> Skills </h2>\n   <p><b>  </b> ").concat(skills, " </p> <br>\n\n   ");
    var resume2 = "\n    <div class=\"CurriculumVitae\">\n    <h1>   <p class=\"cv\"> CURRICULUM </p> <p class=\"cv\">VITAE</p> </h1>\n    </div>\n    <section class=\"information\">\n        <div class=\"info\">\n            <div class=\"detail\"> \n                <h2 class=\"myname\"> <span contenteditable=\"true\">".concat(name, " </span></h2>\n                <div class=\"alldetail\">\n                    <p>Contact NO</p>\n                    <p>:</p>\n                    <p> <span contenteditable=\"true\">").concat(contact, "</span></p>\n                </div>\n                <div class=\"alldetail\">\n                    <p>Email ID's</p>\n                    <p>:</p>\n                    <p> <span contenteditable=\"true\">").concat(email, "</span></p>\n                </div>\n                <div class=\"alldetail\">\n                    <p>Address</p>\n                    <p>:</p>\n                    <p> <span contenteditable=\"true\">").concat(address, "</span></p>\n                </div>\n            </div>\n            \n        </div>\n    </section>\n    <section class=\"objective\">\n        <h1 class=\"career\"> CAREER OBJECTIVE</h1>\n        <P> I am seeking position to utilize my skills and abilities in the Computer and Information Technology industry \n            that offers professional growth will being resourceful, innovative and flexible. I enjoy being challenged I am \n            hard worker and I love challenges and love to those projects that require me to come outside from my comfort \n            and knowledge</P>\n    </section>\n    <section class=\"education\">\n        <h1 class=\"edu\"> EDUCATION</h1>\n        <h2>Bachelors</h2>\n        <p> <span contenteditable=\"true\">").concat(bachelor, "</span></p>\n\n        <h2> Intermediate</h2>\n        <p><span contenteditable=\"true\"> ").concat(enter, "</span></p>\n\n        <h2> Matric</h2>\n        <p> <span contenteditable=\"true\">").concat(matric, "</span></p>\n    </section>\n    <section class=\"Skills\">\n        <h1> SKILLS</h1>\n\n       <p><span contenteditable=\"true\"> ").concat(skills, "</span></p>\n    </section>\n    <section class=\"experience\">\n        <h1>EXPERIENCE</h1>\n        <p><span contenteditable=\"true\"> ").concat(experience, "</span></p>\n    </section>\n    <footer>\n        \n    </footer>\n   ");
    if (cvDisplay) {
        cvDisplay.innerHTML = resume2;
    }
    else {
        console.error("resume element is missing");
    }
    form.style.display = 'none';
});
