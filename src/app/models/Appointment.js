import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
    static init(sequelize) {
        super.init(
            {
                date: Sequelize.DATE,
                canceled_at: Sequelize.DATE,
            },
            {
                sequelize,
            }
        );

            return this;
    }


    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        console.log(models.User)
        this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
    }
}

export default Appointment;
