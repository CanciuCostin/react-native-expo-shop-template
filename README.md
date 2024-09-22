# React Native Expo Shop Template 🌟

Welcome to the **React Native Expo Shop Template** repository! This project is your go-to starter kit for building stunning, high-performance mobile applications using [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/).
This template implements a lightweight e-commerce shop for customizable products. Plenty of features are available, although shopping cart is out of scope.

<img src="https://github.com/user-attachments/assets/3386f5fe-4901-4738-9048-12821d58416f" width="180">
<img src="https://github.com/user-attachments/assets/22291778-e746-43f1-af4f-fcd465a56e7c" width="180">
<img src="https://github.com/user-attachments/assets/9f92b514-1c3a-4607-b017-716904d81a11" width="180">
<img src="https://github.com/user-attachments/assets/7bc281a4-f11a-49b2-8ecf-aa95ad0f48cc" width="180">
<img src="https://github.com/user-attachments/assets/de1fb2fe-6cbc-402b-b938-ebbf2b5a4e99" width="180">
<img src="https://github.com/user-attachments/assets/c4828937-a6cb-44ea-a9aa-a19ca42d5876" width="180">
<img src="https://github.com/user-attachments/assets/119c99f4-3ef3-4e0a-adb9-ef8c6d11f39c" width="180">
<img src="https://github.com/user-attachments/assets/d5056159-abaa-48e9-8a14-7f835b6f15bf" width="180">

## 🌐 Demo

Run the app on your own device using Expo GO:

![image](https://github.com/user-attachments/assets/6374db3a-1374-4ae3-9ffb-6505caecc70f)

## 🚀 Features

- **Seamless Expo Integration**: Effortlessly develop, build, and deploy your app with Expo's powerful tools.
- **Built-in UI**: Leverage custom UI element, without any third party library.
- **Pre-configured Navigation**: Ready-to-use navigation setup with [Expo Router](https://docs.expo.dev/router/introduction/).
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
- **Splash Screen**: Custom splash screen using Lottie animation
- **Video Player**: Integrated modal with VideoPlayer component.
<img src="https://github.com/user-attachments/assets/1e42cb30-b784-45c5-b240-132c8b8d337a" width="100">

## 📦 Quick Start

1. **Clone the repository**:

```sh
git clone https://github.com/yourusername/react-native-expo-template.git
```

2. **Navigate to the project directory**:

```sh
cd react-native-expo-shop-template
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
