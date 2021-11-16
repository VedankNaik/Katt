import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CatItem, upVoteCat, resetUpVoteCat } from "./catsSlice";

const Cat = (props: { cat: CatItem }) => {
  const { cat } = props;
  const dispatch = useAppDispatch();
  const catState = useAppSelector((state) => state.cats);

  return (
    <div className="cat"> 
      <div className="cat__controls">
        <div onClick={() => dispatch(upVoteCat(cat.id))}>🌟</div>
        <div onClick={() => dispatch(resetUpVoteCat(cat.id))}>🔄</div>
      </div>
      {cat.upvotes > 0 && <div className="cat__upvotes">{cat.upvotes} 🌟</div>}
      <div
        className="cat__image"
        style={{ backgroundImage: `url(https://cataas.com/cat/${cat.id})` }}
      ></div>
    </div>
  );
};

export default Cat;
