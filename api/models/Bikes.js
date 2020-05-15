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
            user_uuid: {
                type: Sequelize.UUID,
            },
        }, {
        paranoid: true,
        underscored: true

    });

        return Bikes;
}