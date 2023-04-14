import React from 'react'

const StatisticLine = ({text, value}) => {

    return(
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

export const Statistics = ({good, neutral, bad}) => {
    const totalComments = () => good + neutral + bad
    const averageComments = () => ((good - bad) / totalComments()).toFixed(1)
    const positivePercentage = () => ((good / totalComments())*100).toFixed(1) + ' %'

      

    if(totalComments() === 0){
        return(
            <p>No feedback given</p>
        )
    }

  return (
    <table>
        <tbody>
            <StatisticLine text='good' value={good}/>
            <StatisticLine text='neutral' value={neutral}/>
            <StatisticLine text='bad' value={bad}/>
            <StatisticLine text='all' value={totalComments()}/>
            <StatisticLine text='average' value={averageComments()}/>
            <StatisticLine text='positive' value={positivePercentage()}/>
        </tbody>
    </table>
  )
}
