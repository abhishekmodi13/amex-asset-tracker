import * as React from 'react';
import Button from 'react-bootstrap/Button';

const Inventory = () => {
  return (
    <div>
      <table className="table  table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">gHandle</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <Button href="/updateAsset/1">Edit</Button>{' '}
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <Button href="/updateAsset/2">Edit</Button>{' '}
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>
              <Button href="/updateAsset/3">Edit</Button>{' '}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
