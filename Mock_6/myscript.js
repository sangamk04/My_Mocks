

var cutbtn = document.getElementsByClassName("cut")[0];
var otpPopupSam = document.getElementById("otpBox");



document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();


  
    var obj = {
        brand: document.querySelector("#cbrand").value,
        type: document.querySelector("#manualau").value,
        year: document.querySelector("#pyear").value,
        kms: document.querySelector("#driven").value,
        Description: document.querySelector("#Description").value,
        Price: document.querySelector("#price").value,
    }
    otpPopupSam.style.display = "block";


  
   
    var otpSubmitBtn = document.querySelector("#confirmOtpBtn");

    otpSubmitBtn.addEventListener("click", function () {

        let o1 = document.querySelector(".otp1").value;
        let o2 = document.querySelector(".otp2").value;
        let o3 = document.querySelector(".otp3").value;
        let o4 = document.querySelector(".otp4").value;
        if (o1 == 1 && o2 == 2 && o3 == 3 && o4 == 4) {

            postingData(obj)
         
        } 
        else 
        {

            alert('Wrong OTP !!'); 
        }
        otpPopupSam.style.display = "none";

    });
});




cutbtn.addEventListener("click", function () {
    otpPopupSam.style.display = "none"
});


window.onclick = function (event) {
    if (event.target == otpPopupSam) {
        otpPopupSam.style.display = "none"
    }

};


function shiftFocus(prev, next) {
    if (prev.value.length) {
        document.getElementById(next).focus()
    }

}



const postingData = async (obj) => {
    const response = await fetch("https://sammock6.herokuapp.com/cars", {
            method: 'POST',
            headers: {

                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(obj),
        }).then((res) => {

            console.log(res)



            alert('Add Post Successfully......❤️ !!'); 

            window.location.reload();
        })

        .catch((err) => console.log(err))
};