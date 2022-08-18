import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 px-20 py-20 grid gap-10 xl:place-content-center lg:grid-cols-2 xl:grid-cols-3 min-h-screen dark">
      <div className="bg-white flex flex-col justify-between p-10 rounded-3xl shadow-xl">
        <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-100">
          <input
            type="text"
            required
            placeholder="Username"
            className="required:border-2 border-yellow-500 invalid:border-red-500 valid:border-teal-500"
          />
          <input type="password" required placeholder="Password" />
          <input type="submit" value="Login" className="bg-white" />
        </form>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <form className="flex flex-col space-y-2 p-5">
          <input
            type="text"
            required
            placeholder="Username"
            className="border p-1 border-gray-400 rounded-md peer"
          />
          <span className="hidden peer-invalid:block text-red-500">
            This input is inalid
          </span>
          <span className="hidden peer-valid:block text-teal-500">Good</span>
          <span className="hidden peer-hover:block text-amber-500">
            hover username
          </span>
          <input type="submit" value="Login" />
        </form>
      </div>
      <div className="bg-white dark:bg-black flex flex-col justify-between p-10 rounded-3xl shadow-xl">
        <span className="font-bold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-100 dark:odd:bg-black dark:even:bg-black"
            >
              <span className="text-gray-500 dark:text-white">Grey Chair</span>
              <span className="font-semibold dark:text-white">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((c, i) => (
            <li className="bg-red-300 py-2 empty:hidden" key={i}>
              {c}
            </li>
          ))}
        </ul>
        <div className="flex justify-between">
          <span className="text-gray-500 dark:text-white">Grey Table</span>
          <span className="font-semibold dark:text-white">$190</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span className="text-xl dark:text-white">Total</span>
          <span className="font-semibold dark:text-white">$209</span>
        </div>
        <div className="mt-5 bg-blue-500 dark:bg-black dark:border-white dark:border text-white dark:hover:text-black p-2 text-center rounded-xl w-2/4 mx-auto hover:bg-teal-500 active:bg-yellow-500 dark:hover:bg-white">
          Check Out
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl group">
        <div className="landscape:bg-blue-500 portrait:bg-indigo-400 p-6 pb-14 xl:pb-36">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-200 rounded-full group-hover:bg-red-400 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="flex relative flex-col -mt-12 -mb-5 items-center">
            <span className="text-lg font-medium">JaeWon</span>
            <span className="text-sm text-gray-500">Korea, Seoul</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex justify-between mb-5 items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>★ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-orange-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="flex mt-3 mb-5 justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-7 text-xs text-center text-white rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <details className="select-none open:text-white">
          <summary className="cursor-pointer">dropdown</summary>
          <span>item1</span>
        </details>
        <ul className="list-decimal">
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
        <input
          type="file"
          className="file:cursor-pointer file:transition file:border-0 file:rounded-md file:px-5"
        ></input>
        <p className="first-letter:text-5xl first-letter:hover:text-red-300">
          First text
        </p>
      </div>
    </div>
  );
};

export default Home;
