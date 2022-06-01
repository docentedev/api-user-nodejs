const selectAllUser = async (client) => {
    try {
        const result = await client.query('SELECT * FROM users');
        return result.rows;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports = selectAllUser;