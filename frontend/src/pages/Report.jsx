
import Circle from './MooScore';
import ReportInfo from './ReportInfo';
import styles from './styles/Report.module.css';
import cow from '../assets/cow_search.png';
import Tooltip from './Tooltip';

const propData = JSON.parse(localStorage.getItem('propertyData'))
const baths = propData.Records[0].IntRoomInfo.BathCount;
const beds = propData.Records[0].IntRoomInfo.BedroomsCount;
const sqft = propData.Records[0].PropertySize.AreaBuilding;
const stories = propData.Records[0].IntRoomInfo.StoriesCount;
const owner = propData.Records[0].PrimaryOwner.Name1Full;
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
                            <ReportInfo text ={`🐮 ${owner}`}/>
                            <ReportInfo text={`📏 ${sqft} sqft`} />
                           
                        </div>
                        <div className = {styles.rinfo}>
                            {/* <ReportInfo text ={`🏠 ${stories} stories`}/> */}
                            <ReportInfo text ={`🛏️ ${beds} beds`}/>
                            <ReportInfo text ={`🛁 ${baths} baths`}/>
                            {/* <ReportInfo text ={`📝 ${data.detail} `}/> */}
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
             <Tooltip/>
              
              
            </div>
            </div>
        </div>
    )
}