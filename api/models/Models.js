module.exports = (sequelize, Sequelize, Brands) => {

    const Models = sequelize.define("models",
        {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIV4,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            brand_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: Brands,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            }
        }, {
        paranoid: true,
        underscored: true

    });
    return Models;
}
