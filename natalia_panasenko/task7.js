//Задача. Увеличить баланс всех не заблокированных юзеров не из China с положительным балансом на 15.5%


db.users.updateMany(
  {
      is_blocked: { $ne: true },
      country: { $ne: 'China' },
      balance: { $gte: 0 }
  },
  {
      $mul: { balance: 1.155 }
  }
)