import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GameProvider from "../context/GameContext";

type CustomRenderOptions = {
  useRouting: boolean;
  useContext: boolean;
};

export const customRender = (
  ui: JSX.Element,
  options: CustomRenderOptions = {
    useRouting: true,
    useContext: true,
  }
) => {
  let uiResult = ui;

  if (options.useRouting) uiResult = wrapWithRouting(uiResult);
  if (options.useContext) uiResult = wrapWithContext(uiResult);

  return render(uiResult);
};

const wrapWithRouting = (ui: JSX.Element): JSX.Element => {
  return <BrowserRouter>{ui}</BrowserRouter>;
};

const wrapWithContext = (ui: JSX.Element): JSX.Element => {
  return <GameProvider>{ui}</GameProvider>;
};
