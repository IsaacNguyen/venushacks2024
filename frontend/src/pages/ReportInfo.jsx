
import styles from './styles/ReportInfo.module.css';
function ReportInfo({text}){
    return(
        <div className = {styles.report1}>
            <p>{text}</p>
        </div>
    )
}
export default ReportInfo;