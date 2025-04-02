const loadingBarCount = 2;

export function LatestPostsLoading() {
  return (
    <div>
      <div className="flex flex-col mb-4">
        <div className="border-b py-4 flex justify-between gap-4 animate-pulse bg-gray-200">
          <div className="h-6 w-1/2 bg-gray-400"></div>
          <p className="h-6 w-1/4 bg-gray-400"></p>
        </div>
      </div>

      <div className="flex flex-col mb-4">
        {Array.from({ length: loadingBarCount }, (_, index) => (
          <div key={index} className="border-b py-4 flex justify-between gap-4 animate-pulse bg-gray-200">
            <div className="h-6 w-1/2 bg-gray-400"></div>
            <p className="h-6 w-1/6 bg-gray-400"></p>
          </div>
        ))}
      </div>
    </div>
  );
}