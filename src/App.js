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
  const { setting, setSetting } = React.useState(true);
  const [clickCount, setClickCount] = React.useState(0);
  const [configrm, setConfirm] = React.useState(false);
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
    const result = r?.map((v, iR) => v * coefs.find((vR, i3) => iR === i3));

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
    <div
      style={{
        backgroundClip: "white",
      }}
    >
      <div
        style={{
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{}}>
            <div
              style={{
                border: "1px solid black",
                marginTop: 20,
                paddingBlock: 20,
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: "#f4e13d",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 0,
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  marginTop: 10,
                  marginBottom: 10,
                  fontSize: 30,
                }}
              >
                1. Начальные настройки модели
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    marginBlock: 5,
                  }}
                >
                  Укажите название модели:
                </div>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  style={{
                    backgroundColor: "white",
                    height: 50,
                    paddingLeft: 10,
                    borderRadius: 10,
                    borderWidth: 0,
                    boxShadow: "revert-layer",
                  }}
                  placeholder="Название модели"
                />

                <div
                  style={{
                    marginBlock: 5,
                  }}
                >
                  Выберите вид валюты:
                </div>
                <select
                  style={{
                    backgroundColor: "white",
                    height: 50,
                    paddingLeft: 10,
                    borderRadius: 10,
                    boxShadow: "revert-layer",
                    borderWidth: 0,
                  }}
                  onChange={(e) => {
                    setValuta(e.target.value);
                  }}
                  value={valuta}
                >
                  <option value={"руб."}>руб.</option>
                  <option value={"евро"}>евро</option>
                  <option value={"доллар"}>доллар</option>
                </select>
                <div
                  style={{
                    marginTop: 10,
                    marginBlock: 5,
                  }}
                >
                  Установите налог на прибыль (%):
                </div>
                <input
                  style={{
                    borderWidth: 0,
                    backgroundColor: "white",
                    height: 50,
                    paddingLeft: 10,
                    borderRadius: 10,
                    boxShadow: "revert-layer",
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
              </div>
            </div>

            <div
              style={{
                marginTop: 50,
              }}
            ></div>
            <div
              style={{
                border: "1px solid black",
                marginTop: 20,
                paddingBlock: 20,
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: "#f4e13d",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 0,
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  marginTop: 10,
                  marginBottom: 10,
                  fontSize: 30,
                }}
              >
                2. Установка шкалы времени
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div stlye={{}}>
                  Выберите шкалу времени и установите расчетный период:
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <select
                  value={pickedType}
                  style={{
                    marginTop: 10,
                    backgroundColor: "white",
                    height: 50,
                    paddingLeft: 10,
                    borderRadius: 10,
                    boxShadow: "revert-layer",
                    border: "none",
                  }}
                  onChange={(e) => {
                    setPickedType(e.target.value);
                  }}
                >
                  <option value={"Месяц"}>Месяц</option>
                  <option value={"Квартал"}>Квартал</option>
                  <option value={"Год"}>Год</option>
                </select>
                <input
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    backgroundColor: "white",
                    height: 50,
                    paddingLeft: 10,
                    border: "none",
                    borderRadius: 10,
                    boxShadow: "revert-layer",
                  }}
                  onChange={(e) => {
                    setColvoPer(e.target.value);
                  }}
                  placeholder="Количество"
                />

                <div></div>
              </div>
            </div>
            <div></div>
            <div
              style={{
                border: "1px solid black",
                marginTop: 50,
                paddingBlock: 20,

                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: "#f4e13d",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 0,
              }}
            >
              <div
                style={{
                  marginTop: 20,
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: 10,
                    marginBottom: 10,
                    fontSize: 30,
                  }}
                >
                  3. Расчет капиталовложений и затрат
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div stlye={{}}>
                  Выберите тип капиталовложения, укажите наименование и сумму
                  источника затрат:
                </div>
              </div>
              <div
                style={{
                  width: "70%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <select
                    style={{
                      marginTop: 10,
                      backgroundColor: "white",
                      height: 50,
                      paddingLeft: 10,
                      borderRadius: 10,
                      border: "none",
                      boxShadow: "revert-layer",
                    }}
                    value={countChoice2}
                    onChange={(e) => {
                      setCountChoice2(e.target.value);
                    }}
                  >
                    <option value={"Единовременные"}>Единовременные</option>
                    <option value={"За период"}>За период</option>
                  </select>
                  <button
                    style={{
                      marginTop: 10,
                      backgroundColor: "white",
                      height: 50,
                      marginLeft: 10,
                      paddingLeft: 10,
                      borderRadius: 10,
                      boxShadow: "revert-layer",
                      border: "none",
                    }}
                    onClick={(e) => {
                      const name = prompt("Введите наименование");

                      const price = +prompt("Введите сумму");
                      let counter = 1;
                      if (countChoice2 !== "Единовременные") {
                        counter = +prompt("Выберите период");
                      }
                      e.preventDefault();
                      const objCost = {
                        id: new Date().getTime(),
                        name: name,

                        price: price,
                        count: counter,
                      };
                      setCountChoice2("Единовременные");
                      setMoneys([...moneys, objCost]);
                    }}
                  >
                    Добавить
                  </button>
                </div>
                <table
                  style={{
                    marginTop: 20,
                    width: "100%",
                  }}
                >
                  <tr>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "white",
                      }}
                    >
                      Наименование
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "white",
                      }}
                    >
                      Сумма
                    </th>
                    <th
                      style={{
                        backgroundColor: "white",
                        border: "1px solid black",
                      }}
                    >
                      Тип
                    </th>
                    <th
                      style={{
                        backgroundColor: "white",
                        border: "1px solid black",
                      }}
                    >
                      Действие
                    </th>
                  </tr>
                  {moneys?.map((e, i) => (
                    <>
                      <tr
                        style={{
                          width: "100%",
                          backgroundColor: "white",
                          border: "1px solid black",
                        }}
                      >
                        <td
                          style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            border: "1px solid black",
                          }}
                        >
                          {" "}
                          {e.name}
                        </td>

                        <td
                          style={{
                            border: "1px solid black",
                          }}
                        >
                          {e.price}
                        </td>
                        {e.count === 1 ? (
                          <td
                            style={{
                              border: "1px solid black",
                            }}
                          >
                            Единовременные
                          </td>
                        ) : (
                          <td
                            style={{
                              border: "1px solid black",
                            }}
                          >
                            {e.count} {pickedType}
                          </td>
                        )}
                        <td
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "1px solid black",
                          }}
                        >
                          <button
                            style={{}}
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
                              let newName = prompt(
                                "Введите новое наименование"
                              );
                              let newDescription = prompt(
                                "Введите новое описание"
                              );
                              let newZatratiPrice = +prompt("Введите сумму");
                              const updatedArray = moneys?.map((item) => {
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
                        </td>
                      </tr>
                    </>
                  ))}
                </table>
              </div>
            </div>

            <div
              style={{
                border: "1px solid black",
                marginTop: 50,
                paddingBlock: 20,

                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: "#f4e13d",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 0,
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  marginTop: 10,
                  marginBottom: 10,
                  fontSize: 30,
                }}
              >
                4. Коэффициент дисконтирования
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div stlye={{}}>
                  Установите коэффициент дисконтирования (%):{" "}
                </div>
              </div>
              <div
                style={{
                  marginTop: 5,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <input
                  style={{
                    marginTop: 10,
                    backgroundColor: "white",
                    height: 50,
                    paddingLeft: 10,
                    borderRadius: 10,
                    boxShadow: "revert-layer",
                    border: "none",
                  }}
                  type="number"
                  value={discount}
                  onChange={(e) => [setDiscount(e.target.value)]}
                  placeholder="Коэф. дисконтирования, %"
                />
              </div>
            </div>
            <div
              style={{
                border: "1px solid black",
                marginTop: 50,
                paddingBlock: 20,

                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: "#f4e13d",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 0,
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  marginTop: 10,
                  width: "70%",

                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: 10,
                  fontSize: 30,
                }}
              >
                5. Экономия себестоимости
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div stlye={{}}>
                  Определите тип экономии себестоимости, укажите наименование и
                  сумму источника прибыли:
                </div>
              </div>
              <div
                style={{
                  marginTop: 10,
                  width: "100%",

                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div
                  style={{
                    width: 1000,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <select
                      style={{
                        marginTop: 10,
                        backgroundColor: "white",
                        height: 50,
                        paddingLeft: 10,
                        borderRadius: 10,
                        boxShadow: "revert-layer",
                        border: "none",
                        marginRight: 10,
                      }}
                      value={countChoice3}
                      onChange={(e) => {
                        setCountChoice3(e.target.value);
                      }}
                    >
                      <option value={"Постоянные"}>Постоянные</option>
                      <option value={"За период"}>За период</option>
                    </select>
                    <button
                      style={{
                        marginTop: 10,
                        backgroundColor: "white",
                        height: 50,
                        paddingLeft: 10,
                        borderRadius: 10,
                        boxShadow: "revert-layer",
                        border: "none",
                      }}
                      onClick={(e) => {
                        const name = prompt("Введите наименование");
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
                  </div>
                  <div
                    style={{
                      marginTop: 20,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <table
                      style={{
                        width: "100%",
                      }}
                    >
                      <tr
                        style={{
                          border: "1px solid black",
                          backgroundColor: "white",
                        }}
                      >
                        <th
                          style={{
                            border: "1px solid black",
                          }}
                        >
                          Наименование
                        </th>
                        <th
                          style={{
                            border: "1px solid black",
                          }}
                        >
                          Сумма
                        </th>
                        <th
                          style={{
                            border: "1px solid black",
                          }}
                        >
                          Тип
                        </th>
                        <th
                          style={{
                            border: "1px solid black",
                          }}
                        >
                          Действие
                        </th>
                      </tr>

                      {econom?.map((e, i) => (
                        <>
                          <tr
                            style={{
                              border: "1px solid black",
                              backgroundColor: "white",
                            }}
                          >
                            <th
                              style={{
                                border: "1px solid black",
                              }}
                            >
                              {e.name}
                            </th>

                            <th
                              style={{
                                border: "1px solid black",
                              }}
                            >
                              {e.price}
                            </th>
                            {e.count === 1 ? (
                              <th
                                style={{
                                  border: "1px solid black",
                                }}
                              >
                                Постоянные
                              </th>
                            ) : (
                              <th
                                style={{
                                  border: "1px solid black",
                                }}
                              >
                                {e.count} {pickedType}
                              </th>
                            )}

                            <th
                              style={{
                                border: "1px solid black",
                              }}
                            >
                              <button
                                onClick={(v) => {
                                  v.preventDefault();

                                  setEconom(
                                    econom.filter((v) => v.id !== e.id)
                                  );
                                }}
                              >
                                Удалить
                              </button>
                              <button
                                onClick={(f) => {
                                  f.preventDefault();
                                  let newName = prompt(
                                    "Введите новое наименование"
                                  );
                                  let newDescription = prompt(
                                    "Введите новое описание"
                                  );
                                  let newZatratiPrice =
                                    +prompt("Введите сумму");
                                  const updatedArray = econom?.map((item) => {
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
                            </th>
                          </tr>
                        </>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 50,
                paddingBlock: 20,
                display: "flex",
                justifyContent: "center",
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: "#f4e13d",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: 10,
                borderColor: "black",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div stlye={{}}>
                    Проверьте введенные данные и сформируйте показатели расчета
                    финансовой модели
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginTop: 20,
                    marginRight: "auto",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "white",
                      height: 50,
                      paddingLeft: 10,
                      borderRadius: 10,
                      boxShadow: "revert-layer",
                      marginRight: 10,
                      marginLeft: "auto",

                      border: "none",
                      width: 400,
                      dispay: "flex",
                      justifyContent: "center",
                    }}
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
                      setConfirm(!configrm);
                    }}
                  >
                    Сформировать таблицу
                  </button>
                </div>
              </div>
            </div>

            <div
              style={{
                border: "1px solid black",
                marginTop: 50,
                paddingBlock: 20,

                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: "#f4e13d",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 0,
              }}
            >
              <>
                {configrm && (
                  <>
                    <table
                      style={{
                        width: "100%",
                        backgroundColor: "white",
                      }}
                    >
                      <tr
                        style={{
                          border: "1px solid black",
                        }}
                      >
                        <th
                          style={{
                            border: "1px solid black",
                          }}
                        >
                          Период
                        </th>
                        {Array.from({ length: colvoPer }, (_, index) => (
                          <th
                            style={{
                              border: "1px solid black",
                            }}
                          >
                            {index + 1}
                          </th>
                        ))}
                      </tr>

                      <tr
                        style={{
                          border: "1px solid black",
                        }}
                      >
                        <td
                          style={{
                            border: "1px solid black",
                          }}
                        >
                          Капиталовложение
                        </td>

                        {Array.from({ length: colvoPer }, (_, index) => (
                          <td
                            style={{
                              textAlign: "center",

                              border: "1px solid black",
                            }}
                          >
                            {moneys.reduce((a, c) => {
                              const { price, count } = c;
                              let total = 0;

                              if (count === index + 1) {
                                total = price;
                              }
                              if (count === index + 1 && count !== 1) {
                                console.log(index);

                                total = moneys.find(
                                  (v) => v.count === index + 1
                                )?.price;
                              }

                              return a + total;
                            }, 0)}
                          </td>
                        ))}
                      </tr>
                      <tr
                        style={{
                          border: "1px solid black",
                        }}
                      >
                        <th
                          style={{
                            border: "1px solid black",
                            textAlign: "start",
                            fontWeight: 400,
                          }}
                        >
                          Экономия себестоимости
                        </th>
                        {Array.from({ length: colvoPer }, (_, index) => (
                          <td
                            style={{
                              textAlign: "center",

                              border: "1px solid black",
                            }}
                          >
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
                            }, 0)}
                          </td>
                        ))}
                      </tr>

                      <tr>
                        <th
                          style={{
                            border: "1px solid black",
                            textAlign: "start",
                            fontWeight: 400,
                          }}
                        >
                          Налог на прибыль
                        </th>
                        {Array.from({ length: colvoPer }, (_, index) => (
                          <td
                            style={{
                              textAlign: "center",

                              border: "1px solid black",
                            }}
                          >
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
                            }, 0)}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <th
                          style={{
                            border: "1px solid black",
                            textAlign: "start",
                            fontWeight: 400,
                          }}
                        >
                          Чистый денежный поток
                        </th>
                        {state?.map((m, i) => (
                          <td
                            style={{
                              textAlign: "center",

                              border: "1px solid black",
                            }}
                          >
                            {m - nalog.find((_v, i2) => i === i2)}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <th
                          style={{
                            border: "1px solid black",
                            textAlign: "start",
                            fontWeight: 400,
                          }}
                        >
                          Коэффициент дисконтирования
                        </th>
                        {Array.from({ length: colvoPer }, (_, index) => (
                          <td
                            style={{
                              textAlign: "center",

                              border: "1px solid black",
                            }}
                          >
                            {
                              +(
                                1 / Math.pow(1 + discount / 12 / 100, index + 1)
                              ).toFixed(4)
                            }
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <th
                          style={{
                            border: "1px solid black",
                            textAlign: "start",
                            fontWeight: 400,
                          }}
                        >
                          ЧДП с учетом дисконтирования
                        </th>
                        {data?.map((v) => (
                          <td
                            style={{
                              textAlign: "center",

                              border: "1px solid black",
                            }}
                          >
                            {v.toFixed(2)}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <th
                          style={{
                            border: "1px solid black",
                            textAlign: "start",
                            fontWeight: 400,
                          }}
                        >
                          Кумулятивный денежный поток с учетом дисконтирования
                        </th>
                        {Array.from({ length: colvoPer }, (_, index) => (
                          <td
                            style={{
                              textAlign: "center",

                              border: "1px solid black",
                            }}
                          >
                            {kam?.map((k, i) => (
                              <>{i === index && <div>{k.toFixed(2)}</div>}</>
                            ))}
                          </td>
                        ))}
                      </tr>
                    </table>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        fontSize: 18,
                        marginTop: 20,

                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: 10 }}>
                        Индекс рентабельности (PI) =
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          fontSize: 18,
                        }}
                      >
                        {(
                          moneys.reduce((a, c) => {
                            const { price } = c;
                            const total = price;
                            return a + total;
                          }, 0) / per
                        ).toFixed(5)}
                      </div>
                    </div>
                    <div>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 20,
                            fontSize: 18,
                          }}
                        >
                          <div
                            style={{
                              marginRight: 10,
                            }}
                          >
                            Чистая текущая стоимость =
                          </div>
                          <div>
                            {kam?.map((k, i) => (
                              <>
                                {i === colvoPer - 1 && (
                                  <div>{k.toFixed(2)}</div>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 20,
                        fontSize: 18,
                      }}
                    >
                      Дисконтированный срок окупаемости = {ocup}
                    </div>
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
