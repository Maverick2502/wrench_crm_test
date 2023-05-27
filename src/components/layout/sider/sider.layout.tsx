import classNames from "classnames";
import { memo, useCallback, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import iconArrow from "../../../assets/icons/ic_arrow_toggle.svg";
import iconCalendar from "../../../assets/icons/ic_calendar.svg";
import iconsHome from "../../../assets/icons/ic_home.svg";
import iconLogout from "../../../assets/icons/ic_logout.svg";
import iconMaps from "../../../assets/icons/ic_map.svg";
import iconSearch from "../../../assets/icons/ic_search.svg";
import iconSettings from "../../../assets/icons/ic_settings.svg";
import iconFinances from "../../../assets/icons/ic_settings_finances.svg";
import iconSettingsUserProfile from "../../../assets/icons/ic_settings_userProfile.svg";
import iconTables from "../../../assets/icons/ic_tables.svg";
import iconWidgets from "../../../assets/icons/ic_widgets.svg";

import classes from "./sider.module.scss";

function SiderMemoized() {
  const location = useLocation();

  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const { pathname } = location;
  const getCurrentLocation = pathname.split("/");

  const toggleSubMenu = useCallback(() => {
    setIsSubMenuVisible((prev) => !prev);
  }, []);

  return (
    <nav className={classes["nav"]}>
      <div style={{ height: "80px" }} />
      <p className={classes["nav__title"]}>Меню</p>

      {/* Only two routes have path: Главная и Поиск адресов. The rest are for the sake of DEMO/UI. */}
      <ul>
        <li className={classes["nav__list"]}>
          <NavLink to="/" className={classes["nav__link"]}>
            <img
              draggable={false}
              width={32}
              height={32}
              src={iconsHome}
              alt="Main menu's icon"
            />
            <span>Главная</span>
          </NavLink>
          <span
            className={classNames(
              getCurrentLocation[1] === ""
                ? classes["nav__list-active"]
                : classes["nav__list-inactive"]
            )}
          />
        </li>

        <li className={classes["nav__list"]}>
          <NavLink to="/address" className={classes["nav__link"]}>
            <img
              draggable={false}
              width={32}
              height={32}
              src={iconSearch}
              alt="Search address icon"
            />
            <span>Поиск адресов</span>
          </NavLink>
          <span
            className={classNames(
              getCurrentLocation[1] === "address"
                ? classes["nav__list-active"]
                : classes["nav__list-inactive"]
            )}
          />
        </li>

        <li className={classes["nav__list"]}>
          <a className={classes["nav__link"]}>
            <img
              draggable={false}
              width={32}
              height={32}
              src={iconTables}
              alt="Table's icon"
            />
            <span>Таблицы</span>
          </a>
        </li>

        <li className={classes["nav__list"]}>
          <a className={classes["nav__link"]}>
            <img
              draggable={false}
              width={32}
              height={32}
              src={iconCalendar}
              alt="Calendar's icon"
            />
            <span>Календарь</span>
          </a>
        </li>

        <li className={classes["nav__list"]}>
          <a className={classes["nav__link"]}>
            <img
              draggable={false}
              width={32}
              height={32}
              src={iconMaps}
              alt="Map's icon"
            />
            <span>Карты</span>
          </a>
        </li>

        <li className={classes["nav__list"]}>
          <a className={classes["nav__link"]}>
            <img
              draggable={false}
              width={32}
              height={32}
              src={iconWidgets}
              alt="Widget's icon"
            />
            <span>Виджеты</span>
          </a>
        </li>

        <li>
          <div onClick={toggleSubMenu} className={classes["nav__menu"]}>
            <a className={classes["nav__link"]}>
              <img
                draggable={false}
                width={32}
                height={32}
                src={iconSettings}
                alt="Setting's icon"
              />
              <span>Настройки</span>
            </a>
            <img
              className={classNames(
                isSubMenuVisible ? classes["toggle"] : classes["toggle-active"]
              )}
              src={iconArrow}
              alt="Hide and show icons"
            />
          </div>
          {isSubMenuVisible && (
            <div className={classes["nav__subMenu"]}>
              <a className={classes["nav__subMenu__link"]}>
                <img
                  draggable={false}
                  width={32}
                  height={32}
                  src={iconSettingsUserProfile}
                  alt="Setting's icon"
                />
                <span>Настройки профиля</span>
              </a>
              <a className={classes["nav__subMenu__link"]}>
                <img
                  draggable={false}
                  width={32}
                  height={32}
                  src={iconFinances}
                  alt="Setting's icon"
                />
                <span>Управление финансами</span>
              </a>
            </div>
          )}
        </li>

        <li className={classes["nav__list"]}>
          <a className={classes["nav__link"]}>
            <img
              draggable={false}
              width={32}
              height={32}
              src={iconLogout}
              alt="Logout's icon"
            />
            <span>Выход</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export const Sider = memo(SiderMemoized);
