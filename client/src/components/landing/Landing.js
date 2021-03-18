import React from 'react'
import hand from '../../assets/hand.gif'
import cash from '../../assets/cash.gif'
import cash2 from '../../assets/cash-clear.gif'

const Landing = () => {
    return (
        <div>
            <h7>Experience a way to manage money</h7>
            <br />
            <p1>Reach your goals with personalized insights,
            custom budgets, spend tracking, and subscription
            monitoring.</p1>

            <img src={hand} alt="hand" className="imgLanding" />

            <br />
            <h7>Stay focused on your financial goals.</h7>
            <br />
            < p1 >
                Improve your spending habits with custom
                goals that keep you going.Save for a home,
                crush debt, and prepare for the future.
            </p1>
            <img src={cash2} alt="hand" className="imgLanding" />
            <div className="clearfix"></div>
            <button className="btn incomeBtn"></button>
        </div>
    )
}

export default Landing
