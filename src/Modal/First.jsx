import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [valuta, setValuta] = React.useState("");
  const [state, setState] = React.useState();
  const [tax, setTax] = React.useState("");
  const [per, setPer] = React.useState("");
  const [ocup, setOcup] = React.useState(0);
  const getData = () => {
    let a = Array.from({ length: colvoPer }, (_, index) =>
      econom.reduce((a, c) => {
        const { price, count } = c;
        let total = 0;

        if (count === 1) {
          total += price * count;
        }
        if (count === index + 1 && count !== 1) {
          console.log(index);

          total += econom.find((v) => v.count === index + 1)?.price;
        }

        return a + total;
      }, 0)
    );

    setState(a);
  };
  const getNalog = () => {
    let b = Array.from({ length: colvoPer }, (_, index) =>
      econom.reduce((a, c) => {
        const { price, count } = c;
        let total = 0;

        if (count === 1) {
          total += price * count;
        }
        if (count === index + 1 && count !== 1) {
          console.log(index);

          total += econom.find((v) => v.count === index + 1)?.price;
        }

        return a + total * (tax / 100);
      }, 0)
    );
    setNalog(b);
  };

  const getCoef = () => {
    let c = Array.from(
      { length: colvoPer },
      (_, index) =>
        +(1 / Math.pow(1 + discount / 12 / 100, index + 1)).toFixed(4)
    );
    setCoefs(c);
  };
  const get4DP = () => {
    setCDP(state?.map((m, i) => m - nalog.find((v, i2) => i === i2)));
    let r = state?.map((m, i) => m - nalog.find((v, i2) => i === i2));
    const result = r.map((v, iR) => v * coefs.find((vR, i3) => iR === i3));

    setData(result);
  };
  const getKum = () => {
    /*     
    let sumofoNe = moneys.filter((a) => a.count === 1).map((v) => v.price);

    const sum = sumofoNe.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    let finalSum = [];
    finalSum[0] = sum;
    finalSum = [
      ...finalSum,
      ...moneys.filter((a) => a.count !== 1).map((v) => v.price),
    ];
    return console.log(finalSum); */
    let a = 0;
    const array = [];
    for (let i = 0; i < colvoPer; i++) {
      let num = 0;
      // if (i === 0) {
      //   let sumofoNe = moneys.filter((a) => a.count === 1).map((v) => v.price);

      //   const sum = sumofoNe.reduce(
      //     (accumulator, currentValue) => accumulator + currentValue,
      //     0
      //   );
      //   num = sum;
      // } else
      if (moneys[i]?.price) {
        num = moneys[i]?.price;
      } else {
        num = 0;
      }
      a += data[i] - num;
      if (!a) {
        a += data[i];
      }
      console.log(a);

      array.push(a);
    }
    setKam(array);
    console.log(array);
  };
  const [data, setData] = React.useState([]);
  const [coefs, setCoefs] = React.useState([]);
  const [cdp, setCDP] = React.useState([]);
  const [nalog, setNalog] = React.useState([]);
  const [colvoPer, setColvoPer] = React.useState();
  const [costs, setCosts] = React.useState([]);
  const [moneys, setMoneys] = React.useState([]);
  const [econom, setEconom] = React.useState([]);
  const [pickedType, setPickedType] = React.useState("Месяц");
  const [countChoice, setCountChoice] = React.useState("Единовременные");
  const [countChoice2, setCountChoice2] = React.useState("Единовременные");
  const [countChoice3, setCountChoice3] = React.useState("Постоянные");
  const [firstConRender, setFirstConRender] = React.useState("");
  const [discount, setDiscount] = React.useState();
  const [kam, setKam] = React.useState([]);
  const [chts, setChts] = React.useState("");
  React.useEffect(() => {}, [econom]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            style={{
              marginTop: 10,
            }}
            placeholder="Название модели"
          />
          <input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            style={{
              marginTop: 10,
            }}
            placeholder="Описание модели"
          />
          <div
            style={{
              marginTop: 10,
            }}
          >
            Валюта
          </div>
          <select
            onChange={(e) => {
              setValuta(e.target.value);
            }}
            value={valuta}
          >
            <option value={"руб."}>руб.</option>
            <option value={"евро"}>евро</option>
            <option value={"доллар"}>доллар</option>
          </select>
          <input
            style={{
              marginTop: 10,
            }}
            value={tax}
            onChange={(e) => {
              setTax(e.target.value);
            }}
            type="number"
            placeholder="Налог на прибыль, %"
            minLength={0}
            maxLength={100}
          />
          <div
            style={{
              marginTop: 50,
            }}
          >
            <div>
              <div>Шкала времени</div>
              <select
                value={pickedType}
                onChange={(e) => {
                  setPickedType(e.target.value);
                }}
              >
                <option value={"Месяц"}>Месяц</option>
                <option value={"Квартал"}>Квартал</option>
                <option value={"Год"}>Год</option>
              </select>
              <input
                onChange={(e) => {
                  setColvoPer(e.target.value);
                }}
                placeholder="Количество"
              />
            </div>
          </div>
          <div></div>
          <div
            style={{
              marginTop: 50,
            }}
          >
            <div>Капиталовложения</div>

            <div
              style={{
                width: 1000,
              }}
            >
              <select
                value={countChoice2}
                onChange={(e) => {
                  setCountChoice2(e.target.value);
                }}
              >
                <option value={"Единовременные"}>Единовременные</option>
                <option value={"За период"}>За период</option>
              </select>
              <button
                onClick={(e) => {
                  const name = prompt("Введите наименование");
                  const desc = prompt("Введите описание");
                  const price = +prompt("Введите сумму");
                  let counter = 1;
                  if (countChoice2 !== "Единовременные") {
                    counter = +prompt("Выберите период");
                  }
                  e.preventDefault();
                  const objCost = {
                    id: new Date().getTime(),
                    name: name,
                    desc: desc,
                    price: price,
                    count: counter,
                  };
                  setCountChoice2("Единовременные");
                  setMoneys([...moneys, objCost]);
                }}
              >
                Добавить
              </button>

              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "row",
                }}
              >
                <div>Наименование</div>
                <div>Описание</div>
                <div>Сумма</div>
                <div>Тип</div>
              </div>
              {moneys?.map((e, i) => (
                <>
                  <div key={i}>
                    <div
                      style={{
                        marginTop: 20,
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "row",
                      }}
                    >
                      <div>{e.name}</div>
                      <div>{e.desc}</div>
                      <div>{e.price}</div>
                      {e.count === 1 ? (
                        <div>Единовременные</div>
                      ) : (
                        <div>
                          {e.count} {pickedType}
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 20,
                      marginBottom: 20,
                    }}
                  >
                    <button
                      onClick={(v) => {
                        v.preventDefault();
                        setMoneys(moneys.filter((v) => v.id !== e.id));
                      }}
                    >
                      Удалить
                    </button>
                    <button
                      onClick={(f) => {
                        f.preventDefault();
                        let newName = prompt("Введите новое наименование");
                        let newDescription = prompt("Введите новое описание");
                        let newZatratiPrice = +prompt("Введите сумму");
                        const updatedArray = moneys.map((item) => {
                          if (item.id === e.id) {
                            return {
                              ...item,
                              name: newName,
                              desc: newDescription,
                              price: newZatratiPrice,
                            };
                          }
                          return item;
                        });
                        setMoneys(updatedArray);
                      }}
                    >
                      Изменить
                    </button>
                  </div>
                </>
              ))}
            </div>
            <div
              style={{
                marginTop: 50,
              }}
            >
              <input
                type="number"
                value={discount}
                onChange={(e) => [setDiscount(e.target.value)]}
                placeholder="Коэф. дисконтирования, %"
              />
            </div>
            <div
              style={{
                marginTop: 50,
              }}
            >
              <div>
                <div>Экономия себестоимости</div>

                <div
                  style={{
                    width: 1000,
                  }}
                >
                  <select
                    value={countChoice3}
                    onChange={(e) => {
                      setCountChoice3(e.target.value);
                    }}
                  >
                    <option value={"Постоянные"}>Постоянные</option>
                    <option value={"За период"}>За период</option>
                  </select>
                  <button
                    onClick={(e) => {
                      const name = prompt("Введите наименование");
                      const desc = prompt("Введите описание");
                      const price = +prompt("Введите сумму");
                      let counter = 0;
                      if (countChoice3 !== "Постоянные") {
                        counter += +prompt("Выберите период");
                      } else {
                        counter += 1;
                      }
                      e.preventDefault();
                      const objCost = {
                        id: new Date().getTime(),
                        name: name,
                        desc: desc,
                        price: price,
                        count: counter,
                      };
                      setCountChoice3("Постоянные");
                      setEconom([...econom, objCost]);
                      getData();
                      getNalog();
                    }}
                  >
                    Добавить
                  </button>

                  <div
                    style={{
                      marginTop: 20,
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "row",
                    }}
                  >
                    <div>Наименование</div>
                    <div>Описание</div>
                    <div>Сумма</div>
                    <div>Тип</div>
                  </div>
                  {econom?.map((e, i) => (
                    <>
                      <div key={i}>
                        <div
                          style={{
                            marginTop: 20,
                            display: "flex",
                            justifyContent: "space-around",
                            flexDirection: "row",
                          }}
                        >
                          <div>{e.name}</div>
                          <div>{e.desc}</div>
                          <div>{e.price}</div>
                          {e.count === 1 ? (
                            <div>Постоянные</div>
                          ) : (
                            <div>
                              {e.count} {pickedType}
                            </div>
                          )}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: 20,
                          marginBottom: 20,
                        }}
                      >
                        <button
                          onClick={(v) => {
                            v.preventDefault();

                            setEconom(econom.filter((v) => v.id !== e.id));
                          }}
                        >
                          Удалить
                        </button>
                        <button
                          onClick={(f) => {
                            f.preventDefault();
                            let newName = prompt("Введите новое наименование");
                            let newDescription = prompt(
                              "Введите новое описание"
                            );
                            let newZatratiPrice = +prompt("Введите сумму");
                            const updatedArray = econom.map((item) => {
                              if (item.id === e.id) {
                                return {
                                  ...item,
                                  name: newName,
                                  desc: newDescription,
                                  price: newZatratiPrice,
                                };
                              }
                              return item;
                            });
                            setEconom(updatedArray);
                          }}
                        >
                          Изменить
                        </button>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: 100,
              }}
            >
              <button onClick={(e) => {}}>Сформировать таблицу</button>
              <div
                style={{
                  paddingTop: 100,
                  paddingBottom: 10,
                }}
              >
                Общая сумма капиталовложений:{" "}
                {moneys.reduce((a, c) => {
                  const { price } = c;
                  const total = price;
                  return a + total;
                }, 0)}{" "}
                бубля
              </div>
              {Array.from({ length: colvoPer }, (_, index) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <div>{index + 1}</div>
                  {moneys.reduce((a, c) => {
                    const { price, count } = c;
                    let total = 0;

                    if (count === index + 1) {
                      total = price;
                    }
                    if (count === index + 1 && count !== 1) {
                      console.log(index);

                      total = moneys.find((v) => v.count === index + 1)?.price;
                    }

                    return a + total;
                  }, 0)}{" "}
                </div>
              ))}
              <div
                style={{
                  paddingTop: 50,
                  paddingBottom: 50,
                }}
              >
                Общая сумма экономии себестоимости:{" "}
                {Array.from({ length: colvoPer }, (_, index) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div>{index + 1}</div>
                    {econom.reduce((a, c) => {
                      const { price, count } = c;
                      let total = 0;

                      if (count === 1) {
                        total += price * count;
                      }
                      if (count === index + 1 && count !== 1) {
                        console.log(index);

                        total += econom.find(
                          (v) => v.count === index + 1
                        )?.price;
                      }

                      return a + total;
                    }, 0)}{" "}
                  </div>
                ))}
                бубля
              </div>
              <div>
                Налог на прибыль
                {Array.from({ length: colvoPer }, (_, index) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div>{index + 1}</div>
                    {econom.reduce((a, c) => {
                      const { price, count } = c;
                      let total = 0;

                      if (count === 1) {
                        total += price * count;
                      }
                      if (count === index + 1 && count !== 1) {
                        console.log(index);

                        total += econom.find(
                          (v) => v.count === index + 1
                        )?.price;
                      }

                      return a + total * (tax / 100);
                    }, 0)}{" "}
                  </div>
                ))}
              </div>
              <div>
                <div>Чистый денежный поток</div>
                {/*     {Array.from({ length: colvoPer }, (_, index) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div>{index + 1}</div>
                    {econom.reduce((a, c) => {
                      const { price, count } = c;

                      let total = 0;

                      if (count === 1 && count !== 0) {
                        total += price * count;
                      }
                      if (count === index + 1 && count !== 1) {
                        console.log(index);

                        total += econom.find(
                          (v) => v.count === index + 1
                        )?.price;
                      }

                      return a + total - (a + total * (tax / 100));
                    }, 0)}{" "}
                  </div>
                ))} */}
                {state?.map((m, i) => (
                  <div>{m - nalog.find((v, i2) => i === i2)}</div>
                ))}
              </div>
              <div>
                <div>ЧДП с учетом дисконтирования</div>
                <div>
                  Коэффициент дисконтирования: {+(discount / 12).toFixed(2)}
                </div>
                {Array.from({ length: colvoPer }, (_, index) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div>
                      {
                        +(
                          1 / Math.pow(1 + discount / 12 / 100, index + 1)
                        ).toFixed(4)
                      }
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  getData();
                  getNalog();
                  getCoef();
                  get4DP();
                  getKum();
                  const savePls = moneys.reduce((a, c) => {
                    const { price } = c;
                    const total = price;
                    return a + total;
                  }, 0);
                  const lastElement = kam[kam.length - 1];
                  setPer(lastElement);
                  setOcup(kam.findIndex((v) => v > 0) + 1);
                }}
              >
                ПОлучить данные
              </button>
              <div>
                <div>ЧДП с учетом дисконтирования</div>
                {data.map((v) => (
                  <div>{v.toFixed(2)}</div>
                ))}
              </div>
            </div>
            <div>Кумулятивный ЧДП с учетом дисконтирования</div>
            {Array.from({ length: colvoPer }, (_, index) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div>{index + 1}</div>
                <div>
                  {kam.map((k, i) => (
                    <>{i === index && <div>{k}</div>}</>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            ЧТС
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  {kam.map((k, i) => (
                    <>{i === colvoPer - 1 && <div>{k}</div>}</>
                  ))}
                </div>
              </div>

              <div>Индекс рентабельности</div>
              <div>
                {moneys.reduce((a, c) => {
                  const { price } = c;
                  const total = price;
                  return a + total;
                }, 0) / per}
              </div>
            </div>
            <div>Срок окупаемости: {ocup}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
