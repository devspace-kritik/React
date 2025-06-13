const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is h1 tag"),
    React.createElement("h2", {}, "this is h2 tag"),
  ])
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(heading);
