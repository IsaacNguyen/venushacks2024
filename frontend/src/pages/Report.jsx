import react from 'react'

import ReportInfo from './ReportInfo'
import styles from './styles/Report.module.css'
function Report(){
    return(
        <div className = {styles.report}>
            <div className = {styles.title}>
                <h1></h1>
            </div>
            <div className = {styles.top}>
                <div className = {styles.topl}>
                    <div className = {styles.photos}>
                        <p>home photos</p>
                    </div>
                    <div className = {styles.info}>
                        <div className = {styles.linfo}>
                            <ReportInfo text = 'sqft'/>
                            <ReportInfo text = 'beds'/>
                            <ReportInfo text = 'baths'/>
                        </div>
                        <div className = {styles.rinfo}>
                            <ReportInfo text = 'stories'/>
                            <ReportInfo text = 'owner'/>
                            <ReportInfo text = 'detail'/>
                        </div>
                    </div>
                </div>
                <div className = {styles.topr}>
                    <div className = {styles.score}>
                        <h2>mooscore</h2>
                        <h2>project value</h2>
                        <img></img>
                    </div>
                </div>

            </div>
            <div className = {styles.bottom}>
                <h2>mortgage plan</h2>
            </div>
            
        </div>
    )
}
export default Report;