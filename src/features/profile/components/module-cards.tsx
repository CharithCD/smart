import { ModuleIcon } from "@/features/profile/components/module-icon";
import { MODULE_DESCRIPTIONS, MODULE_LABELS, MODULES } from "@/features/profile/options";

// The company's four assessments. They become links when each module is built (Phase 7).
export function ModuleCards() {
  return (
    <section aria-labelledby="assessments-heading" className="flex flex-col gap-4">
      <h2 id="assessments-heading" className="text-lg font-bold text-neutral-900">
        Assessments
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MODULES.map((module) => (
          // A row on phones so four cards don't make a long column; a column from sm up
          <li key={module} className="flex gap-4 rounded-xl border p-5 sm:flex-col">
            <ModuleIcon module={module} />
            <div className="flex flex-1 flex-col gap-1">
              <h3 className="font-bold text-neutral-900">{MODULE_LABELS[module]}</h3>
              <p className="text-sm text-neutral-600 sm:mb-4">{MODULE_DESCRIPTIONS[module]}</p>
              <p className="mt-2 flex items-center gap-2 text-sm text-neutral-600 sm:mt-auto sm:border-t sm:pt-4">
                <span aria-hidden="true" className="size-2 rounded-full bg-neutral-550" />
                Not started
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
