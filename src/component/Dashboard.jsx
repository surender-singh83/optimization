import React from 'react';
import Table from './table';
import SearchForm from './SearchForm';
import {useSelector} from 'react-redux';
const Dashboard = () => {
  const searchQuery = useSelector(state=> state.searchReducers.search)
  return (
    <div>
      <SearchForm />
      <Table url={'https://reqres.in/api/users/'} filter={searchQuery} />
    </div>
  )
}

export default Dashboard;
