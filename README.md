# react-animation-components

[![Travis](https://img.shields.io/travis/unruffledBeaver/react-animation-components.svg?style=flat-square)]()

A set of React components using [React Transition Group](https://github.com/reactjs/react-transition-group) to provide drop in GPU accelerated animations and wrappers for group effects.

[Checkout the Storybook!](http://animationcomponents.com/)

*   [Installation](#installation)
*   [Animation Components](#animation-components)
    *   [Fade](#fade)
    *   [Transform](#transform)
    *   [FadeTransform](#fadetransform)
*   [Wrapper Components](#group-components)
    *   [Stagger](#stagger)
    *   [Random](#random)
    *   [Loop](#loop)

## Installation

`npm install react-animation-components`

Make sure you also have installed the following peer dependencies:

```
    "react": "^16.0.0",
    "react-dom": "^16.0.0",
    "react-transition-group": "^2.2.1",
    "prop-types": "^15.6.0"
```

## Animation Components

### Props available on all animation components

The following are available on any animation component as well as **any valid `Transition` props**. Transitions are set to `appear` and their `timeout` is calculated by combining the `delay` and `duration` by default but can be overwritten.

| Key       | Description                                    | Example              | Type     | Default Value |
| --------- | ---------------------------------------------- | -------------------- | -------- | ------------- |
| className | Passes className to wrapper `div`              | `some-class`         | _string_ | `undefined`   |
| delay     | Sets the animations `transitionDelay`          | `500`                | _number_ | `0`           |
| duration  | Sets the animations `transitionDuration`       | `1000`               | _number_ | `500`         |
| style     | Passes styles to wrapper `div`                 | `{ display:'flex' }` | _object_ | `{}`          |
| timingFn  | Sets the animations `transitionTimingFunction` | `'ease-in-out'`      | _string_ | `'ease'`      |

### Fade

Transitions the wrapped element's opacity from one value to another

#### Props

| Key          | Description                            | Example | Type     | Default Value |
| ------------ | -------------------------------------- | ------- | -------- | ------------- |
| enterOpacity | The opacity value when `in` is `true`  | `0.85`  | _number_ | `0`           |
| exitOpacity  | The opacity value when `in` is `false` | `0.25`  | _number_ | `0`           |

#### Examples

```
import { Fade } from 'react-animation-components'

<Fade in>
  <h1>I'm transitioning to opacity:1</h1>
</Fade>

<Fade in enterOpacity={0.85}>
  <h1>I'm transitioning to opacity:0.85</h1>
</Fade>

<Fade in={false}>
  <h1>I'm transitioning to opacity:0</h1>
</Fade>

<Fade in={false} exitOpacity={0.25}>
  <h1>I'm transitioning to opacity:0.25</h1>
</Fade>
```

### Transform

Transitions the wrapped element from one transform property to another. Any valid `transform` property will work.

#### Props

| Key            | Description                              | Example               | Type     | Default Value |
| -------------- | ---------------------------------------- | --------------------- | -------- | ------------- |
| enterTransform | The transform value when `in` is `true`  | `'translateX(100px)'` | _string_ | `'none'`      |
| exitTransform  | The transform value when `in` is `false` | `'translateX(100px)'` | _string_ | `'none'`      |

#### Examples

```
import { Transform } from 'react-animation-components'

<Transform enterTransform="translateX(100px)" in>
  <h1>I'm transitioning from my initial position to 100px right when `in` is `true`</h1>
</Transform>

<Transform enterTransform="translateX(100px)" exitTransform="translateX(-100px)" in>
  <h1>
    I'm 100px to the left of my initial position and
    I transition 100px right of my initial when `in` is `true`
  </h1>
</Transform>

<Transform enterTransform="rotate(90deg)" in>
  <h1>I transition from initial positon to rotate 90deg when `in` is `true`</h1>
</Transform>
```

### FadeTransform

Composes `Fade` and `Transform`. All top level props are passed to both components. You can also pass props to individual components in the composition.

**Props passed to indivudal components via `fadeProps` or `transformProps` will override any top level props**

#### Props

| Key            | Description                               | Example                                   | Type     | Default Value |
| -------------- | ----------------------------------------- | ----------------------------------------- | -------- | ------------- |
| fadeProps      | The props that only `Fade` recieves.      | `{ enterOpacity: 0.85 }`                  | _object_ | `{}`          |
| transformProps | The props that only `Transform` recieves. | `{ enterTransform: 'translateX(100px)' }` | _object_ | `{}`          |

#### Examples

```
import { FadeTransform } from 'react-animation-components'

<FadeTransform in transformProps={{ enterTransform: 'translateX(100px)' }}>
  <h1>I'm transitioning from my initial position to 100px right when `in` is `true`</h1>
</FadeTransform>

<FadeTransform
    in
    transformProps={{
        enterTransform: 'translateX(100px)',
        exitTransform: 'translateX(-100px)'
    }}
>
  <h1>
    I'm 100px to the left of my initial position and
    I transition 100px right of my initial when `in` is `true`
  </h1>
</FadeTransform>

<FadeTransform
    in
    transformProps={{
        exitTransform: 'translateX(-100px)'
    }}
    fadeProps={{
        enterOpacity: 0.85,
    }}
>
  <h1>I transition from `-100px` horizontally of my initial positon and to 0.85 opacity when `in` is `true`</h1>
</FadeTransform>
```

## Wrapper Components

Wrapper components use the inner animation components `onEntered` and `onExited`. **Setting those callbacks inside these wrappers will not work**

### Stagger

Uses `TransitionGroup` to stagger `delay` on a set of animation components

#### Props

| Key        | Description                                                       | Example            | Type       | Default Value              |
| ---------- | ----------------------------------------------------------------- | ------------------ | ---------- | -------------------------- |
| chunk      | Used to limit the stagger into "chunks".                          | `5`                | _number_   | `0`                        |
| delay      | The amount to separate each stagger by                            | `1000`             | _number_   | `100`                      |
| duration   | A value to set the inner child animations transition duration     | `800`              | _number_   | `500`                      |
| in         | A boolean to tell the children to mount or unmount                | `true`             | _boolean_  | `false`                    |
| onComplete | A function that is called after the last animation finishes       | any valid function | _function_ | `Function.prototype(noop)` |
| reverse    | A boolean to tell the component to reverse how delays are applied | `true`             | _boolean_  | `false`                    |

#### Examples

```
import { Fade, Stagger } from 'react-animation-components'

const items = ['first', 'second', 'third', 'fourth', 'fifth'];

<Stagger in>
    {items.map(
        item => (
            <Fade>
                <h1>Each {item} will transition in with an incrementally larger delay than the previous</h1>
            </Fade>
        )
    )}
</Stagger>

<Stagger chunk={4} in>
    {items.map(
        item => (
            <Fade>
                <h1>
                  Each {item} will increment in segments of 4.
                  First is 0, Second is 100, Third is 200, Fourth is 0, fifth is 100, and so on
                </h1>
            </Fade>
        )
    )}
</Stagger>
```

### Random

Uses `TransitionGroup` to randomize `delay` on a set of animation components

#### Props

| Key        | Description                                                       | Example            | Type       | Default Value              |
| ---------- | ----------------------------------------------------------------- | ------------------ | ---------- | -------------------------- |
| duration   | A value to set the inner child animations transition duration     | `800`              | _number_   | `500`                      |
| in         | A boolean to tell the children to mount or unmount                | `true`             | _boolean_  | `false`                    |
| maxDelay   | Maximum delay possible                                            | `5000`             | _number_   | `1500`                     |
| minDelay   | Minimum delay possible                                            | `100`              | _number_   | `0`                        |
| onComplete | A function that is called after the last animation finishes       | any valid function | _function_ | `Function.prototype(noop)` |
| reverse    | A boolean to tell the component to reverse how delays are applied | `true`             | _boolean_  | `false`                    |

#### Examples

```
import { Fade, Random } from 'react-animation-components'

const items = ['first', 'second', 'third', 'fourth', 'fifth'];

<Random in>
    {items.map(
        item => (
            <Fade>
                <h1>Each {item} will randomly FadeIn between 0 and 1500ms</h1>
            </Fade>
        )
    )}
</Random>

<Random minDelay={1000} maxDelay={5000} in>
    {items.map(
        item => (
            <Fade>
                <h1>Each {item} will randomly FadeIn between 1000ms and 5000ms</h1>
            </Fade>
        )
    )}
</Random>
```

### Loop

Loops using the `onEntered` and `onExited` callbacks to toggle `in` on a **single** animation component.

#### Props

| Key        | Description                                                                                                                                            | Example            | Type       | Default Value              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ---------- | -------------------------- |
| in         | Initializes the loop when `true`                                                                                                                       | `true`             | _bool_     | `false`                    |
| interval   | Sets the interval to toggle `in`. Also sets the `duration`                                                                                             | `1000`             | _number_   | `500`                      |
| iterations | Maximum number of loops                                                                                                                                | `5.5`              | _number_   | `Infinity`                 |
| onComplete | Callback that is called when the `iterations` have been met. Waits an additional `interval` to ensure its called when the last iteration has completed | any valid function | _function_ | `Function.prototype(noop)` |
| onIterate  | Callback that is called with the current count each time the loop iterates. Count is incremented by `0.5`                                              | any valid function | _function_ | `Function.prototype(noop)` |

#### Examples

```
import { Fade, Loop } from 'react-animation-components'

<Loop in>
    <Fade>
        <h1>I will Fade in and out repeatedly on 500ms intervals</h1>
    </Fade>
</Loop>

<Loop in iterations={5.5}>
    <Fade>
        <h1>I will Fade in and out repeatedly on 500ms intervals 5.5 times</h1>
    </Fade>
</Loop>
```
