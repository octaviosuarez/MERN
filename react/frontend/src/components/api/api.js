class API {
  async getArticulos() {
    try {
      const response = await fetch("http://localhost:3900/api/buscarArticulos");
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  // Otros métodos de la API
}

export default new API();
