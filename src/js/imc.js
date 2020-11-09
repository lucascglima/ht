function calculateBmi() {
    var weight = document.bmiForm.weight.value
    var height = document.bmiForm.height.value
    if(weight > 0 && height > 0){	
    var finalBmi = weight/(height/100*height/100)
    document.bmiForm.bmi.value = finalBmi
    if(finalBmi < 18.5){
    document.bmiForm.meaning.value = "Peso Baixo"
    }
    if(finalBmi > 18.5 && finalBmi < 25){
    document.bmiForm.meaning.value = "Peso Normal"
    }
    if(finalBmi > 25 && finalBmi < 29.9){
    document.bmiForm.meaning.value = "Sobre Peso"
    }
    if(finalBmi > 29.9 && finalBmi < 34.9){
        document.bmiForm.meaning.value = "Obesidade Grau I"
        }
    if(finalBmi > 34.9 && finalBmi < 39.9){
        document.bmiForm.meaning.value = "Obesidade Grau II"
        }
    if(finalBmi > 39.9){
        document.bmiForm.meaning.value = "Obesidade Mórbida"
        }
    }
    else{
    alert("Preencha os dados corretamente")
    }
    }