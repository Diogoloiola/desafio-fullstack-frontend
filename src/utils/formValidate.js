export default class FormValidate {
    constructor({ first_name, last_name, gender, phone, nationality, street, email }) {
        this.firstName = first_name
        this.lastName = last_name
        this.gender = gender
        this.phone = phone
        this.nationality = nationality
        this.street = street
        this.email = email
    }

    validate() {
        const resultFirstName = this.validateFirstName()
        const resultLastName = this.validateLastName()
        const resultGender = this.validateGender()
        const resultPhone = this.validatePhone()
        const resultNationality = this.validateNationality()
        const resultStreet = this.validateStreet()
        const resultEmail = this.validateEmail()

        if (
            resultFirstName.status &&
            resultLastName.status &&
            resultGender.status &&
            resultPhone.status &&
            resultNationality.status &&
            resultStreet.status && 
            resultEmail.status) {
            return true
        } else {
            let errors = []
            errors.push(resultFirstName.body)
            errors.push(resultLastName.body)
            errors.push(resultGender.body)
            errors.push(resultPhone.body)
            errors.push(resultNationality.body)
            errors.push(resultStreet.body)
            errors.push(resultEmail.body)
            return errors.filter(error => error.length)
        }
    }
    /**
     * Função que valida o primeiro nome do usuário
     * @returns {object}
     */
    validateFirstName() {
        if (this.firstName.length >= 2) {
            return {
                status: true,
                body: ''
            }
        }
        return {
            status: false,
            body: 'The first name must have at least 2 letters'
        }
    }
    /**
     * Função que valida o último do usuário
     * @returns {object}
     */
    validateLastName() {
        if (this.firstName.length >= 2) {
            return {
                status: true,
                body: ''
            }
        }
        return {
            status: false,
            body: 'Last name must be at least 2 letters'
        }
    }
    /**
     * Função que valida o gênero
     * @returns {object}
     */
    validateGender() {
        if (this.gender) {
            return {
                status: true,
                body: ''
            }
        }
        return {
            status: false,
            body: 'Correctly Fill in the gender field'
        }
    }
    /**
     * Função que valida o número de telefone
     * @returns {object}
     */
    validatePhone() {
        if (this.phone.length >= 4) {
            return {
                status: true,
                body: ''
            }
        }
        return {
            status: false,
            body: 'Correctly fill in the phone field'
        }
    }
    /**
     * Função que valida a nacionalidade
     * @returns {object}
     */
    validateNationality() {
        if (this.nationality) {
            return {
                status: true,
                body: ''
            }
        }
        return {
            status: false,
            body: 'Correctly fill in the nationality field'
        }
    }
    /**
     * Função que valida o endereço
     * @returns {object}
     */
    validateStreet() {
        if (this.nationality) {
            return {
                status: true,
                body: ''
            }
        }
        return {
            status: false,
            body: 'Correctly fill in the street field'
        }
    }
    /**
     * Função que valida o email
     * @returns {object}
     */
    validateEmail() {
        if (this.email.length >= 7) {
            return {
                status: true,
                body: ''
            }
        }
        return {
            status: false,
            body: 'Correctly fill in the email field'
        }
    }
}