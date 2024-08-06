const aba_cliente = document.createElement('div');
aba_cliente.classList = ('aba_cliente');

const puxa_div = document.querySelector('.clientes').parentNode;
const container = document.querySelector('.container');
var puxa_filho = document.querySelector('.clientes');

const aba_cadastro = document.createElement('div');
aba_cadastro.classList = ('cadastro');

const exclui_ac = document.createElement('div');
exclui_ac.classList = ('exclui_ac');

const titulo_cadastro = document.createElement('div');
titulo_cadastro.classList = ('titulo_cadastro');
titulo_cadastro.innerText = "Novo Cliente";

const campos_cadastro = document.createElement('div');
campos_cadastro.classList = ('campos_cadastro');

const formulario = document.createElement('form');
formulario.method = ('post')
formulario.name = ('cadastro_clientes')

const criar_nome = document.createElement('input');
criar_nome.type = ('text');
criar_nome.placeholder = ('Nome')
criar_nome.id = ('criar_nome');
criar_nome.name = ('criar_nome');

const criar_cel = document.createElement('input');
criar_cel.type = ('tel');
criar_cel.placeholder = ('Cel')
criar_cel.id = ('criar_cel');
criar_cel.name = ('criar_cel');

const criar_data = document.createElement('input');
criar_data.type = ('date');
criar_data.id = ('criar_data');
criar_data.name = ('criar_data');

const criar_tipoatend = document.createElement('select');
criar_tipoatend.id = ('criar_atendimento');
criar_tipoatend.name = ('sw_atend')

const tipo_atenda = document.createElement('option');
tipo_atenda.value = "Avulso";
tipo_atenda.innerText = "Avulso";

const tipo_atendb = document.createElement('option');
tipo_atendb.value = "Plano";
tipo_atendb.innerText = "Plano";

const envia_form = document.createElement('input');
envia_form.type = ('submit');
envia_form.value = ('Cadastrar');

const reseta_form = document.createElement('input');
reseta_form.type = ('reset');
reseta_form.value = ('Reiniciar');

const footer_cadastro = document.createElement('div');
footer_cadastro.classList = ('footer_cadastro');





var button_cria = document.getElementById('newclient');
button_cria.addEventListener('click', function(){
    puxa_div.insertBefore(aba_cliente, puxa_filho)+
    aba_cliente.appendChild(exclui_ac) +
    aba_cliente.appendChild(aba_cadastro) +
    aba_cadastro.appendChild(titulo_cadastro) +
    aba_cadastro.appendChild(campos_cadastro) +
    campos_cadastro.appendChild(formulario) + 
    formulario.appendChild(criar_nome) +
    formulario.appendChild(criar_cel) +
    formulario.appendChild(criar_data) +
    formulario.appendChild(criar_tipoatend) +
    criar_tipoatend.appendChild(tipo_atenda) +
    criar_tipoatend.appendChild(tipo_atendb) +
    formulario.appendChild(envia_form) +
    formulario.appendChild(reseta_form) +
    aba_cadastro.appendChild(footer_cadastro)
    
    setTimeout(() => {
            
        exclui_ac.addEventListener("click", function(){
        puxa_div.removeChild(aba_cliente)
    
        }, 1)});

})
