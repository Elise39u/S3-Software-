import React from "react";
import '../css/songSummary.css'
import '../css/songOverview.css'
import {Button, Table} from "react-bootstrap";

class SongSummary extends React.Component {
    render() {
        return (
            <div>
                <h2 className="ogTitle"> Song summary</h2>
                <Button type="info"> See your own performance for this song </Button>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Difficulty</th>
                        <th>Star rating</th>
                        <th>Maxes out</th>
                        <th>Max %</th>
                        <th>Completion per a good %</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Easy</td>
                        <td colSpan={4}>Not added in official pjd by sega</td>
                    </tr>
                    <tr>
                        <td>Normal</td>
                        <td>5.5</td>
                        <td>No</td>
                        <td>105.01</td>
                        <td>0.048</td>
                    </tr>
                    <tr>
                        <td>Hard</td>
                        <td>6.5</td>
                        <td>Yes</td>
                        <td>106.24</td>
                        <td>0.044</td>
                    </tr>
                    <tr>
                        <td>Extreme</td>
                        <td>8.5</td>
                        <td>No</td>
                        <td>105.14</td>
                        <td>0.032</td>
                    </tr>
                    <tr>
                        <td>Extra Extreme</td>
                        <td>9</td>
                        <td>No</td>
                        <td>104.56</td>
                        <td>0.025</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default SongSummary