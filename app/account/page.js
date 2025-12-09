import { auth } from "../_lib/auth";

export const metadata = {
  title: "Profile",
  description: "Manage your account settings and preferences.",
};

export default async function Page() {
  const session = await auth();
  console.log(session);
  const firstName = session?.user?.name?.split(" ")[0] || "User";
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome, {firstName}
      </h2>
    </div>
  );
}
