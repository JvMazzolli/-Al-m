document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o comportamento padrão do formulário
    console.log("Formulário submetido");

    let crm = document.getElementById('crm').value;
    let senha = document.getElementById('senha').value;
    
    console.log("CRM: " + crm);
    console.log("Senha: " + senha);

    localStorage.setItem('crm', crm);
    localStorage.setItem('senha', senha);
    
    alert('Logado Com Sucesso!');
    
    window.location.href = 'materias.html';
    console.log("Redirecionando para materias.html");
});
