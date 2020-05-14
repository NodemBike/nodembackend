module.exports = (sequelize, Sequelize, Providers) => {

    const FWheels = sequelize.define("fwheels",
        {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIV4,
                primaryKey: true
            },
            price: {
                type: Sequelize.INTEGER,
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
        }, {
        paranoid: true,
        underscored: true

    });

    return FWheels;
}