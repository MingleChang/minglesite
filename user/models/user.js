module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", 
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING,
      unique: true,
      field: 'user_name',
      comment: '用户名'
    },
    password: {
      type: DataTypes.STRING,
      comment: '密码',
      get() {
        return '******'
      }
    },
    avatar: {
      type: DataTypes.STRING,
      comment: '头像'
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['MALE', 'FEMALE'],
      comment: '性别'
    },
    nickName: {
      type: DataTypes.STRING,
      field: 'nick_name',
      comment: '昵称'
    },
    realName: {
      type: DataTypes.STRING,
      field: 'real_name',
      comment: '真实姓名'
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      comment: '手机号码'
    },
    idNumber: {
      type: DataTypes.STRING,
      field: 'id_number',
      comment: '身份证号码'
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      comment: '邮箱',
      validate: {
        isEmail: true
      }
    },
    comment: {
      type: DataTypes.STRING,
      comment: '个人介绍'
    },
    birthday: {
      type: DataTypes.DATE,
      comment: '出生日期',
      validate: {
        isDate: true
      }
    },
    registerIp: {
      type: DataTypes.STRING,
      comment: '注册时的ip',
      validate: {
        isIP: true
      }
    },
    registerDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      comment: '注册时间',
      validate: {
        isDate: true
      }
    },
    registerSource: {
      type: DataTypes.ENUM,
      values: ['PC', 'iOS', 'Android'],
      comment: '注册源(PC,iOS,Android)'
    },
    registerMethod: {
      type: DataTypes.ENUM,
      values: ['USERNAME', 'PHONE', 'EMAIL'],
      comment: '注册方式(USERNAME:用户名注册，PHONE:手机号注册，EMAIL:邮箱注册)'
    },
    status: {
      type: DataTypes.ENUM,
      values: ['NORMAL', 'UNACTIVE', 'LOCKED', 'FREEZE', 'DELETED'],
      comment: '用户状态(NORMAL:正常，UNACTIVE:未激活，LOCKED:锁定，FREEZE:冻结，DELETED:删除)'
    }
  }, 
  {
    freezeTableName: true,
    tableName: "mc_users",
    timestamps: true,
    createdAt: 'ctime',
    updatedAt: 'utime',
    deletedAt: 'dtime',
    paranoid: true,
    classMethods: {
      
    }
  });

  return User;
};