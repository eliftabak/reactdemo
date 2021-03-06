import React, { Component } from 'react';
import Poster from './Poster';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

export default class SimilarMovieList extends Component {

    render() {
        const style = {
            display: 'flex',
            flexWrap: 'wrap'
        }

        let movies = this.props.movies.filter(function (movie) {
            return movie.poster_path != null;
        }).map(function (movie) {
            return (
                <Col xs={5} sm={3} md={3} key={movie.id} >
                    <Link to={'/movie/' + movie.id} ><Poster info id={movie.id} path={movie.poster_path} responsive /></Link>
                </Col>
            );
        });

        return (
            <Grid fluid={true}>
                <Row style={style}>
                    {movies}
                </Row>
            </Grid>
        );
    }
}
