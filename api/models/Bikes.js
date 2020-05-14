module.exports = (sequelize, Sequelize,db) =>{

    const Bikes = sequelize.define("bikes",
        {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIV4,
                primaryKey: true
            },
            image: {
                type: Sequelize.STRING,
            },
            model_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: db.Models,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            type_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: db.Types,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            warranty_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: db.Warranties,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            state_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: db.States,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            parts_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: db.Bikeparts,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
        }, {
        paranoid: true,
        underscored: true

    });

        return Bikes;
}