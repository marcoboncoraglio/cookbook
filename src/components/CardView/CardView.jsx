import React from 'react';
import { Grid, Col, Thumbnail } from 'react-bootstrap'
import Equalizer from 'react-equalizer'
import './CardView.css'

const CardView = props => (
    <Grid bsClass="container nopadding">
        <Equalizer>
            {props.recipies.map((entry) => {
                return (
                    <Col key={entry.recipe.uri} xs={6} s={4} md={3} bsClass="col">
                        <Thumbnail bsClass="thumbnail" src={entry.recipe.image} alt={entry.recipe.label} href={entry.recipe.url}>
                            <h4>{ entry.recipe.label }</h4>
                            <p>by {entry.recipe.source}</p>
                        </Thumbnail>                    
                    </Col>
                    )
            })}
        </Equalizer>
    </Grid>
)

export default CardView;