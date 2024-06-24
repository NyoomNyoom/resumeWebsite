import React from 'react'

export default function Footer() {
    return(
        <div className="footer">
            {/* I have used rel="norefferer" here to cover a vulnerability that was reported while I was using target to open a new tab. */}
            <p>To see the development of this resume wesbite please visit my <a href='https://www.github.com/nyoomnyoom/resumeWebsite' target="_blank" rel="noreferrer">github repository</a>.</p>
        </div>
    )
}