const sheetURL = "https://api.sheetmonkey.io/form/b3wf9HgpUsseMrguTnc3hj";

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(sheetURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Enviado com sucesso!");
      e.target.reset();
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  } catch (error) {
    alert("Falha na conexão. Verifique sua internet.");
  }
});
