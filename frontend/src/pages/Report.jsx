import react from 'react'

import ReportInfo from './ReportInfo'
import './styles/Report.module.css'
function Report(){
    return(
        <div class = 'report'>
            <div class = 'title'>
                <h1></h1>
            </div>
            <div class = 'top'>
                <div class = 'top-l'>
                    <div class = 'photos'>
                        <p>home photos</p>
                    </div>
                    <div class = 'info'>
                        <div class = 'l-info'>
                            <ReportInfo text = 'sqft'/>
                            <ReportInfo text = 'beds'/>
                            <ReportInfo text = 'baths'/>
                        </div>
                        <div class = 'r-info'>
                            <ReportInfo text = 'stories'/>
                            <ReportInfo text = 'owner'/>
                            <ReportInfo text = 'detail'/>
                        </div>
                    </div>
                </div>
                <div class = 'top-r'>
                    <div class = 'score'>
                        <h2>mooscore</h2>
                        <h2>project value</h2>
                        <img></img>
                    </div>
                </div>

            </div>
            <div class = 'bottom'>
                <h2>mortgage plan</h2>
            </div>
            
        </div>
    )
}
export default Report;