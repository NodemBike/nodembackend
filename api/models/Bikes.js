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
        Bikes.hasOne(models.Warranties,
            {
                onDelete: "cascade",
                unique: true
            });
        Bikes.hasOne(models.Frames,
            {
                onDelete: "cascade",
                unique: true
            });
        Bikes.hasOne(models.Forks,
            {
                onDelete: "cascade",
                unique: true
            });
        Bikes.hasOne(models.Batteries,
            {
                onDelete: "cascade",
                unique: true
            });
        Bikes.hasOne(models.Motors,
            {
                onDelete: "cascade",
                unique: true
            });
        Bikes.hasOne(models.RWheels,
            {
                onDelete: "cascade",
                unique: true
            });
        Bikes.hasOne(models.FWheels,
            {
                onDelete: "cascade",
                unique: true
            });
            
    };


    return Bikes;
}