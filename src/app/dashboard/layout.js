import { protectRoute } from "../utils/auth";

export default async function DashboardLayout({ children }) {
  await protectRoute(); // must be awaited

  return <section>{children}</section>;
}
