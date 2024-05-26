import react from 'react'
import Circle from './MooScore';
import ReportInfo from './ReportInfo';
import styles from './styles/Report.module.css';
import cow from '../assets/cow_search.png';
import Tooltip from './Tooltip';
function Report(data){
    return(
        <div className = {styles.report}>
            <div className = {styles.title}>
                <h1>your moove report</h1>
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
                        <Circle highlighted={78}/>
                        <img></img>
                    </div>
                    <div className = {styles.projectedv}>
                        <h2>project value</h2>
                    </div>
                    <div className = {styles.cow}>
                        <img src={cow}></img>
                    </div>

                </div>

            </div>
            <div className = {styles.bottom}>
            <div className= {styles.mortgagec}>
            <h2>Mortgage</h2>

            <div>  <Tooltip head = 'Mortgages' hover = 'learn more' body = "A mortgage is a long-term loan from a financial institution used to purchase or maintain a home. The borrower agrees to repay this loan in equal, MOOnthly payments over a certain time span, with
their home as a collateral. Be sure to pay them on time, and be smart with your MOOney!" />
              
              </div>
          
            </div>
            </div>
        </div>
    )
}
export default Report;