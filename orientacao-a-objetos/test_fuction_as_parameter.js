function decision(question, doOk, doCancel) {
    if (question == "ok") {
        return doOk();
    }

    return doCancel();
}

function showOk() {
    console.log("You passed the test");
}

function showCancel() {
    console.log("You canceled the test");
}

decision("ok", showOk, showCancel);
decision("cancel", showOk, showCancel);