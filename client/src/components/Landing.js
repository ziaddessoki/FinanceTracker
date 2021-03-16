import React from 'react'
import hand from '../assets/hand.gif'
import cash from '../assets/cash.gif'
import cash2 from '../assets/cash-clear.gif'

const Landing = () => {
    return (
        <div>
            <p1>
                Experience a
                fresh way to
                manage money
        </p1>
            <br />
            <p1>Reach your goals with personalized insights,
            custom budgets, spend tracking, and subscription
            monitoring.</p1>

            <img src={hand} alt="hand" />

            <br />
            <h7>Stay focused on your financial goals.</h7>

            <h7>
                Improve your spending habits with custom
                goals that keep you going. Save for a home,
                crush debt, and prepare for the future.
            </h7>
            <img src={cash2} alt="hand" />
        </div>
    )
}

export default Landing
