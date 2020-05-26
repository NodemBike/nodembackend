module.exports = (sequelize, Sequelize) => {

    const Providers = sequelize.define("providers",
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
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

    Providers.associate = models => {
        Providers.hasMany(models.Forks,
            {
                onDelete: "cascade"
            });
        /*Providers.belongsTo(models.Bikeparts,
            {
                foreignKey: {
                    allowNull: false
                }
            });*/
        Providers.hasMany(models.Frames,
            {
                onDelete: "cascade"
            });
        Providers.hasMany(models.FWheels,
            {
                onDelete: "cascade"
            });
        Providers.hasMany(models.Motors,
            {
                onDelete: "cascade"
            });
        Providers.hasMany(models.RWheels,
            {
                onDelete: "cascade"
            });
        Providers.hasMany(models.Batteries,
            {
                onDelete: "cascade"
            });
    }
    return Providers;

}
