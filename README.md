<div align="center"><a href="https://www.iconfinder.com/icons/3213278/computer_creative_media_photo_icon" target="_blank"><img src="https://github.com/melanieseltzer/react-components/blob/master/public/iconfinder_12-Computer_3213278.png?raw=true" width="70" alt="mels react components" /></a></div>

<h1 align="center">@mels/react-components</h1>

![CircleCI (all branches)](https://img.shields.io/circleci/project/github/melanieseltzer/react-components.svg) [![npm (scoped)](https://img.shields.io/npm/v/@mels/react-components.svg)](https://www.npmjs.com/package/@mels/react-components) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> A collection of some of my frequently used React components.

This is my attempt at centralizing some of my most repeated components across all of my various side projects and tinkerings 😁

## Install

```bash
npm install --save @mels/react-components
```

## Docz documentation

https://mels-react-components.netlify.com

## Usage

```js
import React, { Component } from 'react';
import { Input, Label } from '@mels/react-components';

export default class App extends Component {
  render() {
    return (
      <form>
        <Label htmlFor="email" color="tomato">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="hi@example.com"
          color="tomato"
          // ...
        />
      </form>
    );
  }
}
```

## Thanks ❤️

- [Icon logo from IconFinder](https://www.iconfinder.com/icons/3213278/computer_creative_media_photo_icon)
- [create-react-library](https://github.com/transitive-bullshit/create-react-library/)

## License

MIT © [melanieseltzer](https://github.com/melanieseltzer)
