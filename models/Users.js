
module.exports = function (sequelize, DataTypes) {
    let Users = sequelize.define('users', {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true
            },
            full_name: {
                type: DataTypes.STRING
            },
            company_name: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            pw_hash: {
                type: DataTypes.STRING
            },
            role: {
                type: DataTypes.STRING
            },
            aws_id_tok: {
                type: DataTypes.TEXT
            },
            aws_acc_tok: {
                type: DataTypes.TEXT
            },
            relationship_id: {
                type: DataTypes.TEXT
            },
            stripe_id: {
                type: DataTypes.TEXT
            },
            date_joined: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        }
    );
    return Users;
};
