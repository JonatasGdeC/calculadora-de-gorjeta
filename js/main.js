$(document).ready(function(){
    const inputValor = $('#bill');
    const inputPessoas = $('#number-people');
    const inputCustom = $('#select-tip');
    const btnPorcentagem = $(".buttons button")
    const btnReset = $('#btn-reset');
    const resultadoGorjetaPorPessoa = $('#gorjeta-por-pessoa')
    const resultadoGorjetaTotal = $('#gorjeta-total')

    inputCustom.mask('00')

    function resetErrorInputs(){
        $('#select-tip').css({border: 'none'});
        $('#mensagem-error-bill').css({display:'none'})
        $('#input-bill').css({border: 'none'})
        $('#mensagem-error-people').css({display:'none'})
        $('#input-people').css({border: 'none'})
    }

    function resultado(){
        resultadoGorjetaPorPessoa.html((inputValor.val()*(inputCustom.val()||btnPorcentagem.val())/100)/inputPessoas.val())
        resultadoGorjetaTotal.html((inputValor.val()*(inputCustom.val()||btnPorcentagem.val())/100))
    }

    function semResultados(){
        resultadoGorjetaPorPessoa.html('0.00');
        resultadoGorjetaTotal.html('0.00')
    }

    btnPorcentagem.click(function(e) {
        $(".buttons button").css({color:"#fff", backgroundColor: "#00474B"});
        let botaoSelecionado = $(this).css({color:"#00474B", backgroundColor: "#26C2AE"});
        btnPorcentagem.val(botaoSelecionado.val())
        resetErrorInputs()
        inputCustom.val('')
        inputCustom.click(function(){
            $(".buttons button").css({color:"#fff", backgroundColor: "#00474B"});
        })
    });


    inputCustom.keyup(function inputCustomPreenchido(e){
        if(e.target.value == 0){
            $('#select-tip').css({border: '2px solid #E17457'})
            semResultados()
            return false
        } else{
            resultado()
            resetErrorInputs()
            return true
        }
    })

    inputValor.keyup(function inputValorPreenchido(e){
        if(e.target.value <= 0){
            $('#mensagem-error-bill').css({display:'block'});
            $('#input-bill').css({border: '2px solid #E17457'});
        } if(inputPessoas.val()==''|| inputValor.val() <= 0 ){
            semResultados()
        } else{
            resultado()
            resetErrorInputs()
        }
    })

    inputPessoas.keyup(function inputPessoasPreenchido(e){
        if(e.target.value <= 0){
            $('#mensagem-error-people').css({display:'block'})
            $('#input-people').css({border: '2px solid #E17457'})
        } if(inputValor.val()=='' || inputPessoas.val() <= 0){
            semResultados()
        }else{
            resultado()
            resetErrorInputs()
        }
    })
    

    btnReset.click(function(){
        inputValor.val('')
        inputPessoas.val('')
        inputCustom.val('')
        btnPorcentagem.val()
        
        $(".buttons button").css({color:"#fff", backgroundColor: "#00474B"});

        resetErrorInputs()

        resultadoGorjetaPorPessoa.html('0.00')
        resultadoGorjetaTotal.html('0.00')
    })
})

