
module.exports = (sequelize, Sequelize,db) => {

    const Bikeparts = sequelize.define("bikeparts",
        {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIV4,
                primaryKey: true
            },
            frame_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: db.Frames,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            batter_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: db.Batteries,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            motor_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: db.Motors,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            fork_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: db.Forks,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            fwheel_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: db.FWheels,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            rwheel_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: db.RWheels,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
        }, {
        paranoid: true,
        underscored: true

    });

    return Bikeparts;

}
