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
                unique: true
            },
        }, {
    });
    States.associate = models => {
        States.hasMany(models.Frames);
        States.hasMany(models.Forks);
        States.hasMany(models.FWheels);
        States.hasMany(models.Motors);
        States.hasMany(models.RWheels);
        States.hasMany(models.Batteries);
        States.hasMany(models.Bikes);
    }

    return States;
}