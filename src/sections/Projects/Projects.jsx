import styles from './ProjectsStyles.module.css';
import epharma from '../../assets/project-photo.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={epharma}
          link="https://github.com/Shyamyadav45/E-PHARMA1.git"
          h3="E-PHARMA"
          p="medicine website"
        />
       
      </div>
    </section>
  );
}

export default Projects;
