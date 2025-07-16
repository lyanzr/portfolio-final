function openTab(evt, sectionId) {
  const contents = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  const tabs = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }

  document.getElementById(sectionId).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("defaultOpen").click();
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = "https://formspree.io/f/xjkovlwl";

    try {
      const response = await fetch(action, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.innerHTML = "Mensagem enviada com sucesso!";
        form.reset();
      } else {
        status.innerHTML = "Erro ao enviar. Tente novamente.";
      }
    } catch (error) {
      status.innerHTML = "Erro de conexão. Tente mais tarde.";
    }
  });
});