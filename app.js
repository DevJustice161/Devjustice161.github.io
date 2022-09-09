

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