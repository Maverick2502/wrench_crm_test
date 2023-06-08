import axios from "axios";
import { AddressesResponse } from "models";
import { useState } from "react";
import classes from "./searchAddress.module.scss";

const API =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const TOKEN = "fd3612ea039a65f00ec8f5d6dfc9bed17bf11f17";

function searchAddress() {
  const [data, setData] = useState<AddressesResponse[]>([]);
  const [search, setSearch] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (search === "") return;

    try {
      setIsLoading(true);
      const {
        data: { suggestions },
      } = await axios.post(
        `${API}`,
        { query: search },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${TOKEN}`,
          },
        }
      );

      setData(suggestions);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes["container"]}>
      <h1 className={classes["searchText"]}>Поиск адресов</h1>
      <label className={classes["enterAddress"]}>
        Введите интересующий вас адрес
      </label>
      <form onSubmit={handleSubmit} className={classes["search"]}>
        <input
          name="search"
          value={search}
          onChange={handleOnChange}
          className={classes["search__input"]}
          type="text"
        />
        <button
          disabled={isLoading}
          onClick={handleSubmit}
          type="button"
          className={classes["search__button"]}
        >
          {isLoading ? "Загрузка..." : "Поиск"}
        </button>
      </form>

      {isError && (
        <div>
          <h1>Произошла ошибка! Повторите Ваш запрос, еще раз, пожалуйста!</h1>
        </div>
      )}

      {data.length > 0 && (
        <div className={classes["search__result"]}>
          <h2 className={classes["search__result__title"]}>Адреса</h2>
          <ul>
            {data?.map((item) => (
              <li
                key={item.data?.city_fias_id}
                className={classes["search__result__list"]}
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default searchAddress;
