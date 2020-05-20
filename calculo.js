var pacienteNum = 1;
for (pacienteNum = 1 ; pacienteNum <= 5 ; pacienteNum++) {
    if (pacienteNum == 1) {
        var paciente = document.querySelector("#paciente1");
    }
    else if (pacienteNum == 2) {
        var paciente = document.querySelector("#paciente2");
    }
    else if (pacienteNum == 3) {
        var paciente = document.querySelector("#paciente3");
    }
    else if (pacienteNum == 4) {
        var paciente = document.querySelector("#paciente4");
    }
    else if (pacienteNum == 5) {
        var paciente = document.querySelector("#paciente5");
    }
    var tdPeso = paciente.querySelector(".peso");
    var peso = tdPeso.textContent;
    console.log(peso);

    var tdAltura = paciente.querySelector(".altura");
    var altura = tdAltura.textContent;
    console.log(altura);

    var tdImc = paciente.querySelector(".imc");
    var imc = tdImc.textContent;
    console.log(imc);

    var imcFinal = peso / (altura * altura);
    console.log(imcFinal);

    paciente.querySelector(".imc").textContent = imcFinal.toFixed(2);
}
