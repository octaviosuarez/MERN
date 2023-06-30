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

  async delete(id) {
    try {
      const response = await fetch(`http://localhost:3900/api/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.statusText;
    } catch (error) {
      throw error;
    }
  }

  async post(data) {
    try {
      const response = await fetch("http://localhost:3900/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.log("errir", error);
    }
  }

  async update(id, data) {
    try {
      const response = await fetch(`http://localhost:3900/api/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  }

  // Otros métodos de la API
}

export default new API();
