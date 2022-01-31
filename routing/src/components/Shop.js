import React from 'react';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Shop = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    console.log(users)
    setUsers(users)
  }

  return (
    <div>
      {users.map((user) => (
        <h6 key={user.id}> 
          <Link to={`/shop/${user.id}`}>{user.name}</Link></h6>
      ))}
    </div>
  );
};

export default Shop;
