import { useEffect, useState } from "react";

const URL = `https://api.frankfurter.app/latest?from=HKD`;
const KS_URL = `https://currency.kangsangapp.com/api/hkd`;

const iniCurrency = {
  value: 0,
  pair: "",
};

const ccyFormat = (num: number) => {
  if (num !== null) {
    return num.toFixed(2);
  }
};

const Hkd = () => {
  const [currency, setCurrency] = useState(iniCurrency);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const fetchCurrency = async () => {
    const res = await fetch(URL);
    const jsonData = await res.json();

    const newCur = {
      value: jsonData.rates.THB,
      pair: jsonData.base,
    };

    setCurrency(newCur);
    console.log("hkd");

    await fetch(KS_URL, {
      method: "POST",
      body: JSON.stringify(newCur),
      headers: myHeaders,
    });
  };

  useEffect(() => {
    fetchCurrency();
    const timer = setInterval(async () => {
      fetchCurrency();
    }, 360000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="flex-center">
        <div className="sub-title">{ccyFormat(currency.value)}</div>
        <div className="title">{currency.pair}</div>
      </div>
    </>
  );
};

export default Hkd;
