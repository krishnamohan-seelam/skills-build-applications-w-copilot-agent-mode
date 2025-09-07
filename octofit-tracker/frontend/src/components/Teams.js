import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `${process.env.REACT_APP_CODESPACE_URL}/api/teams/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Teams API endpoint:', endpoint);
        console.log('Fetched teams:', data);
        setTeams(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Teams</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{team.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams;
