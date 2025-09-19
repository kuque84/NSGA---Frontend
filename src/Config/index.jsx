async function getAvailableApiUrl() {
  const urls = ["http://nsga.ipem168.local:3000", "http://localhost:3000"];

  for (const url of urls) {
    try {
      const response = await fetch(`${url}/health`, {
        method: "GET",
        timeout: 2000,
      });
      if (response.ok) {
        return url;
      }
    } catch (error) {
      // No disponible, intenta con la siguiente
    }
  }

  throw new Error("No se pudo conectar a ninguna API");
}

const settings = {
  API_URL: await getAvailableApiUrl(),
};

export default settings;
