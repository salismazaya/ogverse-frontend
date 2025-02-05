import React from "react";
import TabBar from "./UI/TabBar";

export default function BottomNav() {
  return (
    <div className="fixed z-50 w-full h-16 max-w-[248px] mb-[34px] -translate-x-1/2 bg-transparent backdrop-blur-md border border-secondary/40 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto p-2">
        <TabBar />
      </div>
    </div>
  );
}
