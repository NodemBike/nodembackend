
module.exports = (sequelize, Sequelize) => {
    
    const Users = sequelize.define("user",
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
            last_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            user_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            id: {
                type: Sequelize.INT,
                allowNull: false,
            },
            phone: {
                type: Sequelize.STRING,
            },
            is_verified: {
                type: Sequelize.BOOL,
            },
            bike_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: Bikes,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            }
        });

    return Users;
}