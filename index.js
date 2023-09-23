let studentName = document.getElementById('fullName');
let dateOfBirth = document.getElementById('dateOfBirth');
let field = document.getElementById('field');
let year = document.getElementById('year');
let subscription = document.getElementById('subscription');


let previewBtn = document.getElementById('preview');
let downloadBtn = document.getElementById('download');



const fullCardPreview = () => {

    let inName = document.getElementById('inName');
    let inBirth = document.getElementById('inBirth');
    let inFieldYear = document.getElementById('inFieldYear');
    let inSubscriptionNum = document.getElementById('inSubscriptionNum');


    let studentNameVal = studentName.value
    let wordsArray = studentNameVal.split(" ");
    let capitalizeWord = wordsArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    let capitalize = capitalizeWord.join(" ");
    inName.innerHTML = capitalize;

    let date = dateOfBirth.value;
    let studentDateOfBirth = new Date(date).toLocaleDateString();
    inBirth.innerHTML = studentDateOfBirth;


    let fieldVal = field.value;
    let studentField = fieldVal.toUpperCase();
    inFieldYear.innerHTML = studentField + '0' + year.value;

    inSubscriptionNum.innerHTML = subscription.value;



    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext("2d");


    let width = 440;

    canvas.width = width;
    canvas.height = width / 1.616;


    // Card Header  ⭐

    let headHeight = 70;
    ctx.font = '24px poppins'
    ctx.fillStyle = 'rgba(29, 78, 216,1)';
    ctx.rect(0, 0, width, headHeight);
    ctx.fill();

    // Card Text 
    ctx.fillStyle = 'white';
    ctx.fillText('Campus Card', 18, headHeight - 40);
    ctx.font = '18px poppins';
    ctx.fillText('Undergraduate', 28, headHeight - 10);

    // Card Image
    let schoolLogo = document.getElementById('schoolLogo');
    ctx.drawImage(schoolLogo, width - headHeight, 10, headHeight - 20, headHeight - 20);


    // Card Body  ⭐

    // Student Name
    let body_YAxis = 120;
    let bodyTextWidth = (width / 3) - 10;
    ctx.font = '16px poppins';
    ctx.fillStyle = 'black';

    // Student Name
    ctx.fillText(inName.innerHTML, bodyTextWidth, body_YAxis);
    // Student Date Birth
    ctx.fillText(inBirth.innerHTML, bodyTextWidth, body_YAxis + 30);
    // Student Field-Year
    ctx.fillText(inFieldYear.innerHTML, bodyTextWidth, body_YAxis + 60);
    // Student Subscription
    ctx.fillText('SubN° ' + inSubscriptionNum.innerHTML, bodyTextWidth, body_YAxis + 90);

    // Student Image
    let studentImg = document.getElementById('studentImg');
    ctx.drawImage(studentImg, 18, headHeight + 20, 100, 150);


    // Download Card 

    downloadBtn.addEventListener('click', () => {
        let canvasContent = canvas.toDataURL();
        let a = document.createElement('a');
        a.href = canvasContent;
        a.download = 'StudentCard.png';
        a.click();
    })



};

previewBtn.addEventListener('click', fullCardPreview);



function loadImg(event) {
    let studentImg = document.getElementById('studentImg');
    studentImg.src = URL.createObjectURL(event.target.files[0])
};

