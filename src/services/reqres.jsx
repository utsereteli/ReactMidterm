class Reqres {
    BaseUrl = 'https://reqres.in/api/';

    requestHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    async registration(data) {
        const resp = await fetch(this.BaseUrl + 'register', {
            method: 'post',
            headers: this.requestHeaders,
            body: JSON.stringify(data)
        });

        return await resp.json();
    }


    async login(data) {
        const resp = await fetch(this.BaseUrl + 'login', {
            method: 'post',
            headers: this.requestHeaders,
            body: JSON.stringify(data)
        });

        return await resp.json();
    }

    async getUsers(page) {
        const resp = await fetch(`${this.BaseUrl+'users?page='+page}`);
        return await resp.json();
    }

    async createUser(data) {
        const resp = await fetch(this.BaseUrl + 'users', {
            method: 'post',
            headers: this.requestHeaders,
            body: JSON.stringify(data)
        });

        return await resp.json();
    }

    async updateUeser(data, id) {
        const resp = await fetch(this.BaseUrl + 'users/' + id, {
            method: 'put',
            headers: this.requestHeaders,
            body: JSON.stringify(data)
        });

        return await resp.json();
    }

    async deleteUser(id) {
        const resp = await fetch(this.BaseUrl + 'users/' + id, {
            method: 'delete',
            headers: this.requestHeaders,
        });

        // return await resp.json();
    }
}


export default Reqres;