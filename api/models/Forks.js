module.exports = (sequelize, Sequelize) => {

    const Forks = sequelize.define("forks",
        {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIV4,
                primaryKey: true
            },
            price: {
                type: Sequelize.INT,
                allowNull: false,

            },
            date_of_production: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            image: {
                type: Sequelize.STRING,
            },
            provider_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: Providers,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
        });

    return Forks;
}