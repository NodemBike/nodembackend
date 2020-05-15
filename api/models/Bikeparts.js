
module.exports = (sequelize, Sequelize) => {

    const Bikeparts = sequelize.define("bikeparts",
        {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIV4,
                primaryKey: true
            },
            bike_uuid: {
                type: Sequelize.UUID,
            },

           
        }, {
        paranoid: true,
        underscored: true

    });

    return Bikeparts;

}
