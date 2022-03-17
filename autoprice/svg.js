export const bgSvg = (color) => {
  // const color = "#00BE2D";

  const makeR = (color, step, opacity) => `
  <g transform="matrix( 1, 0, 0, 1, ${step}, 0)">
    <path fill="${color}" style='opacity:${opacity}' d="
    M 200 40
    L 200 0 0 0 16 40 200 40 Z"/>
  </g>
  `;
  let i = 12;
  const makePaint = () => {
    const paints = [];
    while (i--) {
      paints.push(makeR(color, i * 10, i * 0.024));
    }
    return paints;
  };
  return `
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="200px" height="40px" viewBox="0 0 200 40">
  ${makePaint()}
</svg>
`;
};
