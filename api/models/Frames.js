
module.exports = (sequelize, Sequelize) => {

    const Frames = sequelize.define("frames",
        {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
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
        }, {
        paranoid: true,
        underscored: true

    });
    Frames.associate = models => {
        Frames.belongsTo(models.Providers,
            {
                foreignKey: { 
                    allowNull: false }
            });
        }
    return Frames;

}