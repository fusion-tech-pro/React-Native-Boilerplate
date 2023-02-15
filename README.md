# React Native Boilerplate

Шаблон React Native, который вы можете использовать для старта нового проекта.

## Основные библиотеки

| Библиотека        | Версия  |
| ----------------- | ------- |
| React Native      | v0.71   |
| React             | v18     |
| TypeScript        | v4      |
| React Navigation  | v6      |
| Redux Toolkit     | v1.9    |
| React Redux       | v8      |
| Reanimated        | v3      |
| Gesture Handler   | v2      |
| Safe Area Context | v4      |
| React Hook Form   | v7      |
| Axios             | v1.3    |
| Avoid Softinput   | v3      |
| RNSvg             | v13     |
| Bootsplash        | v4      |

## Подготовленные решения

* Абсолютные импорты
* Респонсив функции для расчета ширины, высоты и размера шрифта
* Навигация с флоу авторизации, кастомным таб-баром и реализацией общего рут-стэка
* Изменение цветовой темы (светлая/темная)
* Локализация c использованием [i18n-js](https://github.com/fnando/i18n-js) и [react-native-localize](https://github.com/zoontek/react-native-localize)
* Обработка и валидация форм с помощью [React Hook Form](https://react-hook-form.com/) и [Yup](https://github.com/jquense/yup)
* Глобальная система хранения ключей и значений с использованием [Async Storage](https://react-native-async-storage.github.io/async-storage/) для обычных данных и [Encrypted Storage](https://github.com/emeraldsanto/react-native-encrypted-storage) для секьюрной информации
* Анимации с использованием [Reanimated v3](https://docs.swmansion.com/react-native-reanimated/docs/next/)
* Сплэш скрин с помощью [BootSplash](https://github.com/zoontek/react-native-bootsplash) и его анимированное исчезновение
* Тост-сообщение через [Notifier](react-native-notifier)
* Поддержка SVG компонентов ([React Native SVG](https://github.com/software-mansion/react-native-svg) и [React Native Svg Transformer](https://github.com/kristerkari/react-native-svg-transformer))
* Поддержка Redux и Navigation плагинов для [Flipper](https://fbflipper.com/)
* Axios дефолтные хедеры и интерсепторы
* Симуляция API через сторедж
* ESLint
* Husky

## Быстрый старт

* Склонируйте проект:
  ```
  git clone
  ```

* Войдите в папку с проектом:
  ```
  cd rn-template
  ```

* Выполните установку модулей:
  ```
  npm i
  ```
  или
  ```
  yarn
  ```

* Выполните установку подов:
  ```
  cd ios && pod install && cd ..
  ```

* Запустите приложение

  На iOS:
  ```
  npm run ios
  ```

  На Android:
  ```
  npm run android
  ```

## Использование

### Локализация

#### Для использования локализации необходимо:

* Добавить ключи и значения в соответствующие JSON файлы (src/locale/en.json, src/locale/ru.json, если у вас поддержка английского и русского языков)
* Для перевода строки в конкретном месте кода воспользуйтесь одним из следующих вариантов:
  + метод `translate` который импортируется из src/locale
  + пропсом `tx` компонента `Text`
  + пропсом `titleTx` компонентов: `Header` и `Screen`
  + пропсами `labelTx` и `errorTx` компонента `Input`
* Для использования любого метода выше вам нужно указать путь к этому значению в JSON-файле строкой. Пример:
  ```
  translate('signInScreen.title');
  ```
тайпскрипт вам поможет ввести строку-аргумент

#### Добавление пропса для локализованного текста:

Чтобы добавить в свой кастомный компонент возможность локализации через пропсу, вам необходимо:
* Импортировать `TxKeyPath` и при необходимости `TxOptions` из src/locale:
  ```
  import { TxKeyPath } from 'src/locale';
  ```
* Использовать `TxKeyPath` для типизации нужного пропса. Также важно соблюдать общую структуру и заканчивать нейминг пропсы на `Tx`:
  ```
  somePropTx: TxKeyPath
  ```

### Цветовая тема

#### Для использования цветовой темы необходимо:

* Добавить нужные цвета в src/theme/colors. Руководствоваться следующими правилами:
  + В `defaultColors` добавлять только те цвета, которые в разных цветовых темах одинаковы.
  + В объекты цветов темы (`lightColors`, `darkColors`) добавить новый цвет с одинаковым ключем. Например:
    ```
    export const lightColors = {
      // ...
      someNewColor: '#FFFFFF',
    };

    export const darkColors = {
      // ...
      someNewColor: '#000000',
    };
    ```
* В нужном месте получить объект цветов, используя следующие варианты:
  + В стилях получить `colors` из аргументов коллбэка `createStylesHook`:
    ```
    const useComponentStyles = createStylesHook(({
      colors,
    }) => ({
      // your styles
    });
    ```
  + В комонентах вызвать `useTheme` хук (импортируется из src/hooks/useTheme) и из возвращаемого объекта достать `colors`:
    ```
    const { colors } = useTheme();
    ```
* Из полученного объекта colors достать новый цвет по его ключу:
  ```
  colors.someNewColor
  ```
  И далее использовать этот цвет в нужных местах:
  ```
  backgroundColor: colors.someNewColor
  ```
  Он сам изменится при переключении темы

#### Для переключения цветовой темы необходимо:

* Получить метод `setNewColorTheme` из `useTheme` и вызвать его с нужным именем темы в аргументе:
  ```
  const { setNewColorTheme } = useTheme();
  setNewColorTheme('dark');
  ```
* При необходимости сохранить результат переключения темы в Async Storage:
  ```
  Storage.activeColorTheme.set('dark');
  ```

### Респонсив функции

Для того, чтобы использовать респонсив решения в проекте необходимо:

* Заменить переменные `defaultScreenHeight` и `defaultScreenWidth` в файле constants/device.ts на те, которые используются в дизайне вашего проекта (например в Figma) по умолчанию. Вы будете верстать по значениям в дизайне, а приложение будет скейлить их для других разрешений
* Использовать функции из utils/responsive:
  - `hp` - для высоты
  - `wp` - для ширины
  - `getFontSize` - для размера шрифта. Эта функция по умолчанию используется в объекте fontSize, так что вы редко будете ее вызывать напрямую
  - `getLineHeight` - для свойства lineHeight
  - `getLetterSpacing` - для свойства letterSpacing
* Для размера шрифта использовать объект `fontSize` из src/theme/fonts.ts

Все респонсив решения интегрированы в хук стилей, информация о котором находится ниже.

### Хук стилей

#### Для использования хука стилей необходимо:

* Создать файл стилей для компонента вида: SomeComponent.styles.ts
* Вызвать функцию createStylesHook (импотрируется из src/theme/createStylesHook). Аргументом передать в нее функцию, которая возвращает ваши стили для компонента. Вернуть результат функции в переменную `useComponentStyles` и экспортировать ее по дефолту:
  ```
  import createStylesHook from 'src/theme/createStylesHook';

  const useComponentStyles = createStylesHook(() => ({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));

  export default useComponentStyles;
  ```

* Вызвать этот хук в компоненте и получить с него стили:
  ```
  import useComponentStyles from './SomeComponent.styles';

  const SomeComponent: FC = () => {
    const styles = useComponentStyles();
  ```

* Использовать стили по назначению:
  ```
  <View style={styles.container} />
  ```

* При необходимости в `createStylesHook` из первого аргумента проброшенной функции получить дополнительные переменные и функции для стилизации, например: `safeAreaTopMargin`, `colors`, `fontFamily`, `fontSize`, `hp`, `wp` (полный список можно увидеть в файле src/theme/createStylesHook/useStyleProperties.ts):

  ```
  import createStylesHook from 'src/theme/createStylesHook';

  const useComponentStyles = createStylesHook(({
    safeAreaTopMargin,
    colors,
    fontFamily,
    fontSize,
    hp,
    wp,
  }) => ({
    container: {
      paddingTop: safeAreaTopMargin || hp(8),
    },

    text: {
      fontFamily: fontFamily.bold,
      fontSize: fontSize[12],
    },

    content: {
      width: wp(200),
    },
  }));

  export default useComponentStyles;
  ```

* Также, при желании с компонента в стили можно прокинуть дополнительные переменные. Для этого нужно:
  + Передать все необходимые свойства аргументом в хук `useComponentStyles`:
    ```
    const styles = useComponentStyles({
      someMargin: 8,
      someColor: '#000',
    });
    ```
  + В файле стилей типизировать этот аргумент:
    ```
    type Args = {
      someMargin: number;
      someColor?: string;
    };
    ```
  + Получить прокинутые переменные вторым аргументом функции `createStylesHook` и типизировать его:
    ```
    type Args = {
      someMargin: number;
      someColor?: string;
    };

    const useComponentStyles = createStylesHook(({
      colors,
    }, {
      someMargin,
      someColor,
    }: Args) => ({
      container: {
        marginTop: someMargin,
      },

      text: {
        color: someColor || colors.textInattentive,
      },
    });
    ```

* Для того, чтобы добавить новые свойства в первый аргумент функции, проброшенной в `createStylesHook`, нужно перейти в файл src/theme/createStylesHook/useStyleProperties.ts и расширить тип `StyleProps` и объект `styleProps`:
  ```
  // ...

  export type StyleProps = {
    // ...
    someNewStyleProp: number;
  }

  const useStyleProps = () => {
    // ...

    const styleProps: StyleProps = useMemo(
      () => ({
        // ...
        someNewStyleProp,
      }),
      [
        // ...
        someNewStyleProp,
      ],
    );

    return styleProps;
  };
  ```

## Если у вас есть вопросы, проблемы или идеи

Свяжитесь с [@Denis Konakov](https://fusion-llc.slack.com/team/U0144JV7LPM) в слэке.
