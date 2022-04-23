import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PlayerNameProvider from "../context/GameContext";

type CustomRenderOptions = {
  useRouting: boolean;
};

export const customRender = (
  ui: JSX.Element,
  options: CustomRenderOptions = {
    useRouting: true,
  }
) => {
  let uiResult = ui;

  if (options.useRouting) {
    uiResult = wrapWithRouting(ui);
  }

  return render(uiResult);
};

const wrapWithRouting = (ui: JSX.Element): JSX.Element => {
  return (
    <PlayerNameProvider>
      <BrowserRouter>{ui}</BrowserRouter>
    </PlayerNameProvider>
  );
};
