import SQ from 'sequelize';
import { sequelize } from '../db/database.js';
import * as constant from '../constant.js';
const DataTypes = SQ.DataTypes;

//TODO: Set foreign key(User, ParentInfo, EnrollTabInfo, Enroll, Lesson)

export const user = sequelize.define('User', {
  uid: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: DataTypes.ENUM(constant.USER_TYPE),
    allowNull: false,
  },
  deleted: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  phoneNumber: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  createdAt: {
    type: 'TIMESTAMP',
    defaultValue: SQ.Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
  updatedAt: {
    type: 'TIMESTAMP',
    defaultValue: SQ.Sequelize.literal(
      'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
    ),
    allowNull: false,
  },
});
export const studentInfo = sequelize.define('StudentInfo', {
  siid: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: DataTypes.ENUM(constant.STUDENT_TYPE),
    allowNull: false,
  },
  name: {
    type: DataTypes.CHAR(5),
    allowNull: false,
  },
  parentPhone: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  school: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  grade: {
    type: DataTypes.ENUM(constant.GRADE),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  addressDetail: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('M', 'W'),
  },
});

export const parentInfo = sequelize.define('ParentInfo', {
  piid: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.CHAR(5),
    allowNull: false,
  },
});

export const teacherInfo = sequelize.define('TeacherInfo', {
  tiid: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.CHAR(5),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  highschool: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  school: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  birth: {
    type: DataTypes.DATEONLY,
  },
  grade: {
    type: DataTypes.ENUM(constant.GRADE),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('M', 'W'),
  },
  major: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  career: {
    type: DataTypes.JSON, //다시보기
  },
  subject: {
    type: DataTypes.JSON(ENUM(constant.SUBJECT)), //다시보기
  },
  detailSubject: {
    type: DataTypes.JSON,
  },
  bank: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  bankAddress: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
});
export const adminInfo = sequelize.define('AdminInfo', {});
export const plan = sequelize.define('Plan', {});
export const studyCafe = sequelize.define('StudyCafe', {});
export const enrollGoInfo = sequelize.define('EnrollGoInfo', {});
export const enrollTabInfo = sequelize.define('EnrollTabInfo', {});
export const enroll = sequelize.define('Enroll', {});
export const lesson = sequelize.define('lesson', {});
