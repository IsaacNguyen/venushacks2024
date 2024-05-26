import react from 'react'
import Circle from './MooScore';
import { Line } from 'react-chartjs-2';
import ReportInfo from './ReportInfo';
import styles from './styles/Report.module.css';
import cow from '../assets/cow_search.png';
function Report(data){
    // IMAGE DATA
    //const savedPropertyData = localStorage.getItem('propertyData');


    // const latitude = savedPropertyData.Records[0].OwnerAddress.latitude
    // const longitude = savedPropertyData.Records[0].OwnerAddress.longitude

    
    // const callStreetViewApi = (latitude, longitude) => {
    //     var url = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location=";
    //     url += latitude + "," + longitude + "heading=151.78&pitch=-0.76&key=AIzaSyCU2OQ41M3mCpUPXloeWVIxadg-H21DP3A";
    // }
    


    // GRAPH DATA
    // const defaultYear = "N/A";
    // const defaultValue = 0;

    // const valuationYear = getLabelOrDefault(graphData.Records[0], ['EstimatedValue', 'ValuationDate'], defaultYear).slice(0, 4);
    // const yearAssessed = getLabelOrDefault(graphData.Records[0], ['Tax', 'YearAssessed'], defaultYear);
    // const lastSaleDate = getLabelOrDefault(graphData.Records[0], ['SaleInfo', 'AssessorLastSaleDate'], defaultYear).slice(0, 4);
    // const futureYear = String(+valuationYear + 5);

    // const estimatedValue = getDataOrDefault(graphData.Records[0], ['EstimatedValue', 'EstimatedValue'], defaultValue);
    // const assessedValueTotal = getDataOrDefault(graphData.Records[0], ['Tax', 'AssessedValueTotal'], defaultValue);
    // const lastSaleAmount = getDataOrDefault(graphData.Records[0], ['SaleInfo', 'AssessorLastSaleAmount'], defaultValue);
    // const futureValue = (estimatedValue - assessedValueTotal) * (1 + 0.04) ** 5 + estimatedValue;




    // MORTGAGE DATA
    // const calculateMortgage = (interest, years, principal_amount) => {
    //     const a = interest * (1 + interest)**(years * 12)
    //     const b = (1 + interest)**(years * 12) - 1
    //     return principal_amount * (a/b)
    // }

    return(
        
        <div className = {styles.report}>
            <div className = {styles.title}>
                <h1>your moove report</h1>
            </div>
            <div className = {styles.top}>
                <div className = {styles.topl}>
                {/* <img
                    src={url}
                    alt="Street View"
                /> */}
                    <div className = {styles.info}>
                        <div className = {styles.linfo}>
                            <ReportInfo text={`📏${data.sqft} sqft`} />
                            <ReportInfo text ={`🛏️${data.beds} beds`}/>
                            <ReportInfo text ={`🛁${data.baths} baths`}/>
                        </div>
                        <div className = {styles.rinfo}>
                            <ReportInfo text ={`🏠${data.stories} stories`}/>
                            <ReportInfo text ={`🐮${data.owner}`}/>
                            {/* <div>
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
                            </div> */}
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
             
              
              
            </div>
            </div>
        </div>
    )
}
export default Report;