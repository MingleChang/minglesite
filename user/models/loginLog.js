module.exports = function(sequelize, DataTypes) {
  var LoginLog = sequelize.define("LoginLog", 
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      field: 'user_id',
      comment: '用户ID'
    },
    loginIp: {
      type: DataTypes.STRING,
      field: 'login_ip',
      comment: '登录时的ip',
      validate: {
        isIP: true
      }
    },
    loginDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'login_date',
      comment: '登录时间',
      validate: {
        isDate: true
      }
    },
    loginSource: {
      type: DataTypes.ENUM,
      field: 'login_source',
      values: ['Web', 'iOS', 'Android'],
      comment: '登录源'
    },
    loginMethod: {
      type: DataTypes.ENUM,
      field: 'login_method',
      values: ['USERNAME', 'PHONE', 'EMAIL', 'TOKEN'],
      comment: '登录方式(USERNAME:用户名登录，PHONE:手机号登录，EMAIL:邮箱登录，TOEKN:TOKEN登录)'
    }
  }, 
  {
    freezeTableName: true,
    tableName: "mc_login_log",
    timestamps: true,
    createdAt: 'ctime',
    updatedAt: 'utime',
    deletedAt: 'dtime',
    paranoid: true,
    classMethods: {
      
    }
  });

  return LoginLog;
};