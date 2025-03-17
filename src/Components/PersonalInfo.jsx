import './Styles.css'
import foto from '../assets/foto.png'

const PersonalInfo = () => {
    return (
        <div className="card">
            <img src={foto} alt="Avatar" />
            <div className="card_container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
    )
}

export default PersonalInfo