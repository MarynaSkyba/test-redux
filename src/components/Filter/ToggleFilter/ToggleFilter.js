import "./ToggleFilter.css";

const ToggleFilter = ({ onChange, checked }) => {
  return (
    <div className="filter">
      <h2 сlassName="main-title">Фильтры</h2>
      <div className="toggle-container">
        <div className="toggle-text-svg">
          <svg className="toggle-svg" width="24" height="24"></svg>
          <p className="toggle-text">Только с фотографией</p>
        </div>

        <label className="switch">
          <input
            id="toggleSwitch"
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleFilter;
