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
            alert("Form submitted! Thank you!");
        })
        .catch(function (e) {
            console.error("Form failed!");
        });

    return false;
});
