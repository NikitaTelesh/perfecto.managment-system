export const usersProfiles = [
  {
    userId: 1,
    direction: 'JavaScript',
    fullName: 'Nikita Telesh',
    email: 'nikita.telesh@mail.com',
    sex: 'male',
    education: 'MGPK',
    birthDate: '07.08.1998',
    universityAverageScore: 8.9,
    mathScore: 9,
    adress: 'Minsk',
    mobilePhone: '+375(33)315-27-98',
    skype: 'nikita.telesh',
    startDate: '01.02.2021',
  },
  {
    userId: 2,
    direction: 'Java',
    fullName: 'Alexander Rusak',
    email: 'alexander.rusak@mail.com',
    sex: 'male',
    education: 'BGUIR',
    birthDate: '01.01.1994',
    universityAverageScore: 9.2,
    mathScore: 9,
    adress: 'Minsk',
    mobilePhone: '+375(33)355-88-98',
    skype: 'alexander.rusak',
    startDate: '01.11.2020',
  },
  {
    userId: 3,
    direction: '.Net',
    fullName: 'Alexander Razumniy',
    email: 'alexander.razumniy@mail.com',
    sex: 'male',
    education: 'BNTU',
    birthDate: '01.06.1996',
    universityAverageScore: 9.2,
    mathScore: 9,
    adress: 'Minsk',
    mobilePhone: '+375(33)455-76-33',
    skype: 'alexander.razumniy',
    startDate: '01.09.2020',
  },
  {
    userId: 4,
    direction: 'PHP',
    fullName: 'Iryna Kirienko',
    email: 'iryna.kirienko@mail.com',
    sex: 'female',
    education: 'BGU Saharova',
    birthDate: '19.03.2000',
    universityAverageScore: 9.2,
    mathScore: 9,
    adress: 'Minsk',
    mobilePhone: '+375(33)656-34-56',
    skype: 'iryna.kirienko',
    startDate: '15.06.2021',
  },
  {
    userId: 5,
    direction: '.Net',
    fullName: 'Tanya Kirienko',
    email: 'tanya.kirienko@mail.com',
    sex: 'female',
    education: 'BGU',
    birthDate: '15.06.2004',
    universityAverageScore: 9.2,
    mathScore: 9,
    adress: 'Minsk',
    mobilePhone: '+375(33)768-56-76',
    skype: 'tanya.kirienko',
    startDate: '15.05.2021',
  },
];

export const tasks = [
  {
    taskId: 1,
    taskName: 'Create database project',
    description: 'Create database project in Firebase',
    startDate: '01.11.2020',
    deadlineDate: '07.11.2020',
  },
  {
    taskId: 2,
    taskName: 'Create repositories',
    description: 'Create tasks, members, progress repositories using unit of work',
    startDate: '07.11.2020',
    deadlineDate: '14.11.2020',
  },
  {
    taskId: 3,
    taskName: 'Create unit tests for repositories',
    description: '',
    startDate: '18.11.2020',
    deadlineDate: '25.11.2020',
  },
  {
    taskId: 4,
    taskName: 'Create services',
    description: '',
    startDate: '18.11.2020',
    deadlineDate: '30.11.2020',
  },
];

export const usersTasks = [
  {
    userId: 1,
    taskId: 1,
    taskName: 'Nikita first task',
    description: 'Create database project in Firebase',
    startDate: '01.11.2020',
    deadlineDate: '07.11.2020',
    state: 'Active',
  },
  {
    userId: 1,
    taskId: 2,
    taskName: 'Nikita second task',
    description: 'Create tasks, members, progress repositories using unit of work',
    startDate: '07.11.2020',
    deadlineDate: '14.11.2020',
    state: 'Active',
  },
  {
    userId: 2,
    taskId: 3,
    taskName: 'Alexander Rusak third task',
    description: '',
    startDate: '18.11.2020',
    deadlineDate: '25.11.2020',
    state: 'Success',
  },
  {
    userId: 2,
    taskId: 4,
    taskName: 'Alexander Rusak fourth task',
    description: '',
    startDate: '18.11.2020',
    deadlineDate: '30.11.2020',
    state: 'Fail',
  },
];

export const usersSubtasks = [
  {
    userId: 1,
    taskId: 1,
    taskTrackId: 1,
    userName: 'Nikita Telesh',
    taskName: 'task name',
    trackNote: 'trackNote',
    trackDate: '22.06.2021',
  },
];