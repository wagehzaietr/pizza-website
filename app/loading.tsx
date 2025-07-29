

import { Pizza } from "lucide-react";


export default function GlobalLoading() {


  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50/90 dark:bg-background backdrop-blur-sm transition-colors">
      <div className="flex flex-col items-center gap-6">
        <Pizza
          className="w-16 h-16 animate-spin text-orange-500 drop-shadow-lg"
          strokeWidth={1.5}
        />
        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
          Loading your slice...
        </h2>
        <p className="text-slate-600 dark:text-slate-300">
          Please wait while we prepare something delicious!
        </p>
      </div>
    </div>
  );
}