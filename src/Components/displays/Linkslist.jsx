import React from 'react';
import '../styles/links-list.css'


const Linkslist = () => {
    function FieldReference() {
        return (
            <>
                <p className='fieldreference' style={{ marginBottom: '20px' }}>Field Reference</p>
                <table>
                    <thead>
                        <tr>
                            <th>Field Name</th>
                            <th>Description</th>
                            <th>Data Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>name</td>
                            <td>Monster's name</td>
                            <td>String</td>
                        </tr>

                        <tr>
                            <td>imgUrl</td>
                            <td>Monster's image</td>
                            <td>String</td>
                        </tr>

                        <tr>
                            <td>firstAppear</td>
                            <td>Monster's first appeared on screen</td>
                            <td>String</td>
                        </tr>

                        <tr>
                            <td>level</td>
                            <td>Monster's power level</td>
                            <td>String</td>
                        </tr>

                        <tr>
                            <td>yearCreated</td>
                            <td>Year monster was created</td>
                            <td>Number</td>
                        </tr>

                        <tr>
                            <td>link</td>
                            <td>Monster's descriptive information</td>
                            <td>String</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }


    function Endpoints() {
        return (
            <>
                <p className='fieldreference' style={{ marginBottom: '20px' }}>API Calls & Endpoints</p>
                <table>
                    <thead>
                        <tr>
                            <th>HTTP Medthod</th>
                            <th>Endpoint</th>
                            <th>What it does</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GET</td>
                            <td>/api/monster</td>
                            <td>Returns an array of all Monster in our database.</td>
                        </tr>

                        <tr>
                            <td>GET</td>
                            <td>/api/monster/name/:name</td>
                            <td>Returns an array of Monster based on their name.
                                The array will contain one Monster.</td>
                        </tr>

                        <tr>
                            <td>GET</td>
                            <td>/api/monster/year/:year</td>
                            <td>Returns an array of Monster based on the year they were created.
                                The array will contain one or more Monsters.</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }

    return (
        <div className='list-container'>
            <div className='list-children-one'>
                <p className='fieldreference' style={{ marginBottom: '20px' }}>Documentation</p>
                <ul style={{ margin: '0' }}>
                    <li>Get the full list of Monster: <span className='api-route'>/api/monster</span></li>
                    <li>Query the API for a specific Monster by name by passing the name in the URL: <span className='api-route'>/api/monster/name</span></li>
                    <p className='example'>Capitlize the first intial of the monster's name. Examples:</p>
                    <ul>
                        <li className='highlighted'>/api/monster/name/Mechagodzilla</li>
                        <li className='highlighted'>/api/monster/name/KingCaesar</li>
                        <li className='highlighted'>/api/monster/year/1994</li>
                    </ul>
                </ul>
            </div>

            <div className='list-children-three'>
                <Endpoints />
            </div>

            <div className='list-children-two'>
                <FieldReference />
            </div>
        </div>
    )
}

export default Linkslist