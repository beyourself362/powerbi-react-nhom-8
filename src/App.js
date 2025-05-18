import React, { useState, useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import axios from 'axios';
import { loginRequest } from './authConfig';
// Import mock data nếu dùng
import mockData from './mock.json';
import Olap from './Olap';

function App() {
  const { instance, accounts } = useMsal();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (process.env.REACT_APP_USE_MOCK === 'true') {
      // Dùng mock data
      const timer = setTimeout(() => {
        setRows(mockData.value);
      }, 500);
      return () => clearTimeout(timer);
    }

    // Gọi API thật nếu không mock
    // Nếu chưa có active account, thực hiện login
    if (!instance.getActiveAccount()) {
      instance.loginPopup(loginRequest)
        .then(response => {
          instance.setActiveAccount(response.account);
        })
        .catch(error => console.error(error));
      return;
    }

    const fetchData = async () => {
      // Lấy token cho active account
      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account: instance.getActiveAccount()
      });
      const accessToken = response.accessToken;

      const api = axios.create({
        baseURL: 'https://api.powerbi.com/v1.0/myorg',
        headers: { Authorization: `Bearer ${accessToken}` }
      });

      const result = await api.get(
        `/groups/${process.env.REACT_APP_WORKSPACE_ID}/datasets/${process.env.REACT_APP_DATASET_ID}/tables/${process.env.REACT_APP_TABLE_NAME}/rows`
      );
      setRows(result.data.value);
    };

    fetchData();
  }, [instance, accounts]);

  return (
    <div>
      <h1>Dữ liệu Power BI</h1>
      <table>
        <thead>
          <tr>
            <th>Column1</th>
            <th>Column2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td>{row.Column1}</td>
              <td>{row.Column2}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Hiển thị OLAP demo khi cần */}
      {process.env.REACT_APP_USE_OLAP === 'true' && <Olap />}
    </div>
  );
}

export default App;