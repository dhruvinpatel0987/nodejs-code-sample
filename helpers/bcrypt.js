const bcrypt = require('bcrypt')
const bcryptServiceObj = {};

//Function to encrypt the password
bcryptServiceObj.generatEncryptedPassword = (password) => {
    try {
        return bcrypt.hash(password, Number(process.env.SALT_ROUNDS))
    } catch (error) {
        console.log("Failed to generate the encrypted password", error.message)
        throw error;
    }
}

//Function to validate the password
bcryptServiceObj.validatePassword = (password, encryptedPassword) => {
    try {
        return bcrypt.compareSync(password, encryptedPassword)
    } catch (error) {
        console.log("Failed to generate the encrypted password", error.message)
        throw error;
    }
}

module.exports = bcryptServiceObj;


