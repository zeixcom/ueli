# ueli

CSS Framework from Zeix

## Installation

[npm](https://www.npmjs.com/package/@zeix/ueli): `npm i @zeix/ueli`

## Sass

Import ueli’s source files in your `main.scss`.

```scss
// main.scss

// 1. Include functions first (allows usage of to-rem or get-color in settings)
@import '../node_modules/@zeix/ueli/scss/01-tools/functions';

// 2. Add token and variable overrides here

// 3. Include remainder of required partials
@import '../node_modules/@zeix/ueli/scss/00-settings/tokens';
@import '../node_modules/@zeix/ueli/scss/00-settings/variables';
@import '../node_modules/@zeix/ueli/scss/01-tools/mixins';

// 4. Include any optional parts of ueli as needed
@import '../node_modules/@zeix/ueli/scss/02-generic';
@import '../node_modules/@zeix/ueli/scss/03-elements';
@import '../node_modules/@zeix/ueli/scss/04-objects';
@import '../node_modules/@zeix/ueli/scss/05-components';
@import '../node_modules/@zeix/ueli/scss/06-utilities';

// 5. Add your custom styles here
```

## NPM Scripts

| Command            | Description                                |
| :----------------- | :----------------------------------------- |
| `npm run build`    | Build project in development mode          |
| `npm run watch`    | Watch files and build in development mode  |
| `npm run serve`    | Serve project in development mode          |
| `npm run prod`     | Build project in production mode           |
| `npm run lint`     | Run stylelint and fix errors               |
| `npm run prettier` | Reformat files with prettier               |
| `npm run sassdoc ` | Generate sassdoc files                     |
| `npm run test `    | Run sass-true tests via jest               |
| `npm run release`  | Run commands required for a release commit |

## Folder Structure

The folder structure inside the scss folder is based on Harry Robert’s ITCSS.

```
├── 00-settings    # Variables
├── 01-tools       # Functions and mixins
├── 02-generic     # Normalization styles
├── 03-elements    # Styles for bare HTML elements (h1, input, etc.)
├── 04-objects     # Class-based selectors for undecorated patterns
├── 05-components  # Specific UI components
├── 06-utilities   # Helper classes
```

## Settings

Settings are split into [tokens](https://github.com/zeixcom/ueli/tree/develop/scss/00-settings/_tokens.scss) and [variables](https://github.com/zeixcom/ueli/tree/develop/scss/00-settings/_variables.scss).

## Tools

Functions and mixins are annotated using sassdoc syntax. Please refer to the [sassdoc page](https://zeixcom.github.io/ueli/sassdoc) for their documentation.

## Objects

### Container

```html
<div class="container"></div>
```

Related variables: `$container`, `$container-gutter`

### Grid

Grid classes are generated depending on the [`$grid-mode`](https://zeixcom.github.io/ueli/sassdoc#global-variable-grid-mode).

#### CSS Grid (grid-mode: grid)

Related mixins: [`grid-row`](https://zeixcom.github.io/ueli/sassdoc#grid-mixin-grid-row), [`grid-column`](https://zeixcom.github.io/ueli/sassdoc#grid-mixin-grid-column), [`grid-column-start`](https://zeixcom.github.io/ueli/sassdoc#grid-mixin-grid-column-start)

##### Basic

```html
<div class="grid-row">
  <div class="grid-col">Column A</div>
</div>
```

##### Responsive

```html
<div class="grid-row">
  <div class="grid-col grid-col-md-6 grid-col-xl-9">Column A</div>
  <div class="grid-col grid-col-md-6 grid-col-xl-3">Column B</div>
</div>
```

##### Offset

```html
<div class="grid-row">
  <div class="grid-col grid-col-5">Column A</div>
  <div class="grid-col grid-col-5 grid-col-start-8">Column B</div>
</div>
```

##### Nested

```html
<div class="grid-row">
  <div class="grid-col grid-col-md-8">
    <div class="grid-row">
      <div class="grid-col grid-col-md-6">Nested column A</div>
      <div class="grid-col grid-col-md-6">Nested column B</div>
    </div>
  </div>
</div>
```

#### Flex Grid (grid-mode: flex)

Related mixins: [`flex-row`](https://zeixcom.github.io/ueli/sassdoc#grid-mixin-flex-row), [`flex-column`](https://zeixcom.github.io/ueli/sassdoc#grid-mixin-flex-column), [`flex-column-base`](https://zeixcom.github.io/ueli/sassdoc#grid-mixin-flex-column-base), [`flex-column-push`](https://zeixcom.github.io/ueli/sassdoc#grid-mixin-flex-column-push), [`flex-column-pull`](https://zeixcom.github.io/ueli/sassdoc#grid-mixin-flex-column-pull), [`flex-column-offset`](https://zeixcom.github.io/ueli/sassdoc#grid-mixin-flex-column-offset)

##### Basic

```html
<div class="row">
  <div class="col">Column A</div>
</div>
```

##### Responsive

```html
<div class="row">
  <div class="col col-md-6 col-xl-9">Column A</div>
  <div class="col col-md-6 col-xl-3">Column B</div>
</div>
```

##### Offset

```html
<div class="row">
  <div class="col col-5">Column A</div>
  <div class="col col-5 col-offset-2">Column B</div>
</div>
```

##### Push / Pull

```html
<div class="row">
  <div class="col col-6 col-push-6">First column in markup</div>
  <div class="col col-6 col-pull-6">Second column in markup</div>
</div>
```

##### Nested

```html
<div class="row">
  <div class="col col-md-8">
    <div class="row">
      <div class="col col-md-6">Nested column A</div>
      <div class="col col-md-6">Nested column B</div>
    </div>
  </div>
</div>
```

Related variables: `$grid-mode`, `$grid-columns`, `$grid-gutter`

### Embed

```html
<div class="embed-responsive"></div>
```

Related token: `$ratios`

### Formatted Text

```html
<div class="formatted-text"></div>
```

Related variables: `$formatted-text-selector`

## Components

### Button

```html
<button type="button" class="button"></button>
```

```html
<a class="button" href="#" role="button"></a>
```

```html
<button type="button" class="button-link"></button>
```

Related variables: See section "Button Base" and "Button Variations" in [\_variables.scss](https://github.com/zeixcom/ueli/tree/develop/scss/00-settings/_variables.scss)

### Input

```html
<input type="text" class="form-control" />
```

```html
<textarea class="form-control"></textarea>
```

Related variables: See section "Input" in [\_variables.scss](https://github.com/zeixcom/ueli/tree/develop/scss/00-settings/_variables.scss)

### Select

```html
<select class="select">
  <option>Option One</option>
  <option>Option Two</option>
  <option>Option Three</option>
</select>
```

Related variables: See section "Select" in [\_variables.scss](https://github.com/zeixcom/ueli/tree/develop/scss/00-settings/_variables.scss)

### Selection

```html
<div class="radio">
  <input type="radio" id="radio1" name="radio" />
  <label for="radio1">Option 1</label>
</div>

<div class="radio">
  <input type="radio" id="radio2" name="radio" />
  <label for="radio2">Option 2</label>
</div>
```

```html
<div class="checkbox">
  <input type="checkbox" id="checkbox1" name="checkbox" />
  <label for="checkbox1">Choice A</label>
</div>

<div class="checkbox">
  <input type="checkbox" id="checkbox2" name="checkbox" />
  <label for="checkbox2">Choice B</label>
</div>
```

Related variables: See section "Checkbox & Radio" in [\_variables.scss](https://github.com/zeixcom/ueli/tree/develop/scss/00-settings/_variables.scss)

### List

```html
<ol class="list list--ordered">
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>
    List Item 3
    <ol class="list list--ordered">
      <li>Nested List Item 1</li>
      <li>Nested List Item 2</li>
      <li>Nested List Item 3</li>
    </ol>
  </li>
</ol>
```

```html
<ul class="list list--unordered">
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>
    List Item 3
    <ul class="list list--unordered">
      <li>Nested List Item 1</li>
      <li>Nested List Item 2</li>
      <li>Nested List Item 3</li>
    </ul>
  </li>
</ul>
```

Related variables: See section "List" in [\_variables.scss](https://github.com/zeixcom/ueli/tree/develop/scss/00-settings/_variables.scss)

## Utilities

### Screenreader

```html
<span class="sr-only"></span>
```

```html
<span class="sr-only-focusable"></span>
```

### Display

```html
<div class="visible-xs">Visible only on the xs breakpoint</div>
<div class="visible-sm">Visible only on the sm breakpoint</div>
<div class="visible-md">Visible only on the md breakpoint</div>
<div class="visible-lg">Visible only on the lg breakpoint</div>
<div class="visible-xl">Visible only on the xl breakpoint</div>
```

```html
<div class="visible-sm-up">Visible from the sm breakpoint</div>
<div class="visible-md-up">Visible from the md breakpoint</div>
<div class="visible-lg-up">Visible from the lg breakpoint</div>
```

```html
<div class="hidden-xs">Hidden only on the xs breakpoint</div>
<div class="hidden-sm">Hidden only on the sm breakpoint</div>
<div class="hidden-md">Hidden only on the md breakpoint</div>
<div class="hidden-lg">Hidden only on the lg breakpoint</div>
<div class="hidden-xl">Hidden only on the xl breakpoint</div>
```

```html
<div class="hidden-sm-up">Hidden from the sm breakpoint</div>
<div class="hidden-md-up">Hidden from the md breakpoint</div>
<div class="hidden-lg-up">Hidden from the lg breakpoint</div>
```
