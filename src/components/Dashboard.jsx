import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
    <h1>Axios Application</h1>
    <p>This is an axios application which uses the following api end-points.</p>
  <table>
    <thead>
      <tr>
        <th>API ENDPOINT</th>
        <th>REQUEST TYPE</th>
        <th>DESCRIPTION</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>/view</td>
        <td>GET</td>
        <td>Fetches all the users/resources in the collection</td>
      </tr>
      
      <tr>
        <td>/view/:id</td>
        <td>GET</td>
        <td>Fetches a single user/resource</td>
      </tr>

      <tr>
        <td>/create</td>
        <td>POST</td>
        <td>Creates a new user/resource based on the request data</td>
      </tr>

      <tr>
        <td>/edit</td>
        <td>PUT</td>
        <td>Replaces the entire identified user/resource with the request data</td>
      </tr>

      <tr>
        <td>/edit</td>
        <td>DELETE</td>
        <td>Deletes the identified user/resource</td>
      </tr>
      </tbody>
  </table>
  
  <div>
    <h3>The axios application has the following features:</h3>
    <ul>
      <li>Users can create a new User detail</li>
      <li>Users can view all user details</li>
      <li>Users can select a single user and edit/update it!</li>
      <li>Users can delete a user at a time</li>
    </ul>
  </div>
</div>
  )
}

export default Dashboard