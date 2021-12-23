# Steps to install TaiwindCSS

### Tailwind official docs
You can familiarise yourself with Tailwind on their [Official website](https://tailwindcss.com/). If you want to know more about Tailwind React Setup you can find it [here](https://tailwindcss.com/docs/guides/create-react-app).

### To install Tailwind with Create React App please follow steps below:
1. Create React App with `npx create-react-app my-app`
2. Installing Tailwind dependencies with `npm install -D tailwindcss postcss autoprefixer`
or `npm install -D tailwindcss@latest postcss@latest autoprefixer@latest` 
or `npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9` command
3. Then, to override the naitive post CSS configuration install package named CRACO `npm i @craco/craco`.
4. If you've got dependency or version error while installing CRACO, set your react-scripts version to `"react-scripts": "^4.0.0"` in your `package.json` file. Because some versions of CRACO work only with older react-scripts versions. 
5. Use CRACO to to replace react scripts in the package.json
```
"scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
```
6. Create CRACO config file `craco.config.js` to apply Tailwind pluggin
```
module.exports = {
  style: {
    postcss: { 
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};
```
7. Run the `npx tailwindcss init -p` or `npx tailwindcss-cli@latest init -p` command to generate `tailwind.config.js` file in the root of the project.
8. And finally we go into our `index.css` file and use the Tailwind directive to include the actual Tailwind styles in our project
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
9. Run `npm start` to check if everything installed correctly.

**P.S. In Tailwind you can enable just-in-time mode, that will compile your CSS on the fly making your build times much faster. To enable just-in-time mode, set the `mode` option to `'jit'` in your `tailwind.config.js` file:**
```
module.exports = {
  mode: 'jit',
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
