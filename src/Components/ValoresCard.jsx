import "./Styles.css";

const ValoresCard = () => {

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    const age = calculateAge("2003-02-09");

    return (
        <div className="valores_container">
          <div className="valores_card">
            {/* Contenedor de la descripción */}
            <div className="valores_text">
              <h2>About Me</h2>
              <p>
                I am <strong>Josefth Santiago Rocha</strong>, a passionate <strong>Full Stack Web Developer</strong>, 
                constantly seeking to improve and innovate in the world of technology. At <strong>{age} years old</strong>, 
                I have developed a strong sense of responsibility and commitment to my work and personal growth.
              </p>
              <p>
                My <strong>values</strong> define who I am: <strong>integrity, perseverance, respect, and continuous learning.</strong>  
                I firmly believe that discipline and consistency are the key to success, both in professional  
                and personal life.
              </p>
              <p>
                I am a <strong>team player</strong>, always willing to collaborate, listen, and help others grow.  
                I value honesty and transparency in every aspect of my life, and I am always looking for 
                ways to improve myself, both technically and as a person.
              </p>
              <p>
                Passionate about <strong>technology, innovation, and problem-solving</strong>, I face challenges  
                with a positive attitude and a strong desire to learn from every experience.
              </p>
            </div>
    
            {/* Contenedor de imágenes */}
            <div className="valores_images">
              <img src="https://picsum.photos/200" alt="Random 1" />
              <img src="https://picsum.photos/200" alt="Random 2" />
              <img src="https://picsum.photos/200" alt="Random 3" />
            </div>
          </div>
        </div>
      );
    };

export default ValoresCard;