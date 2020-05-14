
module.exports = (sequelize, Sequelize, db) => {

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
            id_doc: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            phone: {
                type: Sequelize.STRING,
            },
            is_verified: {
                type: Sequelize.BOOLEAN,
            },
            bike_uuid: {
                type: Sequelize.UUID,
                references: {
                    model: db.Bikes,
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            }
        }, {
        paranoid: true,
        underscored: true

    });

    return Users;
}