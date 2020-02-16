import * as React from 'react'
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import { style } from 'typestyle'

export interface Festival {
  recordName: string
  bands: Band[]
}

interface Band {
  name: string
  festivals: string[]
}

const headerStyle = style({
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '30px'
})

const cardStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: '12px',
  color: 'blue',
  border: '2px solid blue'
})

export const Festivals = (props: { festivals: Festival[]}) => {
  const allFestivals = props.festivals
  return (
    <>
    <div className={headerStyle}>Music Festival Data</div>
    {
      allFestivals.map((festival, i) => (
          <Card key={i} className={cardStyle}>
            {festival.recordName}
            <CardContent>
              {
                festival.bands.map((band, j) => (
                  <span key={j}>
                    <p>{band.name}</p>
                    {
                      band.festivals.map((f, k) => (
                        <li key={k}>{f}</li>
                      ))
                    }
                  </span>
                ))
              }
            </CardContent>
          </Card>
      ))
    }
    </>
  )
}