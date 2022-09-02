
const books = [
    {
        name: `Сияние`,
        author: `Стивен Кинг`,
        genre: `Ужасы`,
        year: 1977
    },

    {
        name: `Зелёная миля`,
        author: `Стивен Кинг`,
        genre: `Магический реализм`,
        year: 1996
    },

    {
        name: `Чужак`,
        author: `Стивен Кинг`,
        genre: `Ужасы`,
        year: 2018
    },

    {
        name: `Смерть на Ниле`,
        author: `Агата Кристи`,
        genre: `Детектив`,
        year: 1937
    },

    {
        name: `Убийство Роджера Экройда`,
        author: `Агата Кристи`,
        genre: `Детектив`,
        year: 1926
    },

    {
        name: `Густіше за кров`,
        author: `Майк Омер`,
        genre: `Детектив`,
        year: 2022
    },

    {
        name: `Внутри убийцы`,
        author: `Майк Омер`,
        genre: `Детективные триллеры`,
        year: 2021
    },

    {
        name: `Книга Подорож в Ікстлан. Уроки дона Хуана`,
        author: `Карлос Кастанеда`,
        genre: `Эзотерика и оккультизм`,
        year: 1972
    },

    {
        name: `Чапаев и Пустота`,
        author: `Виктор Пелевин`,
        genre: `Роман`,
        year: 1996
    },

    {
        name: `Омо́н Ра`,
        author: `Виктор Пелевин`,
        genre: `Роман`,
        year: 1991
    },
]

 const genre = books.map((item) => {
        if (item.genre === `Детектив`) {
            return item.name.toUpperCase();
        }
        return item.name
 });

console.log(genre);