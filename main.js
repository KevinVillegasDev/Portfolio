console.log("hello");

let link =
    "https://docs.google.com/spreadsheets/d/19Z5xRV2uRYM8WX0QTWsPo2IC3AuWNPOULuzpOW0VFqw/edit?usp=sharing";

let key = "AIzaSyBF_rHAsqqzlDTbDbm-UJ05jdyixsHguAE";

let url =
    "https://sheets.googleapis.com/v4/spreadsheets/19Z5xRV2uRYM8WX0QTWsPo2IC3AuWNPOULuzpOW0VFqw/values/A1:B1?key=AIzaSyBF_rHAsqqzlDTbDbm-UJ05jdyixsHguAE";

$.ajax({ url: url }).then((data) => {
    console.log(data);
});

let postUrl =
    "https://sheets.googleapis.com/v4/spreadsheets/19Z5xRV2uRYM8WX0QTWsPo2IC3AuWNPOULuzpOW0VFqw/values/A30:Z30:append??key=AIzaSyBF_rHAsqqzlDTbDbm-UJ05jdyixsHguAE";
