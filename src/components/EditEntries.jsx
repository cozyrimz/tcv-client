import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { sampleData } from '../../testData/testCityData';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const deleteApi = async (oldData, refreshData) => {
  const res = await axios
    .delete(`${process.env.API_URL}/deleteHub/${oldData._id}`, { timeout: 3000 })
    .catch(err => console.error(err));
  refreshData();
};
const editApi = async (newData, oldData, refreshData) => {
  const res = await axios
    .post(`${process.env.API_URL}/updateHub`, newData, { timeout: 3000 })
    .catch(err => console.error(err));
  refreshData();
};

const tableOptions = {
  search: true,
  sorting: true,
};
export default function EditEntries() {
  const [tableData, setTableData] = useState([]);

  const refreshData = async () => {
    const res = await axios.get(`${process.env.API_URL}/getHubs`, { timeout: 4000 }).catch(err => console.error(err));
    if (res && res.data && res.data.hubs) setTableData(res.data.hubs);
  };

  useEffect(() => {
    refreshData();
  }, []);
  return (
    <div style={{ maxWidth: '100%', margin: 15 }}>
      <MaterialTable
        options={tableOptions}
        editable={{
          onRowUpdate: (newData, oldData) => editApi(newData, oldData, refreshData),
          onRowDelete: oldData => deleteApi(oldData, refreshData),
        }}
        columns={[
          { title: '_id', field: '_id', hidden: true },
          { title: 'Hub Name', field: 'name' },
          {
            title: 'City',
            field: 'city',
            editComponent: ({ onChange, value }) => {
              return (
                <Select
                  labelId="edit-select-mat-table"
                  id="edit-select-mat-table-id"
                  value={value}
                  onChange={e => onChange(e.target.value)}
                >
                  <MenuItem value={'Austin'}>Austin</MenuItem>
                  <MenuItem value={'Dallas'}>Dallas</MenuItem>
                  <MenuItem value={'Houston'}>Houston</MenuItem>
                  <MenuItem value={'San Antonio'}>San Antonio</MenuItem>
                </Select>
              );
            },
          },
          { title: 'Address', field: 'address' },
          { title: 'Zipcode', field: 'zipcode' },
          { title: 'Doses', field: 'doses' },
          {
            title: 'URL',
            field: 'url',
            render: rowData => rowData.url[0].url,
            editComponent: props => {
              return (
                <TextField
                  name="url"
                  label="URL"
                  defaultValue={props.value[0].url}
                  onChange={e => {
                    props.onChange(e.target.value);
                  }}
                  color="secondary"
                />
              );
            },
          },
          { title: 'Phone Number', field: 'phone' },
          {
            title: 'Hub Type',
            field: 'hubType',
            editComponent: ({ onChange, value }) => {
              return (
                <Select
                  labelId="edit-select-mat-table"
                  id="edit-select-mat-table-id"
                  value={value}
                  onChange={e => {
                    onChange(e.target.value);
                  }}
                >
                  <MenuItem value={'major'}>Major</MenuItem>
                  <MenuItem value={'minor'}>Minor</MenuItem>
                </Select>
              );
            },
          },
        ]}
        data={tableData}
        title="Edit City Entries"
      />
    </div>
  );
}
