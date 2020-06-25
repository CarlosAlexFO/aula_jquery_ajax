
function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep  +"/json/";

    console.log(url);

    $.ajax({
        url:url,
        type: "GET",
        success: function(response){
            console.log(response);
            //$('#logradouro').html(response.logradouro);//outra forma de buscar as mesmas informaçoes
       
        }
    })
 


}