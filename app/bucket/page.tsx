import { Suspense } from "react";
import CommandCreator from "../_components/commands/command-creator/CommandCreator";
import CommandsList from "../_components/commands/commands-list/CommandsList";

export default async function Page() {
  return (
    <Suspense>
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-4">
          <CommandCreator />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-8 ">
          <CommandsList />
        </div>
      </div>
    </Suspense>
  );
}
