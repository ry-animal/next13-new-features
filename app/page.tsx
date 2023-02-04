import { Suspense } from "react";
import TodosList from "./(user)/todos/TodosList";

function Home() {
  // example react boundary
  return (
    <div className="flex flex-col space-y-10">
      <Suspense
        fallback={<p className="text-red-500 space-y-10">Suspense Loading 1</p>}
      >
        <h1>Loading 1</h1>
        <div className="flex space-x-2">
          {/*@ts-ignore*/}
          <TodosList />
        </div>
      </Suspense>
      <Suspense fallback={<p className="text-blue-500">Suspense Loading 2</p>}>
        <h1>Loading 2</h1>{" "}
        <div className="flex space-x-2">
          {/*@ts-ignore*/}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
