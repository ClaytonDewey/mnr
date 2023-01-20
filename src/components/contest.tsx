import { useEffect, useState } from 'react';
import { fetchContest } from '../api-client';

const Contest = ({ id }) => {
  const [contest, setContest] = useState({} as any);

  useEffect(() => {
    fetchContest(id).then((contest) => {
      setContest(contest);
    });
  });

  return (
    <div className="contest">
      <div className="title">Contest Description</div>
      <div className="description">{contest.description}</div>
    </div>
  );
};

export default Contest;
