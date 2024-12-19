const submitButton = document.getElementById("submit-btn");
const errorContainer = document.getElementById("error-container");
const successContainer = document.getElementById("success-container");
const outputDiv = document.getElementById("output");


window.onload = () => {
    const container = document.getElementById("captcha-container");
    AwsWafCaptcha.renderCaptcha(container, {
        apiKey: "ezQVewTgjQ5dTLDP8jrMY7MApQulb9SfXEBW8x2T3i2RunMzwhGFqvQHL4jOMPcng3fAt8hOEGWIenItatRl/yS40OHUxhQKXntD0rEtTveNwLlWjIu6P2lcfKF9DJDTp37KQ/ljN3XaYbXS80O6UTC4m7l1Tajeu184JBFq1cLclR39wJfaZjdnaOmM2w59tXGtO9pmgLcrXyglM0UvFQ2GGDLgfFcgcr/naSz1tTWqWpL2QNZ2nRVrqipoLyHJr/5aBo2bZjWu9Rzy+xeRhmv0JSiGVB517ZaTEMbwJx+4iiGS0s9GIL/LP3yx0LYKub4KeqD5g1PwqqF1Gr4to42tLpBXLQWt80/68WdPwRP5ncFHJJUnA/NgWc1WjXKQ0wf+ILMfGWViX3h1UNKJJ77jzYHkpX6q7RfHHpLGadWQL3iCQMDtKDn22K2rNxb1FU/Z//sEEV29JOMtIJ+tGWUtZrANHDnOOc8nKWop42TGsOky+/W8TPgvUghs/dwc8Nsx22XUbnBZI5djgS3sejwAx5TkdkuzHchTR1TL3flFwyCfgTgeMiKQ5aZ7/z2/uSzUDeQwxALx0WjMToHVVXRywcXWMgPMacnV7PQCZDuLSX0QN6rOmIm9Ytt0lrleVBDOgVATgYIG4gNB0m2f3BVXQaEHZId9JT5uni/wsrI=_0_1",
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