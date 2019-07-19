import React from "react"

class Countdown extends React.Component {
    state = {
        daysDone: "",
        daysLeft: ""
    }

    componentDidMount() {
        setInterval(() => {
            const currentDate = new Date().getTime()
    
            const dayStarted = new Date("May 20, 2019, 00:00").getTime()
            const daysDifference = currentDate - dayStarted
    
            const daysSoFar = Math.ceil(daysDifference / (1000 * 60 * 60 * 24))

            const countDownTo = new Date("August 27, 2019, 23:59").getTime()
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
            color: "red"
        }

        return(
            <div className="countdown">
                <h1>DAY <span style={{color:"#003E73"}}>{this.state.day}</span></h1>
                <div className="timer">
                    <h2>Challenge Started: May 20th, 2019</h2>
                    {
                        this.state.day === 100 ? 
                        <h1 style={styles}>Challenge has ended!</h1> :
                        <div>
                            <h3>You have:</h3>
                            <h1>
                                <span style={styles}>{this.state.daysToGo}</span>D :
                                <span style={styles}> {this.state.hoursToGo}</span>H :
                                <span style={styles}> {this.state.minutesToGo}</span>M :
                                <span style={styles}> {this.state.secondsToGo}</span>S
                            </h1>
                            <h3>to go</h3>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Countdown