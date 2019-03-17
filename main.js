$(() => {

    let elementToAdd = $("<h1>Hello, world.</h1>");
    let elementToAddTo = $("#elementToAddTo");
    
    console.log({elementToAdd, elementToAddTo});
    $("#buttonAppend").on("click", () => {
        $(elementToAddTo).append(elementToAdd);
    });

    $("#buttonPrepend").on("click", () => {
        $(elementToAddTo).prepend(elementToAdd);
    });

    $("#buttonBefore").on("click", () => {
        $(elementToAddTo).before(elementToAdd);
    });
    $("#buttonAfter").on("click", () => {
        $(elementToAddTo).after(elementToAdd);
    });

    $("#buttonUpdate").on("click", () => {
        // $("#elementToUpdate").html("<h1>Hello World</h1>");
        $("#elementToUpdate").text("Hello World");
    });
});