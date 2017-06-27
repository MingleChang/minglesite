module.exports = function(sequelize, DataTypes) {
  var PushToken = sequelize.define("PushToken",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    token: {
    	type: DataTypes.STRING,
    	field: 'token',
    	comment: '推送的唯一标识'
    },
    userId: {
      	type: DataTypes.UUID,
      	field: 'user_id',
      	comment: '用户ID'
    },
    device: {
    	type: DataTypes.ENUM,
      	field: 'device',
      	values: ['iOS', 'Android', 'Web'],
      	comment: '推送的环境'
    },
    mode: {
    	type: DataTypes.ENUM,
      	field: 'push_mode',
      	values: ['DEBUG', 'RELEASE'],
      	comment: '推送的环境'
    },
  }, 
  {
    freezeTableName: true,
    tableName: "mc_push_token",
    timestamps: true,
    createdAt: 'ctime',
    updatedAt: 'utime',
    deletedAt: 'dtime',
    paranoid: true,
    classMethods: {
      
    }
  });

  return PushToken;
}; 