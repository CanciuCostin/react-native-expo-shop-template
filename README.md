# React Native Expo Shop Template 🌟

Welcome to the **React Native Expo Shop Template** repository! This project is your go-to starter kit for building stunning, high-performance mobile applications using [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/).
This template implements a lightweight e-commerce shop for customizable products. Plenty of features are available, although shopping cart is out of scope.

## 🚀 Features

- **Seamless Expo Integration**: Effortlessly develop, build, and deploy your app with Expo's powerful tools.
- **Built-in UI**: Leverage custom UI element, without any third party library.
- **Pre-configured Navigation**: Ready-to-use navigation setup with [React Navigation](https://reactnavigation.org/).
- **State Management**: Integrated state management with [Redux Toolkit](https://redux-toolkit.js.org/)
- **Internationalization**: Multi-language support using i18n.
- **Stripe Integration**: Accept payments easily using Stripe.
- **Customizable Themes**: Easily switch between light and dark themes.
- **Responsive Design**: Built with responsive design principles to look great on any device.
- **TypeScript Support**: Includes full TypeScript setup for safer and more robust code.
- **Component Library**: Pre-built, reusable components to accelerate your development process.
- **ESLint & Prettier**: Pre-configured with ESLint and Prettier for consistent and clean code.
- **Husky pre-commit hooks**: Run ESLint & Prettier before you push your code.
- **Testing Ready**: Setup for unit and integration tests with [Jest](https://jestjs.io/) and [React Native Testing Library](https://callstack.github.io/react-native-testing-library/).

## 🌐 Demo

Run the app on your own device using Expo GO:

## 📦 Quick Start

1. **Clone the repository**:

```sh
git clone https://github.com/yourusername/react-native-expo-template.git
```

2. **Navigate to the project directory**:

```sh
cd react-native-expo-template
```

**Note:** If you want to skip Step 3, just clone the test branch which uses hardcoded data and does not require a web server. 3. **Setup dummy server.**

```
cd dummy_server
npm install
node index.js
```

**Note:** If you run the app on a real device, you will have to set EXPO_PUBLIC_BACKEND_URL accordingly inside .env. Otherwise, the emulator will resolve the 10.0.2.2 address to the host machine.

4. **Install app dependencies**:

```sh
npm install
```

4. **Run the app**:

```sh
npx expo start
```

5. **Optional - Set-up Stripe backend URL and publishable key**
   **Note:** If you skip this step, the app will use the default Stripe backend from their [official example](https://glitch.com/edit/#!/expo-stripe-server-example).

6. **Linting & testing**

```
npm run style:all
npm run test
```

## 🛠️ Customization

This template is easily customizable to fit your specific project needs.

## 🧩 Modular Architecture

Designed with a modular architecture to make it easy to add, remove, or update features without breaking the entire app.

## 🌍 Internationalization

Built-in support for internationalization (i18n), making it simple to localize your app for different languages and regions.

## 🤝 Contributing

We welcome contributions! Feel free to submit PRs and reach out to me.

## 📄 License

This project is licensed under the Apache-2.0 License - see the LICENSE file for details.
