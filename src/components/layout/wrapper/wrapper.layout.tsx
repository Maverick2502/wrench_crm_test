import { Fragment, memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header.layout";
import { Sider } from "../sider/sider.layout";
import classes from "./wrapper.module.scss";

function WrapperMemo() {
  return (
    <Fragment>
      <Header />
      <div className={classes["wrapper"]}>
        <div>
          <Sider />
        </div>
        <main className={classes["main"]}>
          <div style={{ height: "80px" }} />
          <Outlet />
        </main>
      </div>
    </Fragment>
  );
}

export const Wrapper = memo(WrapperMemo);
