import { bgSvg } from "./svg";

const rubleFormater = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB"
});

const usdFormater = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "USD"
});

export function makeWidget(tag) {
  tag.innerHTML = "svgHeart";
  const props = {
    usdValue: tag.getAttribute("data-usd-value"),
    bgUrl: tag.getAttribute("data-bg-url"),
    textColor: tag.getAttribute("data-text-color"),
    textBgColor: tag.getAttribute("data-text-bg-color"),
    height: tag.getAttribute("data-height"),
    url: tag.getAttribute("data-click-url")
  };

  const res = fetch("https://www.cbr-xml-daily.ru/daily_json.js");

  const buks = usdFormater.format(props.usdValue);
  const s = bgSvg(props.textBgColor);
  const hex = window.btoa(s);
  //const hexUrl = `url('data:image/svg+xml;utf8,${s}')`;
  const hexUrl = `url(data:image/svg+xml;base64,${hex})`;
  function render(usdNow) {
    const ruble = rubleFormater.format(usdNow * props.usdValue);
    tag.innerHTML = `  
    <div onclick="location.href='${props.url}'"  class='bg' style='background-image:url(${props.bgUrl}); height:${props.height};'>      
      <div class='value' style='background-image:${hexUrl}; color:${props.textColor};'>    
        ${buks} /
        ${ruble}
      </div>
    </div>
    `;
  }

  render(24);
  res.then((v) => {
    v.json().then((resp) => {
      const usdNow = resp.Valute.USD.Value;
      render(usdNow);
    });
  });
}
