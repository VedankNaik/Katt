// import { resetAllCats } from "./features/gallary/catsSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import "./App.css";
import { resetAllCats } from "./features/gallary/catsSlice";

const Header = () => {
  const catState = useAppSelector((state) => state.cats);
  const starsTotal = catState.reduce((acc, cat) => acc + cat.upvotes, 0);
  const dispatch = useAppDispatch();
  return (
    <header>
      <h1>Cat Collective</h1>
      <div>
        <div>Total {starsTotal} ⭐️</div>
        <div onClick={() => dispatch(resetAllCats())}>🔄 Reset All</div>
      </div>
    </header>
  );
};

export default Header;
