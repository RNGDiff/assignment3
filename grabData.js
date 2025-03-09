

function getCv(){
    fetch('cv.json')
        .then(response => response.json())
        .then(function(data){
            const myDetails = data.myDetails;

            // ^ Full name -- Full name -- Full name
            const fName = document.querySelector('.first-name');
            fName.innerText = `${myDetails.fName}`;

            const lName = document.querySelector('.last-name');
            lName.innerText = `${myDetails.lName}`;

            // ! Address & contact -- Address & contact
            const address = document.querySelector('.address').innerText = `${myDetails.address}, ${myDetails.zipCode} ${myDetails.county}`;
            
            

            const email = document.querySelector('.email').innerText = `${myDetails.email}`;

            const phoneNumber = document.querySelector('.phone-number').innerText = `${myDetails.phoneNumber}`;
            

            const profileSummary = document.querySelector('.profile-summary').innerText = `${data.profileSummary}`;
            
            // ^ Experience ONE

            const experience = document.querySelector('.experience-title').innerText = `${data.experience[0].exp}`;

            const date = document.querySelector('.date').innerText = `${data.experience[0].date}`

            const jobTitle = document.querySelector('.job-title').innerText = `${data.experience[0].jobTitle}`

            const company = document.querySelector('.company').innerText = `${data.experience[0].company}`

            const jobDesc = document.querySelector('.job-desc').innerText = `${data.experience[0].jobDescription}`
            
            // ^ Experience TWO

            const date2 = document.querySelector('.date2').innerText = `${data.experience[1].date}`

            const jobTitle2 = document.querySelector('.job-title2').innerText = `${data.experience[1].jobTitle}`

            const company2 = document.querySelector('.company2').innerText = `${data.experience[1].company}`

            const jobDesc2 = document.querySelector('.job-desc2').innerText = `${data.experience[1].jobDescription}`

            // !Degrees ONE

            const degree = document.querySelector('.degree').innerText = `${data.education[0].degree}`
            
            const date3 = document.querySelector('.date3').innerText = `${data.education[0].date}`

            const degreeTitle = document.querySelector('.degree-title').innerText = `${data.education[0].degreeTitle}`

            const school = document.querySelector('.school').innerText = `${data.education[0].school}`

            const degreeDesc = document.querySelector('.degree-desc').innerText = `${data.education[0].degreeDesc}`            

            // !Degrees TWO

            const date4 = document.querySelector('.date4').innerText = `${data.education[1].date}`;

            const degreeTitle2 = document.querySelector('.degree-title2').innerText = `${data.education[1].degreeTitle}`;

            const school2 = document.querySelector('.school2').innerText = `${data.education[1].school}`;

            const degreeDesc2 = document.querySelector('.degree-desc2').innerText = `${data.education[1].degreeDesc}`;

            // & SKILLS SKILLS SKILLS SKILLS 

            const js = document.querySelector('.js').innerText = `${data.skills.js}`
            const css = document.querySelector('.css').innerText = `${data.skills.css}`
            const html = document.querySelector('.html').innerText = `${data.skills.html}`
            const skills = document.querySelector('.title-skills').innerText = `${data.skills.kompetens}`

            // Koden fick jag från w3schools.com
            let slideIndex = 0;
            runSlide()

            function runSlide(){ 
                let i;
                let slides = document.querySelectorAll('.skills');
                for(i = 0; i < slides.length; i++){
                    slides[i].style.display = 'none';
                }
                slideIndex++;
                if(slideIndex > slides.length){slideIndex = 1}

                // Jag la in modulos här men det är allt
                slides[slideIndex%3].style.display = 'block';
                setTimeout(() => {
                    runSlide();
                }, 2500);

            }

            // & SKILLS SKILLS SKILLS SKILLS 
            
            
    })
    .catch(error => console.error('Error loading JSON:', error)); 
}

getCv()
//Klicka här för att se mitt CV => res.render('/cv.ejs') 