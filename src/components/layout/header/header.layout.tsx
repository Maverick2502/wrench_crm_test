import classes from "./header.module.scss";
import iconLogo from "../../../assets/icons/ic_logo.svg";
import iconUserProfile from "../../../assets/icons/ic_person.svg";

function Header() {
  return (
    <header className={classes["header"]}>
      <div className={classes["header__logo"]}>
        <img src={iconLogo} alt="Company's logo" />
        <span>Wrench CRM</span>
      </div>
      <div className={classes["header__userProfile"]}>
        <img src={iconUserProfile} alt="User profile's icon" />
        <span>Имя Фамилия</span>
      </div>
    </header>
  );
}

export default Header;
