module.exports = (sequelize, Sequelize) => {

    const Bikes = sequelize.define("bikes",
        {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
            },
            image: {
                type: Sequelize.STRING,
            },
        }, {
        paranoid: true,
        underscored: true
    });

    Bikes.associate = models => {
        Bikes.belongsTo(models.Users,
            {
                foreignKey: { allowNull: false }
            });
    };
    Bikes.associate = models => {
        Bikes.hasOne(models.Bikeparts,
            {
                onDelete: "cascade"
            });
    };

    return Bikes;
}