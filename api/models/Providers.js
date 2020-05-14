module.exports = (sequelize, Sequelize) => {

    const Providers = sequelize.define("providers",
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

    return Providers;

}
