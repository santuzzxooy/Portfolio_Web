import "./Styles.css";

const DescriptionCard = () => {
  return (
    <div className="description_container">
      <div className="description_card">
        <h2>About My Experience</h2>
        <p>
          I am a Full Stack Developer with experience in technologies such as 
          <strong> JavaScript, TypeScript, React.js, and Next.js</strong> for building dynamic 
          and responsive user interfaces.
        </p>
        <p>
          On the backend, I work with <strong>Node.js, Express.js</strong>, and frameworks like 
          <strong> Spring Boot</strong> to develop scalable and efficient APIs.
        </p>
        <p>
          I have experience managing relational and NoSQL databases, including 
          <strong> MongoDB, PostgreSQL, MySQL, and Oracle</strong>, ensuring optimal data 
          handling.
        </p>
        <p>
          I am also proficient in <strong>CI/CD, GitHub Actions</strong>, and best practices in 
          version control with <strong>Git</strong>.
        </p>
        <p>
          For UI/UX design, I use <strong>Tailwind CSS and Bootstrap</strong> to create 
          modern and attractive interfaces.
        </p>
      </div>
    </div>
  );
};

export default DescriptionCard;