# React + TypeScript + Vite

This project is built with React + TypeScript + Vite

## Library

[@vattevaii/small-swipe](https://www.npmjs.com/package/@vattevaii/small-swipe)

Library is inside lib folder. In it I've exported Slider Component and some other test functions.
Currently No Type Declarations are provided.

Example Usage:
```javascript
  import { Slider } from '@vattevaii/small-swipe';

  function App(){
    return 
        <Slider settings={{
          autoplay: false,
          centered: true,
          gap: 10,
          sliderHeight: 700,
          slidesToShow: 2,
          activeStyle: "scale",
        }}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
        </Slider>
  }
```

## Slider

[Slider Preview](https://ngit-assignment.netlify.app/)

Slider made with the slider component is made in src folder. And deployed in above link
