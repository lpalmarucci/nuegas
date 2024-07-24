"use client";

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-6 items-center justify-center">
      <h1 className="text-4xl font-semibold text-gray-700 uppercase">Ops :(</h1>
      <span className="text-base text-gray-500 font-semibold">
        The resource you'are trying to access could not be found
      </span>
    </div>
  );
}
