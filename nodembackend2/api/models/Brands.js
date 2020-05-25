module.exports = (sequelize, Sequelize) => {

    const Brands = sequelize.define("brands",
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
    Brands.associate = models => {
        Brands.hasMany(models.Models,
            {
                foreignKey: {
                    allowNull: false
                }
            });
    }
    return Brands;
}