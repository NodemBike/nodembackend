module.exports = (sequelize, Sequelize) => {

    const Brands = sequelize.define("brands",
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
        });

    return Brands;
}