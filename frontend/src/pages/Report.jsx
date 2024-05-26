import { Line } from 'react-chartjs-2';
import MooScore from './MooScore';
import ReportInfo from './ReportInfo';
import styles from './styles/Report.module.css';

const propData = JSON.parse(localStorage.getItem('propertyData'))
const baths = propData.Records[0].IntRoomInfo.BathCount;
const beds = propData.Records[0].IntRoomInfo.BedroomsCount;
const sqft = propData.Records[0].PropertySize.AreaBuilding;
const stories = propData.Records[0].IntRoomInfo.StoriesCount;
const owner = propData.Records[0].PrimaryOwner.Name1Full;

const defaultYear = "N/A";
const defaultValue = 0;

function getLabelOrDefault(record, path, defaultValue) {
    return path.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : defaultValue, record);
}

function getDataOrDefault(record, path, defaultValue) {
    const value = path.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : defaultValue, record);
    return typeof value === 'number' ? value : +value;
}

const valuationYear = getLabelOrDefault(propData.Records[0], ['EstimatedValue', 'ValuationDate'], defaultYear).slice(0, 4);
const yearAssessed = getLabelOrDefault(propData.Records[0], ['Tax', 'YearAssessed'], defaultYear);
const lastSaleDate = getLabelOrDefault(propData.Records[0], ['SaleInfo', 'AssessorLastSaleDate'], defaultYear).slice(0, 4);
const futureYear = String(+valuationYear + 5);

const estimatedValue = getDataOrDefault(propData.Records[0], ['EstimatedValue', 'EstimatedValue'], defaultValue);
const assessedValueTotal = getDataOrDefault(propData.Records[0], ['Tax', 'AssessedValueTotal'], defaultValue);
const lastSaleAmount = getDataOrDefault(propData.Records[0], ['SaleInfo', 'AssessorLastSaleAmount'], defaultValue);
const futureValue = (estimatedValue - assessedValueTotal) * (1 + 0.04) ** 5 + estimatedValue;

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
                        {/* <Circle highlighted={data.score}/> */}
                        <img></img>
                    </div>
                    <div className = {styles.projectedv}>
                        <h2>project value</h2>
                    </div>
                </div>

            </div>
            <div className = {styles.bottom}>
            <div className= {styles.mortgagec}>
                <div>
                    <Line
                        data={{
                            labels: [lastSaleDate, yearAssessed, valuationYear, futureYear],
                            datasets: [
                                {
                                    label: "Property Value Projection",
                                    data: [lastSaleAmount, assessedValueTotal,  estimatedValue, futureValue],
                                    fill: false,
                                    borderColor: 'rgb(75, 192, 192)',
                                    tension: 0.1
                                },
                            ],
                        }}
                    />
                    </div>
              <small>what's a mortgage?</small>
              </div>
            </div>
            
        </div>
    )
}
export default Report;