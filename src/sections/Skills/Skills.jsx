import styles from './SkillsStyles.module.css';
import htmlIcon from '../../assets/html-5.svg';
import cssIcon from '../../assets/css.svg';
import jsIcon from '../../assets/js.svg';
import nodeIcon from '../../assets/nodejs.svg';
import reactIcon from '../../assets/reactjs.svg';
import reduxIcon from '../../assets/redux.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={htmlIcon} skill="HTML" />
        <SkillList src={cssIcon} skill="CSS" />
        <SkillList src={jsIcon} skill="JavaScript" />
        <SkillList src={nodeIcon} skill="Node.js" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={reactIcon} skill="React" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={reduxIcon} skill="Redux" />
      </div>
    </section>
  );
}

export default Skills;

