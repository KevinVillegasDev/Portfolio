$(".nav-list").toggleClass("hide");
$(".nav-menu img").on("click", function () {
    $(".nav-list").toggleClass("hide");
});
//thanks to Jacob for getting me set up with the form api below!
let googleForms =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfnisF_bBgsm8dQtBDXWN3lmptb33D3UFR96LGMFkSNJwEx_Q/formResponse";

$("form").on("submit", function (form) {
    let baseUrl =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfnisF_bBgsm8dQtBDXWN3lmptb33D3UFR96LGMFkSNJwEx_Q";
    let url = (baseUrl += "/formResponse?");

    let inputs = form.currentTarget.childNodes;
    inputs.forEach((element) => {
        if (
            (element.localName === "input" ||
                element.localName === "textarea") &&
            element.type !== "submit"
        ) {
            url += element.name;
            url += "=";
            url += element.value;
            url += "&";
        }
    });
    $.ajax({
        url: url,
    })
        .then(function (e) {
            alert("Form submitted! Thank you! I will get back to you shortly.");
        })
        .catch(function (e) {
            alert("Form submission failed. Please try again");
        });

    return false;
});
