import { Line } from 'react-chartjs-2';
import react from 'react'
import React, {useState, useEffect} from 'react';
import Circle from './MooScore';
import ReportInfo from './ReportInfo';
import styles from './styles/Report.module.css';
import cow from '../assets/cow_search.png';
import house from '../assets/180047825_2.jpg'
import Tooltip from './Tooltip';

function Report(data){
        
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

    const calculateMortgage = (interest, years, principal_amount) => {
        const a = ((interest/100)/12) * Math.pow((1+((interest/100)/12)), (years * 12));
        console.log(a)
        const b = (Math.pow(1 + ((interest/100)/12), (years * 12)) - 1);
        console.log(b)
        console.log(principal_amount)
        return principal_amount * (a/b);
    }

    const thirtyYearMort = calculateMortgage(7.783, 30, + estimatedValue).toFixed(2);

    const thirtyYearMortFHA = calculateMortgage(7.08, 30, + estimatedValue).toFixed(2);

    const fifteenYearMort = calculateMortgage(7.03, 15, + estimatedValue).toFixed(2);


    const calculateScore = (pV, pS) => {
        const price = + pV;
        const sqft = + pS;
        const idealFutureValue = price * Math.pow(1.05,5);
        const idealSqft = 2299;
        const futureValueScore = futureValue / idealFutureValue;
        const sqftScore = 1 - Math.abs(sqft - idealSqft) / idealSqft;
        console.log(sqftScore);
        console.log(futureValueScore);
        const weights = { price: 4, futureValue: 4 };
        console.log(weights.price);
        const totalScore = (futureValueScore * 0.5) + (sqftScore * .4);
        console.log(totalScore);
    
        return Math.round(Math.max(0, Math.min(totalScore, 1)) * 100); // Scale to 0-100, ensure score is within bounds
    };
    const score = calculateScore(estimatedValue, sqft);
    
        const [mortgage, setMortgage] = useState('');
    
    const handleChange = (e) => {
        setMortgage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateMortgage(e);
    }


    return(
        <div className = {styles.report}>
            <div className = {styles.title}>
                <h1>your moove report</h1>
            </div>
            <div className = {styles.top}>
                <div className = {styles.topl}>
                    <div className = {styles.photos}>
                        <img src={house}></img>
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
                        <div className = {styles.tip}>
                        <Tooltip head = 'MooScore' hover = 'Learn More' body = "What a MOOvelous moo moo score! Moove designates a score to your chosen property based on a variety of criteria, including estimated property value, square footage, and its projected value. The higher the score, the MOORE we think you're gonna love it!" />
                        </div>
                        <h3>{score}</h3>
                        <img></img>
                    </div>
                    <div className = {styles.projectedv}>
                        <h2>projected value</h2>
                        <div className = {styles.tip}>
                        <Tooltip head = 'Projected Value' hover = 'Learn More' body = "Housing markets are MOOving all the time! That's why Moove analyzes trends in housing market data for you, so you can make the MOOst MOOvelous decisions with your hard-earned MOOlah!" />
                        </div>
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
                    </div>
                    <div className = {styles.cow}>
                        <img src={cow}></img>
                    </div>

                </div>

            </div>
            <div className = {styles.bottom}>
            <div className= {styles.mortgagec}>
   
                <h2>Mortgage Calculator </h2>
                <div className = {styles.tip}>
 <Tooltip head = 'Mortgages' hover = 'Learn More About Mortgages' body = "A mortgage is a long-term loan from a financial institution used to purchase or maintain a home. The borrower agrees to repay this loan in equal, MOOnthly payments over a certain time span, with their home as a collateral. Be sure to pay them on time, and be smart with your MOOney!" />
                        </div>
                <h3>30-yr fixed:</h3>
                <h2>$ {thirtyYearMort}</h2>
                <h3>30-yr fixed FHA</h3>
                <h2>$ {thirtyYearMortFHA}</h2>
                <h3>15-yr fixed</h3>
                <h2>$ {fifteenYearMort}</h2>
                        
              </div>
   
              
              
            
            </div>
           
        </div>
    )
}
export default Report;