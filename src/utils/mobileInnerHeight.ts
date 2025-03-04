const getHeightInfo = () => {
  const dims = { w: 0, h: 0 };
  const axis = Math.abs(window.orientation);
  let measuringEl = document.createElement("div");

  measuringEl.style.position = "fixed";
  measuringEl.style.height = "100vh";
  measuringEl.style.width = "0px";
  measuringEl.style.top = "0px";

  document.documentElement.appendChild(measuringEl);

  dims.w = axis === 90 ? measuringEl.offsetHeight : window.innerWidth;
  dims.h = axis === 90 ? window.innerWidth : measuringEl.offsetHeight;

  document.documentElement.removeChild(measuringEl);
  return { axis, dims };
};

const mobileInnerHeight = () => {
  let { axis, dims } = getHeightInfo();
  return (refresh: any) => {
    if (refresh) ({ axis, dims } = getHeightInfo());
    if (axis !== 90) return dims.h;
    return dims.w;
  };
};

export default mobileInnerHeight;
