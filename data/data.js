import SQ from 'sequelize';
import { sequelize } from '../db/database.js';
import * as constant from '../constant.js';
const DataTypes = SQ.DataTypes;

//TODO: Set foreign key(User, ParentInfo, EnrollTabInfo, Enroll, Lesson)
//TODO: egid, etid foreign key 조건설정, student, teacher foreign key 확인!
//TODO: JSON ENUM(SET으로 설정해주는 것 같음)

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
studentInfo.hasMany(user, {
  foreignKey: 'siid',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
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
parentInfo.hasMany(user, {
  foreignKey: 'piid',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
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
    type: DataTypes.JSON, //다시보기
  },
  detailSubject: {
    type: DataTypes.JSON, //다시보기
  },
  bank: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  bankAddress: {
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
teacherInfo.hasMany(user, {
  foreignKey: 'tiid',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

export const adminInfo = sequelize.define('AdminInfo', {
  aiid: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.CHAR(5),
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
adminInfo.hasMany(user, {
  foreignKey: 'aiid',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

export const plan = sequelize.define('Plan', {
  pid: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  weeklyLesson: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lessonHour: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  month: {
    type: DataTypes.INTEGER,
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

export const studyCafe = sequelize.define(
  'StudyCafe',
  {
    scid: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
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
  },
  { freezeTableName: true }
);

export const enrollGoInfo = sequelize.define('EnrollGoInfo', {
  egid: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
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

studyCafe.hasMany(enrollGoInfo, {
  foreignKey: 'scid',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

export const enrollTabInfo = sequelize.define('EnrollTabInfo', {
  etid: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
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

export const enroll = sequelize.define('Enroll', {
  eid: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: DataTypes.ENUM(constant.LESSON_TYPE),
    allowNull: false,
  },
  isPreMatching: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
  },
  detailSubject: {
    type: DataTypes.JSON, //공부 필요!
  },
  currentScoreDescription: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  targetScoreDescription: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  favoriteStyle: {
    type: DataTypes.JSON,
  },
  description: {
    type: DataTypes.STRING(512),
    allowNull: false,
  },
  marketingSource: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  lessonSchedule: {
    type: DataTypes.JSON, //확인필요!
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

user.hasMany(enroll, {
  foreignKey: 'uid',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});
plan.hasMany(enroll, {
  foreignKey: 'eid',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});
enrollGoInfo.hasMany(enroll, {
  foreignKey: 'egid',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});
enrollTabInfo.hasMany(enroll, {
  foreignKey: 'etid',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

export const lesson = sequelize.define('Lesson', {
  lid: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: DataTypes.ENUM(constant.LESSON_TYPE),
    allowNull: false,
  },
  startSchedule: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  endSchedule: {
    type: DataTypes.DATEONLY,
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
enroll.hasMany(lesson, {
  foreignKey: 'eid',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

export const test = sequelize.define(
  'test',
  {
    test: {
      type: DataTypes.JSON,
    },
  },
  { timestamps: false }
);
