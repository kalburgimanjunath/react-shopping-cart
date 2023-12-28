import { Link } from "react-router-dom";
export default function Header() {
  const leftmenus = ["home", "about", "catelog", "books", "cart"];
  const rightmenus = ["signin", "register"];
  return (
    <div className="flex sticky top-0 z-10 bg-blue-200 justify-between items-center shadow-lg w-full">
      <div>
        <img
          width="50"
          height="50"
          src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?t=st=1703405054~exp=1703405654~hmac=245bcd8dc29a1731472ca20ef735d7625ac524f40fe38716f6c527c32f42a011"
          alt="logo"
        />
      </div>
      <div className="flex justify-between items-center">
        {leftmenus &&
          leftmenus.map((item) => {
            return (
              <Link className="p-2" to={item} key={item}>
                {item.toUpperCase()}
              </Link>
            );
          })}
      </div>
      <div className="flex justify-between items-center">
        {rightmenus &&
          rightmenus.map((item) => {
            return (
              <Link className="p-2" to={item} key={item}>
                {item.toUpperCase()}
              </Link>
            );
          })}
      </div>
    </div>
  );
}
