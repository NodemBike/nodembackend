module.exports = (sequelize, Sequelize) =>{

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
                    model: Models,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            type_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: Types,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            warranty_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: Warranties,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            state_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: States,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            parts_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: Bikeparts,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
        });

        return Bikes;
}