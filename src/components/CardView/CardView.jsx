import React from 'react';
import { Grid, Col, Thumbnail } from 'react-bootstrap'
import './CardView.css'

const CardView = props => (
    <Grid bsClass="container nopadding">
        {props.recipies.map((entry) => {
            return (
                <Col xs={12} md={3} bsClass="col">
                    <Thumbnail bsClass="thumbnail" src={entry.recipe.image} alt={entry.recipe.label} href={entry.recipe.url}>
                        <p className="text-center">by { entry.recipe.label }</p>
                    </Thumbnail>                    
                </Col>
                )
            })}
    </Grid>
    
)

export default CardView;