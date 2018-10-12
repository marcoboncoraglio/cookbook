import React from 'react';
import './Form.css';
import { Grid,  Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const SearchForm = props => (
    <Grid>
        <Form onSubmit={props.getRecepie}>
            <FormGroup bsSize="large">
                <ControlLabel bsClass="control-label">Enter a recipie, ingredient or any related keyword:</ControlLabel>
                <FormControl bsClass="form-control enter-text" type="text" name="recipie" placeholder="Tomato Soup" ></FormControl>
                <Button bsClass="search-btn btn" bsSize="large" type="submit">Search</Button>
            </FormGroup>
        </Form>
    </Grid>
    
)

export default SearchForm;