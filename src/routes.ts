import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route("/", "App.tsx"),
  route("*?", "catchall.tsx"),
] satisfies RouteConfig;