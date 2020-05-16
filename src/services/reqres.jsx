class Reqres {
  BaseUrl = 'https://reqres.in/api/';

  async registration(data) {
      const res = await fetch(this.BaseUrl + 'register', {
          method: 'post',
          body: JSON.stringify(data)
      });

      return await res.json();
  }

  async login(data) {
      const res = await fetch(this.BaseUrl + 'login', {
          method: 'post',
          body: JSON.stringify(data)
      });

      return await res.json();
  }
}


export default Reqres;