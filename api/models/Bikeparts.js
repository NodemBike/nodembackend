
module.exports = (sequelize, Sequelize) => {

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
                    model: Frames,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            batter_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: Batteries,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            motor_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: Motors,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            fork_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: Forks,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            fwheel_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: FWheels,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            rwheel_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: RWheels,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
        });

    return Bikeparts;

}
