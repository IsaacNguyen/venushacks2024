import React from 'react';
import { Line } from 'react-chartjs-2';

const graphData = JSON.parse(localStorage.getItem('propertyData'));

function getLabelOrDefault(record, path, defaultValue) {
    return path.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : defaultValue, record);
}

function getDataOrDefault(record, path, defaultValue) {
    const value = path.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : defaultValue, record);
    return typeof value === 'number' ? value : +value;
}

function Graph() {
    const defaultYear = "N/A";
    const defaultValue = 0;

    const valuationYear = getLabelOrDefault(graphData.Records[0], ['EstimatedValue', 'ValuationDate'], defaultYear).slice(0, 4);
    const yearAssessed = getLabelOrDefault(graphData.Records[0], ['Tax', 'YearAssessed'], defaultYear);
    const lastSaleDate = getLabelOrDefault(graphData.Records[0], ['SaleInfo', 'AssessorLastSaleDate'], defaultYear).slice(0, 4);
    const futureYear = String(+valuationYear + 5);

    const estimatedValue = getDataOrDefault(graphData.Records[0], ['EstimatedValue', 'EstimatedValue'], defaultValue);
    const assessedValueTotal = getDataOrDefault(graphData.Records[0], ['Tax', 'AssessedValueTotal'], defaultValue);
    const lastSaleAmount = getDataOrDefault(graphData.Records[0], ['SaleInfo', 'AssessorLastSaleAmount'], defaultValue);
    const futureValue = (estimatedValue - assessedValueTotal) * (1 + 0.04) ** 5 + estimatedValue;

    const calculateMortgage = (interest, years, principal_amount) => {
        const a = interest * (1 + interest)**(years * 12)
        const b = (1 + interest)**(years * 12) - 1
        return principal_amount * (a/b)
    }

    return (
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
            <br></br>

        </div>
    );
}

export default Graph;

/*
A mortgage is a long-term loan from a financial institution used to purchase or maintain a home.
The borrower agrees to repay this loan in equal, monthly payments over a certain time span, with
their home as a collateral. Be sure to pay them on time, and be smart with your MOOney!
*/

/*
Real estate fraud is UDDERly serious! Over 25% of all real estate transactions involve 
some sort of fraud. Title frauds and rental scams are the most popular of those today,
where scammers pose fake listings or pose as the property owner to sell their property. That's 
why you can trust moove to protect your next purchase through our SSN and name verification!
*/

/*
Housing markets are MOOving all the time! That's why moove analyzes trends in housing 
market data for you, so you can make the MOOst informed decision with your hard-earned
MOOney!
*/

