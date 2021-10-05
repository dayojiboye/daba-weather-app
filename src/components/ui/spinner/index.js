import "./styles.scss";

const Spinner = ({ style = {} }) => {
  return (
    <span className="material-icons rotating" style={style}>
      cached
    </span>
  );
};

export default Spinner;
