import Headers from "./components/Headers";

const App = () => {
  return (
    <>
      <header>
        <Headers />
      </header>
      <main className="flex container">
        <section className="left">
          <div className="container">
            <ul className="flex flex-wrap justify-center gap-16 mt-5">
              <li className="flex gap-6 bg-gray-100 p-12">
                <img src="./ratingtop1.svg" alt="img" width={56} height={56} />
                <div>
                  <h5 className="text-1xl text-gray-500">
                    Tracking loyihalari
                  </h5>
                  <h2 className="text-3xl text-blue-500 font-bold">5 ta</h2>
                  <p>(7 ta subloyiha)</p>
                </div>
              </li>
              <li className="flex gap-6 bg-gray-100 p-12">
                <img src="./ratingtop3.svg" alt="img" width={56} height={56} />
                <div>
                  <h5 className="text-1xl text-gray-500">
                    Sharh olish loyihalari
                  </h5>
                  <h2 className="text-3xl text-blue-500 font-bold">15 ta</h2>
                  <p>(7 ta subloyiha)</p>
                </div>
              </li>
              <li className="flex gap-6 bg-gray-100 p-12">
                <img src="./ratingtop2.svg" alt="img" width={56} height={56} />
                <div>
                  <h5 className="text-1xl text-gray-500">Mijozlar</h5>
                  <h2 className="text-3xl text-blue-500 font-bold">
                    12,345 ta
                  </h2>
                  <p>(563 ta saralanmagan)</p>
                </div>
              </li>
            </ul>
            <div className="mt-10 mb-10">
              <h2 className="font-bold text-2xl">Tracking loyihasi</h2>
              <ul className="flex justify-between p-10 gap-16">
                <li>
                  <img src="./bar1.svg" />
                  <h2 className="text-gray-400 text-1xl">SMS yuborilganlar</h2>
                </li>
                <li>
                  <img src="./bar2.svg" />
                  <h2 className="text-gray-400 text-1xl">Linkga kirganlar</h2>
                </li>
                <li>
                  <img src="./bar3.svg" />
                  <h2 className="text-gray-400 text-1xl">
                    Mahsulot sahifasiga kirganlar
                  </h2>
                </li>
                <li>
                  <img src="./bar4.svg" />
                  <h2 className="text-gray-400 text-1xl">Sotib olganlar</h2>
                </li>
                <li>
                  <img src="./bar5.svg" />
                  <h2 className="text-gray-400 text-1xl">Izoh qoldirganlar</h2>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="right p-5">
          <div className="container">
            <h3 className="text-gray-400">1 oylik SMS lar</h3>
            <div className="w-full h-1">
              --------------------------------
            </div>
            <br />
            <h4>
              Umumiy <br /> <span className="font-bold text-2xl">1000 ta</span>
            </h4>
            <div className="w-full h-1">
              --------------------------------
            </div>
            <br />
            <div className="flex gap-5 items-center">
              <img src="./74.svg" />
              <h3 className="text-1xl font-bold">
                750ta <br />{" "}
                <span className="text-1xl text-gray-400 font-normal">
                  Yetib borgan
                </span>
              </h3>
            </div>
            <div className="flex gap-5 items-center mt-5">
              <img src="./26.svg" />
              <h3 className="text-1xl font-bold">
                260ta <br />{" "}
                <span className="text-1xl text-gray-400 font-normal">
                  Hatolik bo'lgan
                </span>
              </h3>
            </div>
            <div className="mt-5">
              <img src="./fedbacks.svg" width={253} height={61} />
              <div className="flex justify-between mt-3">
                <h3 className="font-bold">
                  234ta <br />
                  <span className="font-normal">bu oygi feebacklar</span>
                </h3>
                <h3 className="text-red-500 flex">
                  1.5%
                  <img src="./red_down.svg" width={16} height={16} />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
