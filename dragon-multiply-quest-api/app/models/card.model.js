module.exports = (sequelize, Sequelize) => {
    const Card = sequelize.define("card", {
        userId: {
            type: Sequelize.TINYINT
        },
        type: {
            type: Sequelize.ENUM('multiply', 'divide')
        },
        value1: {
            type: Sequelize.TINYINT
        },
        value2: {
            type: Sequelize.TINYINT
        },
        repeatPriority: {
            type: Sequelize.TINYINT
        },
        points: {
            type: Sequelize.STRING
        }
    });

    return Card;
};