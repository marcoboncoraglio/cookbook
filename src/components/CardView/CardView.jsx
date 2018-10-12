import React from 'react';
import { Grid, Col, Thumbnail } from 'react-bootstrap'
import './CardView.css'

const CardView = props => (
    <Grid bsClass="container nopadding">
        {props.recipies.map((entry) => {
            return (
                <Col key={entry.recipe.uri} xs={12} md={3} bsClass="col">
                    <Thumbnail bsClass="thumbnail" src={entry.recipe.image} alt={entry.recipe.label} href={entry.recipe.url}>
                        <h4>{ entry.recipe.label }</h4>
                        <p>by {entry.recipe.source}</p>
                    </Thumbnail>                    
                </Col>
                )
            })}
    </Grid>
)

export default CardView;