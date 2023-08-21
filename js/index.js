function enviar(){
        let datos = document.getElementById("inputText").value;
        localStorage.setItem('datos', datos);
        console.log(datos);
    }

    