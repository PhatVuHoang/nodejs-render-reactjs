import { Request, Response } from "express";
import fs from "fs";
import { createElement } from "react";
import ReactDOMServer from "react-dom/server";
import Content from "../views/components/Content";

class Home {
  static getContent(_: Request, res: Response) {
    let htmlContent = fs.readFileSync("src/views/home.html", "utf-8");
    const contentComponent = ReactDOMServer.renderToString(
      createElement(Content)
    );

    htmlContent = htmlContent.replaceAll(
      "{{ component:Content }}",
      contentComponent
    );
    return res.send(htmlContent);
  }
}

export default Home;
