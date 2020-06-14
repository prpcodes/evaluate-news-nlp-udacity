function checkForUrl(inputText) {
    console.log("::: Running checkForName :::", inputText);
    var pattern = new RegExp(
        '^(https?:\\/\\/)?'+
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+
        '((\\d{1,3}\\.){3}\\d{1,3}))'+
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
        '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+
        '(\\#[-a-z\\d_]*)?$','i'
    );

    if(pattern.test(!inputText)) {
        alert("Error! Entered string is not a valid URL.")
    } 
}

export { checkForUrl }
