
module.exports = (sequelize, Sequelize) => {

    const Bikeparts = sequelize.define("bikeparts",
        {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
            }
            // bike_uuid: {
            //     type: Sequelize.UUID,
            // },
           
        }, {
        paranoid: true,
        underscored: true
        
    });

    Bikeparts.associate = models => {
        Bikeparts.belongsTo(models.Bikes,
            {
                foreignKey: { 
                    allowNull: false }
            });
    };
    Bikeparts.associate = models => {
        Bikeparts.hasOne(models.Forks,
            {
                onDelete: "cascade"
            });
    };
    Bikeparts.associate = models => {
        Bikeparts.hasOne(models.Frames,
            {
                onDelete: "cascade"
            });
    };
    Bikeparts.associate = models => {
        Bikeparts.hasOne(models.FWheels,
            {
                onDelete: "cascade"
            });
    };
    Bikeparts.associate = models => {
        Bikeparts.hasOne(models.BWheels,
            {
                onDelete: "cascade"
            });
    };
    Bikeparts.associate = models => {
        Bikeparts.hasOne(models.Motors,
            {
                onDelete: "cascade"
            });
    };
    Bikeparts.associate = models => {
        Bikeparts.hasOne(models.Batteries,
            {
                onDelete: "cascade"
            });
    };
    
    return Bikeparts;

}
