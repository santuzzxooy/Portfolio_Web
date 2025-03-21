import "./Styles.css";
import services from "../data/services"

const ServicesCard = () => {
  return (
    <div className="services_container">
      <h1>My Services</h1>
      <div className="services_cards_container">
        {services.map((service, index) => (
          <div key={index} className="service_card">
            <div 
              className="service_icon" 
              style={{ borderColor: service.color, color: service.color }}
            >
              <service.icon />
            </div>
            <h3>{service.title}</h3>
            <ul className="service_list">
              {service.skills.map((skill, idx) => {
                const IconComponent = skill.icon;
                return (
                  <li key={idx} style={{ color: service.color }}>
                    <IconComponent /> {skill.name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
