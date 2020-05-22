
module.exports = (sequelize, Sequelize) => {

    const RWheels = sequelize.define("rwheels",
        {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false,

            },
            date_of_production: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            image: {
                type: Sequelize.STRING,
            },
        }, {
        paranoid: true,
        underscored: true

    });
    RWheels.associate = models => {
        RWheels.belongsTo(models.Providers,
            {
                foreignKey: { 
                    allowNull: false }
            });
        }
    return RWheels;

}
