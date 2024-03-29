export default {
  app: {
    title: 'Невероятный список дел',
    btnRegister: 'Зарегестрироваться',
    btnLogOut: 'Выйти',
    leftPanel: 'Невероятная левая панель',
    rightPanel: 'Невероятная правая панель',
    footer: 'Невероятный футер',
    copyright: '© 2019 Все права защищены',
    successfulRegister: 'Регистрация успешна',
    LogOutErrormessage: 'Не удалось выйти из аккаунта.'
  },
  errorIndicator: {
    message: 'Что-то сломалось.'
  },
  taskList : {
    btnEdit: 'Редактировать',
    btnDelete: 'Удалить',
    btnAdd: 'Добавить',
    btnCancel: 'Выйти',
    btnBack: 'Назад',
    tasksHeaderBefore: 'Задачи ',
    tasksHeaderAfter: 'а:',
    addPlaceholder: 'Введите описание задачи',
    noTasksHint: 'Создайте новую задачу, чтобы начать.'
  },
  loginScreen: {
    title: 'Введите ваше имя и пароль',
    namePlaceholder: 'Имя',
    passwordPlaceholder: 'Пароль',
    btnLogIn: 'Войти',
    messages: {
      nameEmpty: 'Поле имени не должно быть пустым.',
      passEmpty: 'Поле пароля не должно быть пустым.',
      nameError: 'Нет пользователя с таким именем.',
      passError: 'Пароль не верен.',
      detectedActiveSession: 'Этот пользователь уже находиться в системе.',
      brutForce: 'Слишком много попыток входа с неправильным паролем.',
      unknownError: 'Что-то пошло не так.'
    }
  },
  registerScreen: {
    title: 'Придумайте себе имя и пароль',
    namePlaceholder: 'Имя',
    btnCheck: 'Проверить',
    passwordPlaceholder: 'Пароль',
    confirmPlaceholder: 'Подтвердить пароль',
    btnRegister: 'Зарегестрироваться',
    messages: {
      nameIsFree: 'Это имя свободно.',
      nameNotAFree: 'Это имя занято.',
      unknownError: 'Что-то пошло не так.',
      noEqualPasswords: 'Пароли не совпадают.',
      nameEmpty: 'Поле имени не должно быть пустым.',
      passEmpty: 'Поле пароля не должно быть пустым.'
    }
  },
  usersList: {
    noUsersHint: 'В базе данных нет пользователей.',
    btnDelete: 'Удалить',
    btnTasks: 'Задачи',
    usersHeader: 'Пользователи:'
  }
}