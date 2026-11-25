// Animated star-field background, randomized on each page load (see warpspeed.js).
new WarpSpeed('warp-canvas', {
  starColor: ColorStar(),
  backgroundColor: ColorBackground(),
  speed: RandomSpeed(),
  warpEffectLength: 8,
  density: 1,
  starSize: RandomizeSize(),
});
