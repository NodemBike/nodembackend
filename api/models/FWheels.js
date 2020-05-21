module.exports = (sequelize, Sequelize) => {

    const FWheels = sequelize.define("fwheels",
        {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIV4,
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
    FWheels.associate = models => {
        FWheels.belongsTo(models.Bikeparts,
            {
                foreignKey: { 
                    allowNull: false }
            });
        }
    return FWheels;
}