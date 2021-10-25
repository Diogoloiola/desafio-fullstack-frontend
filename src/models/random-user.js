export default class RandomUserApi {
    constructor(axios, url, token) {
        this.axios = axios
        this.page = 0
        this.limit = 50
        this.url = url
        this.axios.defaults.headers.common['Authorization'] = token
    }
    /**
     * Função que busca todos os registros da api
     * @returns {object}
     */

    async getAll() {
        let finalUrl = `${this.url}/users?page=${this.page}&per_page=${this.limit}`
        console.log(finalUrl)
        try {
            const result = await this.axios.get(finalUrl)
            return {
                status: true,
                body: result.data['results']
            }
        } catch (error) {
            return {
                status: false,
                body: error
            }
        }
    }

    /**
     * função que faz a paginação dos resultados
     * @returns {object}
     */

    async pagination(page) {
        this.page = page
        return await this.getAll()
    }
    /**
     * Função que atualiza os dados do usuário
     * @param {*} data 
     * @param {*} id 
     * @returns 
     */
    async updateUser(data, id) {
        try {
            const finalUrl = `${this.url}/users/${id}`
            const result = await this.axios.patch(finalUrl, data)
            return {
                status: true,
                body: result.data
            }
        } catch (error) {
            return {
                status: false,
                body: error
            }
        }
    }
    /**
     * Função que exclui o usuário da base de dados
     * @param {*} id 
     * @returns 
     */
    async deleteUser(id) {
        try {
            const finalUrl = `${this.url}/users/${id}`
            const result = await this.axios.delete(finalUrl)
            return {
                status: result.status,
                body: result.data.message
            }

        } catch (error) {
            return {
                status: false,
                body: error
            }
        }
    }
}