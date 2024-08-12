//В рамках БД audiohosting_150124 напишите следующие запросы:

//1. Заблокировать всех не заблокированных юзеров не из China и уменьшить их баланс на 25 EUR


db.users.updateMany(
  {
      is_blocked: { $ne: true },
      country: { $ne: 'China' }
  },
  {
      $set: {
          is_blocked: { $ne: false }

      },
      $inc: { balance: -25 }
  }
)


//2.Вывести имена и баланс заблокированных юзеров из China и из France, если их баланс находится в диапазоне значений от 10 до 1000 (вкл.)

db.users.find(
  {
      is_blocked: { $ne: false },
      country: { $in: ['China', 'France'] },
      balance: { $lte: 10, $gte: 1000 }
  },
  {
      fullname: 1, balance: 1, _id: 0
  }
)



//Решения данных задач оформить одним запросом на слияние в рамках репозитория Hello