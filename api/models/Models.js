module.exports = (sequelize, Sequelize) => {

    const Models = sequelize.define("models",
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
    Models.associate = models => {
        Models.hasMany(models.Bikes,
            {
                foreignKey: {
                    allowNull: false
                }
            });
    }
    
    
    return Models;
}
