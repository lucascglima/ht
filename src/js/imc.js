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



    // Inserir Linha na table
    function myFunction() {
        var peso = document.getElementById("myText").value;
        var altura = document.getElementById("myText2").value
        var imc = document.getElementById("myText3").value;
        var situacao = document.getElementById("myText4").value;
       
    
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell4 = row.insertCell(situacao);
        var cell3 = row.insertCell(imc);
        var cell2 = row.insertCell(altura);
        var cell1 = row.insertCell(peso);
        
        cell1.innerHTML = peso;
        cell2.innerHTML = altura;
        cell3.innerHTML = imc;
        cell4.innerHTML = situacao;
        
        
      }