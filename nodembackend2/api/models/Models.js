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
        Models.belongsTo(models.Brands,
            {
                foreignKey: { 
                    allowNull: false }
            });
        }
    return Models;
}
