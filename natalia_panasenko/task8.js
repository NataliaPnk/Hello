//Задача. Вывести юзеров из списка стран `China, USA, France` в порядке убывания баланса, используя метод aggregate()

//проекция: имя, баланс


db.users.aggregate([
  { $match: { country: { $in: ['China', 'USA', 'France'] } } },
  { $sort: { balance: -1 } },
  { $project: { fullname: 1, balance: 1, _id: 0 } }
])