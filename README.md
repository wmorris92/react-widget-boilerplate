# React Widget Boilerplate

A boilerplate for building Javascript widgets in react.

## Setup
- Install dependencies with `yarn` (or `npm install`).

## Development
- `yarn dev` (or `npm run dev`) will run a local website embedding the widgets.
- `yarn build` (or `npm build`) will build a production version of the widget as widget.js in `/build` folder.

## Usage
The widget will create an object called ReactWidget on the window, with 2 functions, create and destroy.

### create(options = {})
This function will create the widget and show it on the page. options is an object to pass in variables to the widget, in the boilerplate example colour is passed in to change the colour of the box.

### destroy()
Removes the widget

## Notes
- This boilerplate uses [styled components](https://www.styled-components.com/) for css styling.
