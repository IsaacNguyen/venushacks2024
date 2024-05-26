import react from 'react'
import Circle from './Circle';
import ReportInfo from './ReportInfo';
import styles from './styles/Report.module.css';
function Report(data){
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
                            <ReportInfo text={`📏${data.sqft} sqft`} />
                            <ReportInfo text ={`🛏️${data.beds} beds`}/>
                            <ReportInfo text ={`🛁${data.baths} baths`}/>
                        </div>
                        <div className = {styles.rinfo}>
                            <ReportInfo text ={`🏠${data.stories} stories`}/>
                            <ReportInfo text ={`🐮${data.owner}`}/>
                            <ReportInfo text ={`📝${data.detail} `}/>
                        </div>
                    </div>
                </div>
                <div className = {styles.topr}>
                    <div className = {styles.score}>
                        <h2>mooscore</h2>
                        <Circle highlighted={data.score}/>
                        <img></img>
                    </div>
                    <div className = {styles.projectedv}>
                        <h2>project value</h2>
                    </div>
                </div>

            </div>
            <div className = {styles.bottom}>
            <div className= {styles.mortgagec}>
             
              <small>what's a mortgage?</small>
              </div>
            </div>
            
        </div>
    )
}
export default Report;