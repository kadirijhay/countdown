import React from "react"

class Countdown extends React.Component {
    state = {
        day: "",
        daysToGo: "",
        hoursToGo: "",
        minutesToGo: "",
        secondsToGo: ""
    }

    componentDidMount() {
        setInterval(() => {
            const currentDate = new Date().getTime()
    
            const dayStarted = new Date("May 20, 2019, 00:00").getTime()
            const daysDifference = currentDate - dayStarted
    
            const daysSoFar = Math.ceil(daysDifference / (1000 * 60 * 60 * 24))

            const countDownTo = new Date("August 28, 2019, 00:00").getTime()
            const difference = countDownTo - currentDate

            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((difference % (1000 * 60)) / 1000)

            this.setState({
                day: daysSoFar,
                daysToGo: days,
                hoursToGo: hours,
                minutesToGo: minutes,
                secondsToGo: seconds
            })
        }, 1000)

    }

    render() {
        const styles = {
            color: "red",
            border: "none"
        }

        let dayToDisplay
        this.state.day <= 100 ?
        dayToDisplay = this.state.day :
        dayToDisplay = 100

        return(
            <div className="countdown">
                <h1>DAY <span style={{color:"#003E73"}}>{dayToDisplay}</span></h1>
                <h2>Challenge Started: May 20th, 2019</h2>
                {
                    this.state.day >= 101 ?
                    <div>
                        <h1 style={styles}>Challenge has ended!</h1>
                        <h3>Challenge ended August 27th, 2019</h3>
                    </div> :
                    <div className="timer">
                        <h3>You have:</h3>
                        <h2>
                            <span style={{display: this.state.daysToGo === 0 && "none"}}>
                                <span style={styles}>{this.state.daysToGo}</span>D :
                            </span>

                            <span style={{
                                display: this.state.daysToGo === 0 &&
                                this.state.hoursToGo === 0 && "none"
                            }}>
                                <span style={styles}> {this.state.hoursToGo}</span>H :
                            </span>

                            <span style={{
                                display: this.state.daysToGo === 0 &&
                                this.state.hoursToGo === 0 &&
                                this.state.minutesToGo === 0 &&  "none"
                            }}>
                                <span style={styles}> {this.state.minutesToGo}</span>M :
                            </span>

                            <span style={styles}> {this.state.secondsToGo}</span>S
                        </h2>
                        <h3>to go</h3>
                    </div>
                }
            </div>
        ) 
    }
}

export default Countdown