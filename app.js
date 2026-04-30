document.getElementById("title").innerText = config.empresa;
document.getElementById("description").setAttribute("content", config.descricao);

document.getElementById("hero").innerHTML = `
  <h1>${config.titulo}</h1>
  <p>${config.subtitulo}</p>
  <a class="btn" href="https://wa.me/${config.telefone}">WhatsApp</a>
`;

document.getElementById("problema").innerHTML = config.problema;
document.getElementById("prova").innerHTML = `<p>${config.prova}</p>`;

const servicos = document.getElementById("servicos");
config.servicos.forEach(s => {
  servicos.innerHTML += `
    <div class="card">
      <h3>${s.titulo}</h3>
      <p>${s.descricao}</p>
    </div>
  `;
});

const reviews = document.getElementById("reviews");
config.reviews.forEach(r => {
  reviews.innerHTML += `<div class="review">⭐ ${r}</div>`;
});

document.getElementById("mapa").src = config.mapa;

document.getElementById("ctaBtn").href = `https://wa.me/${config.telefone}`;
document.getElementById("whatsapp").href = `https://wa.me/${config.telefone}`;

document.getElementById("footer").innerHTML = `© ${config.empresa}`;