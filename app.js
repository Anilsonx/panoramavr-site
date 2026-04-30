document.getElementById("hero").innerHTML = `
  <h1>${config.titulo}</h1>
  <p>${config.subtitulo}</p>
  <a class="btn" href="https://wa.me/${config.telefone}">Quero mais clientes</a>
`;

document.getElementById("problema").innerHTML = config.problema;

const servicos = document.getElementById("servicos");
config.servicos.forEach(s => {
  servicos.innerHTML += `
    <div class="card">
      <h3>${s.titulo}</h3>
      <p>${s.descricao}</p>
    </div>
  `;
});

const depoimentos = document.getElementById("depoimentos");
config.depoimentos.forEach(d => {
  depoimentos.innerHTML += `<div class="review">⭐⭐⭐⭐⭐ ${d}</div>`;
});

document.getElementById("footer").innerHTML = `© ${config.empresa}`;

document.getElementById("whatsapp").href = `https://wa.me/${config.telefone}`;
document.getElementById("ctaBtn").href = `https://wa.me/${config.telefone}`;