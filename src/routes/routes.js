import authorRouter from "./author.routes.js";
import bookRouter from "./book.routes.js";

const Routes = () => {
  return [authorRouter, bookRouter];
};

export default Routes;
