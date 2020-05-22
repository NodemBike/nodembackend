
module.exports = (sequelize, Sequelize) => {

    const Batteries = sequelize.define("batteries",
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

        },
        {
            paranoid: true,
            underscored: true

        });
    Batteries.associate = models => {
        Batteries.belongsTo(models.Bikeparts,
            {
                foreignKey: {
                    allowNull: false
                }
            });
    }
    return Batteries;

}

