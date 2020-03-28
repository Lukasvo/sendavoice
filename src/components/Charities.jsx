import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const CHARITIES = gql`
    {
        charities {
            _id,
            title,
            description,
            url,
        }
    }
`;

const Charities = () => {
  const { loading, error, data } = useQuery(CHARITIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return data.charities.map(({ _id, title, description, url }) => (
    <div key={_id}>
      <h2>{ title }</h2>
      <p>{ description }</p>
      <p>{ url }</p>
    </div>
  ));
};

export default Charities;
