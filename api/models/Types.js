module.exports = (sequelize, Sequelize) => {

    const Types = sequelize.define("types",
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
        });

    return Types;

}