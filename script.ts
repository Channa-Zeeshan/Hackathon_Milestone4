const form=document.querySelector('form') as HTMLFormElement
const cvDisplay=document.querySelector('#generatedCv') as HTMLDivElement

form.addEventListener('submit',(e: Event)=>{
    e.preventDefault();

   const username= (document.getElementById('userName') as HTMLInputElement).value
   const name= (document.getElementById('name') as HTMLInputElement).value
   const email= (document.getElementById('email') as HTMLInputElement).value
   const contact= (document.getElementById('contact') as HTMLInputElement).value
   const address= (document.getElementById('address') as HTMLTextAreaElement).value

   const bachelor= (document.getElementById('bachelor') as HTMLInputElement).value
   const enter= (document.getElementById('enter') as HTMLInputElement).value
   const matric= (document.getElementById('matric') as HTMLInputElement).value

   const experience= (document.getElementById('experience') as HTMLInputElement).value
   const skills= (document.getElementById('skills') as HTMLInputElement).value


   const resume= `
   
   <h1> Resume</h1>
   <h2> Personal Information </h2>
   <p><b> Name </b> ${name} </p> <br>
   <p><b> Email </b> ${email} </p>
   <p><b> Contact </b> ${contact} </p>
   <p><b> Address </b> ${address} </p>

   <h2> Education </h2>
   <p><b> Bachelor </b> ${bachelor} </p> <br>
   <p><b> Intermediate </b> ${enter} </p> <br>
   <p><b> Matric </b> ${matric} </p> <br>

   <h2> experience </h2>
   <p><b> Experience </b> ${experience} </p> <br>   


   <h2> Skills </h2>
   <p><b>  </b> ${skills} </p> <br>

   `;
   const resume2=`
    <div class="CurriculumVitae">
    <h1>   <p class="cv"> CURRICULUM </p> <p class="cv">VITAE</p> </h1>
    </div>
    <section class="information">
        <div class="info">
            <div class="detail"> 
                <h2 class="myname"> <span contenteditable="true">${name} </span></h2>
                <div class="alldetail">
                    <p>Contact NO</p>
                    <p>:</p>
                    <p> <span contenteditable="true">${contact}</span></p>
                </div>
                <div class="alldetail">
                    <p>Email ID's</p>
                    <p>:</p>
                    <p> <span contenteditable="true">${email}</span></p>
                </div>
                <div class="alldetail">
                    <p>Address</p>
                    <p>:</p>
                    <p> <span contenteditable="true">${address}</span></p>
                </div>
            </div>
            
        </div>
    </section>
    <section class="objective">
        <h1 class="career"> CAREER OBJECTIVE</h1>
        <P> I am seeking position to utilize my skills and abilities in the Computer and Information Technology industry 
            that offers professional growth will being resourceful, innovative and flexible. I enjoy being challenged I am 
            hard worker and I love challenges and love to those projects that require me to come outside from my comfort 
            and knowledge</P>
    </section>
    <section class="education">
        <h1 class="edu"> EDUCATION</h1>
        <h2>Bachelors</h2>
        <p> <span contenteditable="true">${bachelor}</span></p>

        <h2> Intermediate</h2>
        <p><span contenteditable="true"> ${enter}</span></p>

        <h2> Matric</h2>
        <p> <span contenteditable="true">${matric}</span></p>
    </section>
    <section class="Skills">
        <h1> SKILLS</h1>

       <p><span contenteditable="true"> ${skills}</span></p>
    </section>
    <section class="experience">
        <h1>EXPERIENCE</h1>
        <p><span contenteditable="true"> ${experience}</span></p>
    </section>
    <footer>
        
    </footer>
   `
   if(cvDisplay){
    cvDisplay.innerHTML=resume2;
   }else{
    console.error("resume element is missing")
   }
   form.style.display='none'
    
})