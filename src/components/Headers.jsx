const Headers = () => {
  return (
    <div className="container">
      <div className="flex items-center  main_header">
        <div className="logo_wrapper w-full max-w-28">
          <a href="#">
            <img
              src="./logo.svg"
              alt="the site of logo"
              width={166}
              height={32}
            />
          </a>
        </div>
        <nav className="navbar">
          <ul className="navlist flex items-center justify-center ">
            <li className="navlist_item flex items-center">
              <img
                src="./headsvg4.svg"
                alt="img"
                width={16}
                height={16}
              />
              <h3 className="text-gray-400">Asosiy</h3>
            </li>
            <li className="navlist_item flex items-center">
              <img
                src="./headsvg1.svg"
                alt="img"
                width={16}
                height={16}
              />
              <h3 className="text-gray-400">Mijozlar bazasi</h3>
            </li>
            <li className="navlist_item flex items-center">
              <img
                src="./headsvg2.svg"
                alt="img"
                width={16}
                height={16}
              />
              <h3 className="text-gray-400">Tracking loyihalari</h3>
            </li>
            <li className="navlist_item flex items-center">
              <img src="./headsvg3.svg" alt="img" width={16} height={16} />
              <h3 className="text-gray-400">Sharh olish loyihalari</h3>
            </li>
            <li className="navlist_item flex items-center">
              <img src="./headsvg5.svg" alt="img" width={16} height={16} />
              <h3 className="text-gray-400">Redirect loyihalari</h3>
            </li>
          </ul>
        </nav>
        <div className="user flex items-center gap-3">
          <img
            src="./blueball.svg"
            alt="the profile img"
            width={32}
            height={32}
          />
          <h3>Austin Robertson</h3>
          <img
            src="./dropdown.svg"
            alt="the dropdown img"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Headers;
