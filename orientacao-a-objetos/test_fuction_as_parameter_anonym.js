function decision(question, doOk, doCancel) {
    if (question == "ok") {
        return doOk();
    }

    return doCancel();
}

let beOk = () => {
    console.log("You passed the test");
}

let beCancel = () => {
    console.log("You canceled the test");
}

decision("ok", beOk, beCancel);
decision("cancel", beOk, beCancel);