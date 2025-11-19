import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn } from "../server.js";
import { b as authMiddleware } from "./auth-middleware-C8KKF5TR.js";
const createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    functionId,
    [TSS_SERVER_FUNCTION]: true
  });
};
const getUserID_createServerFn_handler = createSsrRpc("1b7fd1f3c31ca466fb0a1353e7f38ad6d9683d3b32c0469025d4e6612b1c3b61");
const getUserID = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(getUserID_createServerFn_handler, async ({
  context
}) => {
  return context?.user?.id;
});
export {
  createSsrRpc as c,
  getUserID as g
};
