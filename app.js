const toggleCancelMenuMobile = document.querySelector('.toggleCancelMenuMobile');
const toggleMenuMobile = document.querySelector('.toggleMenuMobile');
var mobLinks = document.querySelectorAll('.mob-links');
const mobNav = document.querySelector('#mob-nav');

toggleCancelMenuMobile.addEventListener("click", ()=>{
    mobNav.style.display = 'none';
    toggleMenuMobile.style.display = 'block';
})

toggleMenuMobile.addEventListener('click', ()=>{
    mobNav.style.display = 'block';
    toggleMenuMobile.style.display = 'none';
})

mobLinks.forEach(moblink => {
    moblink.addEventListener('click', ()=>{
        mobNav.style.display = 'none';
        toggleMenuMobile.style.display = 'block';
    })
});

// async function generatePDF(){
//     document.getElementById('resumeBtn').innerHTML = "Downloading...";
//     //downloading
//     var resume =  document.getElementById('resume');
//     var doc = new jsPDF('1', 'pt');

//     await html2canvas(resume, {
//         onclone: function (doc) {
//             doc.resume.style.display = 'block';
//         },
//         width: 530
//     }).then((canvas) =>{
//         doc.addImage(canvas.toDataURL('image/png'), 'PNG', 5, 5, 500, 200);
//     })

//     doc.save('Justice_Joshua.pdf');

//     //End of download

//     document.getElementById('resumeBtn').innerHTML = "Resume";
// }

// var resumeBtn = document.getElementById('resumeBtn');
// resumeBtn.addEventListener('click', ()=>{
//     resumeBtn.innerHTML = "Downloading...";
//     const resume = document.getElementById('resume');
//     var opt = {
//         // margin: 1,
//         filename: 'Justice_Joshua.pdf',
//         image: {type: 'jpeg', quality: 75},
//         html2canvas: {scale: 3},
//         jsPDF: {unit: 'pt', format: [530, 1100], orientation:'portrait'}
//     };
//     html2pdf().from(resume).set(opt).save();
//     resumeBtn.innerHTML = "Resume&#769;";
// })

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}