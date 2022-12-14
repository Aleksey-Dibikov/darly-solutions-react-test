module.exports = () => {
    const data = { users: [] };
    var casual = require('casual');
    for (let i = 0; i < 10; i++) {
        data.users.push({
            id: i,
            name: casual.name,
            phone: casual.phone,
            mail: casual.email,
            city: casual.city,
            ip: casual.ip,
            payCard: casual.card_data.number,
        })
    };
    return data;
};