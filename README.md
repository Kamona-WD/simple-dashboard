# Simple Dashboard

In Progress

Comming Soon...

[See snippet](https://codepen.io/A_kamel/full/ZEpLVmd)

## Usage

- Clone the repository:

  ````bash
   git clone https://github.com/Kamona-WD/simple-dashboard.git

   cd simple-dashboard
   ```
  ````

- Install the dependencies:

  ```bash
  # Using npm
  npm install

  # Using Yarn
  yarn

  ```

- Available commands:
  - `npm run build` or `yarn build`: Build files to the `dist` folder. Transpiles down to ES5 and bundles all JS into `app.bundle.js`. Transpiles SCSS to CSS and adds prefixing into `style.bundle.css`. Copies static assets and HTML over, and bundled CSS and JS gets added to HTML file.
  - `npm run start:dev` or `yarn start:dev`: Run `webpack-dev-server` at `localhost:9000`. Includes live reloading on any Javascript/SCSS/HTML changes.
  - `npm run start` or `yarn start`: Builds files and runs a local production server on `localhost:8080` with `http-server`.
  - `npm run lint:js` or `yarn lint:js`: Lints JS with ESLint.
  - `npm run lint:styles` or `yarn lint:styles`: Lints SCSS stylesheets with stylelint.
  - `npm run lint:html` or `yarn lint:html`: Lints HTML for a11y issues using pa11y.
