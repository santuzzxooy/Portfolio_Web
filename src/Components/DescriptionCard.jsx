import techSkills from "../data/techSkills.jsx";

const DescriptionCard = () => {
  return (
    <div className="description_container">
      <h1>My Development Skills</h1>
      <div className="description_grid">
        {techSkills.map((tech, index) => (
          <div key={index} className="description_card">
            <div className="tech_icon">{tech.icon}</div>
            <div className="tech_details">
              <h3>{tech.name}</h3>
              <div className="progress_bar">
                <div className="progress_fill" style={{ width: `${tech.percentage}%` }}></div>
              </div>
              <p className="progress_percentage">{tech.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionCard;