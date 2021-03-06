import { LanguageMap } from './i18n'

export const rus: LanguageMap = {
  yacht: 'Яхта',
  indigo: 'Индиго',
  darkTheme: 'Темная тема',
  language: 'Язык',
  compactTable: 'Компактная таблица',
  activePlayerFirst: 'Активный игрок первый',
  diceSize: 'Размер костей',
  playerNo: 'Игрок №',
  currentGameWillBeLost: 'Текущая игра будет утеряна.',
  combinations: 'Комбинации',
  total: 'Итог',
  gameOver: 'Игра окончена',
  maximumPossibleNumberOfPoints: 'Максимально возможное количество очков',
  ofMax: 'из макс.',
  more: 'еще',
  auto: 'Авто (синхронизировать с настройками системы)',
  points1: 'очков',
  points2: 'очко',
  points3: 'очка',
  points4: 'очков',

  'button.startGame': 'Начать игру',
  'button.restartGame': 'Начать заново',
  'button.startNewGame': 'начать новую игру',
  'button.cancel': 'Отмена',
  'button.add': 'Добавить',
  'button.reset': 'Сброс',
  'button.reset2': 'Сбросить',
  'button.dropDices': 'Бросить кости',
  'button.addPlayer': 'Добавить игрока',
  'button.writeDownYourPoints': 'Запишите ваши очки',
  'button.goHome': 'На главную',
  'button.strikeOut': 'Вычеркнуть',

  'tab.combinations': 'Комбинации',
  'tab.settings': 'Настройки',
  'tab.rules': 'Правила',
  'tab.history': 'История',

  'history.header': 'История',
  'history.user.label': 'История игрока',
  'history.noHistoryYet': 'Истории пока нет',
  'history.activeMove': 'Ваш ход, еще #triesLeft# #tries#...',
  'history.activeMoveTries1': 'попытка',
  'history.activeMoveTries2': 'попытки',
  'history.checkbox.followActivePlayer': '',

  'combination.1': 'Единицы',
  'combination.1.title': 'Сумма всех костей, на которых выпали 1',
  'combination.2': 'Двойки',
  'combination.2.title': 'Сумма всех костей, на которых выпали 2',
  'combination.3': 'Тройки',
  'combination.3.title': 'Сумма всех костей, на которых выпали 3',
  'combination.4': 'Четверки',
  'combination.4.title': 'Сумма всех костей, на которых выпали 4',
  'combination.5': 'Пятерки',
  'combination.5.title': 'Сумма всех костей, на которых выпали 5',
  'combination.6': 'Шестёрки',
  'combination.6.title': 'Сумма всех костей, на которых выпали 6',
  'combination.bonus': 'Бонус',
  'combination.bonus.title': 'Если игрок набирает по крайней мере 63 очков (по три кости с каждым числом) в верхней секции, он получает бонус в виде 35 очков',

  'combination.threeOfAKind': 'Сэт',
  'combination.threeOfAKind.title': 'Три кости, на которых выпали одинаковые значения. В очки записывается сумма этих трёх костей.',
  'combination.equal_4': 'Карэ',
  'combination.equal_4.title': 'Четыре кости, на которых выпали одинаковые значения. В очки записывается сумма этих четырёх костей.',
  'combination.smallStraight': 'Младший стрит',
  'combination.smallStraight.title': 'Любые четыре последовательных числа (1, 2, 3, 4 или 2, 3, 4, 5 или 3, 4, 5, 6). Записывается 25 очков.',
  'combination.bigStraight': 'Старший стрит',
  'combination.bigStraight.title': 'Пять последовательных чисел (1, 2, 3, 4, 5 или 2, 3, 4, 5, 6). Записывается 30 очков.',
  'combination.twoPair': 'Две пары',
  'combination.twoPair.title': 'Две пары любых одинаковых костей. Записывается 25 очков',
  'combination.fullHouse': 'Фул Хаус',
  'combination.fullHouse.title': 'Пара и тройка любых одинаковых костей. Записывается 30 очков.',
  'combination.theYacht': 'Яхта',
  'combination.theYacht.title': 'Пять костей, на которых выпали одинаковые значения. Записывается 50 очков.',
  'combination.chance': 'Шанс',
  'combination.chance.title': 'Записывается сумма всех выпавших костей.',

  'help.intro': 'Яхта — народная игра в кости, напоминающая Покер на костях, предшественник игры Yahtzee.',
  'help.gameplay.header': 'Ход игры',
  'help.gameplay.text': 'В яхту можно играть в одиночку или с любым количеством противников. Игроки ходят по очереди, бросая одновременно пять костей. После каждого броска игрок выбирает, какие кости оставить, а какие перебросить. Игрок может перебросить любое количество (включая все пять) костей два раза за ход. В каждом ходе необходимо записать очки за одну из возможных комбинаций, если подходящих не осталось, то нужно написать 0 за любую. Каждую комбинацию можно записать только один раз. Игрок с наибольшим количеством очков в конце игры побеждает.',
  'help.scoring.header': 'Подсчёт очков',
  'help.scoring.text': 'Очки записываются за следующие комбинации:',
  'help.topSection': 'Верхняя секция:',
  'help.topSection.tip': 'Если игрок набирает по крайней мере 63 очков (по три кости с каждым числом) в верхней секции, он получает бонус в виде 35 очков.',
  'help.bottomSection': 'Нижняя секция:',
}
