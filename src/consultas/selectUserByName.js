const selectUserByName = async (name, client) => {
    const SQLQuery = {
        name: 'selectUserByName',
        text: 'SELECT * FROM users WHERE username = $1',
        values: [name],
    }
    try {
        const result = await client.query(SQLQuery);
        return result.rows[0];
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports = selectUserByName;