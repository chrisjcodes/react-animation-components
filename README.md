# react-animation-components

A set of React Transition Group components (https://github.com/reactjs/react-transition-group) for basic animations.

- [Installation](#installation)
- [Animation Components](#animation-components)
  * [FadeInOut](#fadeinout)
  * [TweenTransform](#tweentransform)
  * [FadeTransform](#fadetransform)
- [Group Components](#group-components)
  * [Stagger](#stagger)
  * [Random](#random)


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

The following are available on any animation component as well as **any valid `Transition` props**. Transitions are set to `appear` and `timeout={500}` by default but can be overwritten.

Key | Description | Example | Type | Default Value
------------ | -------------| -------------| -------------| -------------
delay | sets the animations `transitionDelay` | `'500ms'` | *string* | `'0ms'`
duration | sets the animations `transitionDuration` | `'1s'` | *string* | `'500ms'`
timingFn | sets the animations `transitionTimingFunction` | `'ease-in-out'` | *string* | `'linear'`
style | passes styles to wrapper `div` | `{ display:'flex' }` | *object* | `{}`

### FadeInOut

Transitions the wrapped element's opacity from `0` to `1`

#### Examples

```
import { FadeInOut } from 'react-animation-components'

<FadeInOut in>
  <h1>I'm transitioning to opacity:1</h1>
</FadeInOut>

<FadeInOut in={false}>
  <h1>I'm transitioning to opacity:0</h1>
</FadeInOut>
```

### TweenTransform

Transitions the wrapped element from one transform property to another. Any valid `transform` property will work.

#### Props

Key | Description | Example | Type | Default Value
------------ | -------------| -------------| -------------| -------------
start | the `entering` and `exited` transform value | `'translateX(100px)'` | *string* | `'none'`
finish | the `entered` and `exiting` transform value | `'translateX(100px)'` | *string* | `'none'`

#### Examples

```
import { TweenTransform } from 'react-animation-components'

<TweenTranform start="translateX(100px)" in>
  <h1>I'm transitioning from 100px to the left back to my initial position</h1>
</TweenTranform>

<TweenTranform start="translateX(100px)" finish="translateX(-100px)" in>
  <h1>I'm transitioning from 100px to the left to 100px right of my initial position</h1>
</TweenTranform>

<TweenTranform start="rotate(90deg)" in>
  <h1>I'm transitioning from being rotate 90 deg back to my initial rotation</h1>
</TweenTranform>
```

### FadeTransform

Combines `FadeInOut` and `TweenTransform`. `Transition` props will be passed to both components.

#### Examples

```
import { FadeTransform } from 'react-animation-components'

<FadeTranform start="translateX(100px)" in>
  <h1>I'm transitioning from 100px to the left back to my initial position and fading in</h1>
</FadeTranform>

<FadeTranform start="translateX(100px)" finish="translateX(-100px)" in>
  <h1>I'm transitioning from 100px to the left to 100px right of my initial position and fading in</h1>
</FadeTranform>

<FadeTranform start="rotate(90deg)" in>
  <h1>I'm transitioning from being rotate 90 deg back to my initial rotation and fading in</h1>
</FadeTranform>
```

## Group Components

### Stagger

Uses `TransitionGroup` to stagger `delay` on a set of animation components

#### Props

Key | Description | Example | Type | Default Value
------------ | -------------| -------------| -------------| -------------
delay | the amount to separate each stagger by | `1000` | *number* | `100`
chunk | used to limit the stagger into "chunks". | `5` | *number* | `0`

#### Examples

```
import { FadeInOut, Stagger } from 'react-animation-components'

const items = ['first', 'second', 'third', 'fourth', 'fifth'];

<Stagger>
    {items.map(
        item => (
            <FadeInOut>
                <h1>Each {item} will transition in with an incrementally larger delay than the previous</h1>
            </FadeInOut>
        )
    )}
</Stagger>

<Stagger chunk={4}>
    {items.map(
        item => (
            <FadeInOut>
                <h1>
                  Each {item} will increment in segments of 4.
                  First is 0, Second is 100, Third is 200, Fourth is 0, fifth is 100, and so on
                </h1>
            </FadeInOut>
        )
    )}
</Stagger>
```
### Random

Uses `TransitionGroup` to randomize `delay` on a set of animation components

#### Props

Key | Description | Example | Type | Default Value
------------ | -------------| -------------| -------------| -------------
minDelay | minimum delay possible | `100` | *number* | `0`
maxDelay | maximum delay possible | `5000` | *number* | `1500`

#### Examples

```
import { FadeInOut, Random } from 'react-animation-components'

const items = ['first', 'second', 'third', 'fourth', 'fifth'];

<Random>
    {items.map(
        item => (
            <FadeInOut>
                <h1>Each {item} will randomly FadeIn between 0 and 1500ms</h1>
            </FadeInOut>
        )
    )}
</Random>

<Random minDelay={1000} maxDelay={5000}>
    {items.map(
        item => (
            <FadeInOut>
                <h1>Each {item} will randomly FadeIn between 1000ms and 5000ms</h1>
            </FadeInOut>
        )
    )}
</Random>
```