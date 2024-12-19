const submitButton = document.getElementById("submit-btn");
const errorContainer = document.getElementById("error-container");
const successContainer = document.getElementById("success-container");
const outputDiv = document.getElementById("output");


window.onload = () => {
    const container = document.getElementById("captcha-container");
    AwsWafCaptcha.renderCaptcha(container, {
        apiKey: "rpFv5laMXyVO+DkSGnm53mhOyLcilvIc9JaMYkmAwpmdfIrnGhugkhEUtLHTe8UYvAq/nQ9tWDXAtxw6cc543tSienTdFm3QlAXUSmTOpING+p9WIuQHmvwTJM2kIMoRqmFzpepFGYXKTMClSBYdQXxSrkWSVgzdD0taWoCzVQa2oUE8NRNfWQEochbpw4d6kYfMD1+tKGDBtV5QPt6XLVdUJIstiK02ohEL+djWPCMCSIApWz/ffyBmf5t1SRM5Z6LkDgnPDnu2wBCHJTAoHG10DF/HO0b5l85PtDXa6rqdohuxbIz5zur/p3Yp2FiXUApocRk0OOF9gD4MNOVtlUuwwdsaSgBPBwk6kn+H8tZi+Pjq0IRSUfAh1QqfWzFLgYftXtzbCpwY2rsYqrVZ6JSuUZGSaWZURjS2ctrxDYOi+TTTMV3KnNIfTvAu2ueV6+/KmcrBSXKHD/brUhAbN0R5D499FBySIKtfF5aJPBS76QtHu4UFgDaeabeKqUiUOnOSk8Vr7b1DN8UptGey4eZuHhQqYePudWX8so9dqX88QAK1boEw7Ffi/m1QEF1EsWAWfnWXAlsqPPRA7i3uHo8jgZS93r+e0y6Usizcxi977rdlN9NjMF/avrGywFBelLbalojWHDDjvJhgJGAhr1Jz6uabVzhAPhN5GtRWXzA=_0_1",
        onSuccess: () => {
            submitButton.disabled = false;
            errorContainer.textContent = '';
        },
        onError: (error) => {
            errorContainer.textContent = error.message;
        },
    });
};

const form = document.getElementById("sequence-form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const number = parseInt(document.getElementById('number').value);
    if (isNaN(number) || number < 1 || number > 1000) {
        errorContainer.textContent = "Veuillez entrer un nombre valide entre 1 et 1000.";
        return;
    }


    successContainer.textContent = "";
    outputDiv.textContent = "Début de la séquence...";
    form.style.display = 'none';

    for (let i = 1; i <= number; i++) {
        try {
            await fetch("https://api.prod.jcloudify.com/whoami");
        } catch (error) {

        }

        outputDiv.textContent += `\n${i}. Forbidden`;
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    outputDiv.textContent += "\nSéquence terminée.";
});
