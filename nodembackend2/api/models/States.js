module.exports = (sequelize, Sequelize) => {

    const States = sequelize.define("states",
        {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        }, {
        paranoid: true,
        underscored: true

    });
    /*States.associate = models => {
        States.belongsTo(models.Bikes,
            {
                foreignKey: {
                    allowNull: false
                }
            });
    }*/
    return States;
}