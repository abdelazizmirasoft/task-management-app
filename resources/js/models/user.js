class User {

    constructor() {
        this.init()
    }

    init() {
        this.email = localStorage.getItem('userEmail')
        this.loggedIn = localStorage.getItem('userLoggedIn')
    }

    /**
     *
     * @param data object
     * @param data.email string
     * @param callback function
     */
    authenticated(data, callback) {
        localStorage.setItem('userEmail', data.user.email)
        localStorage.setItem('userLoggedIn', true)

        this.init()

        callback()
    }

    /**
     *
     * @return {boolean}
     */
    isLoggedIn() {
        return Boolean(this.loggedIn) === true
    }
    /**
     * Remove all user's data from local storage
     */
    destroy() {
        localStorage.removeItem('userEmail')
        localStorage.removeItem('userLoggedIn')
    }

    /**
     *
     * @param callback function
     */
    logout(callback) {
        this.destroy()
        
        callback()
    }
}

export default new User()