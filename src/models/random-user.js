export default class RandomUserApi {
    constructor(axios, url) {
        this.axios = axios
        this.page = 0
        this.limit = 50
        this.url = url
    }
    /**
     * Função que busca todos os registros da api
     * @returns {object}
     */

    async getAll() {
        let finalUrl = `${this.url}/users?page=${this.page}&per_page=${this.limit}`
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
     * função que pega os próximos registros
     * @returns {object}
     */

    async next() {
        this.limit++
        return await this.getAll()
    }

    /**
     * Função que retorna os elementos anteriores
     * @returns {object}
     */
    async previous() {
        if (this.limit - 1 >= 0) {
            this.limit--
            return await this.getAll()
        }
    }
}