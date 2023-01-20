import { useState } from 'react';
import Contest from './contest';
import ContestList from './contest-list';

const App = ({ initialData }) => {
  const [page, setPage] = useState('contestList');
  const [currentContestId, setCurrentContestId] = useState();

  const navigateToContest = (contestId) => {
    setPage('contest');
    setCurrentContestId(contestId);
  };

  const pageContent = () => {
    switch (page) {
      case 'contestList':
        return (
          <ContestList
            initialContests={initialData.contests}
            onContestClick={navigateToContest}
          />
        );
      case 'contest':
        return <Contest id={currentContestId} />;
    }
  };

  return <div className="container">{pageContent()}</div>;
};

export default App;
